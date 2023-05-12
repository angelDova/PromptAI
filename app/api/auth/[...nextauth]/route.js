import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
// Every NextJS route is a serverless route

import User from "@models/user";
import { connectToDB } from "utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},

  async signIn({ profile }) {
    try {
      await connectToDB();

      // check if a user already exists
      const userExists = await User.findOne({
        email: profile.email,
      });

      //if not, create a new user

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };

// 1:35:13
