"use client";

import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default Provider;

// 1:16:00
