"use client";
import { SessionProvider } from "next-auth/react";

export function ProviderSession({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
