"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import HotToastProvider from "./HotToastProvider";

export default function ({ children }: { children: ReactNode }) {
  return (
    <>
      <SessionProvider>
        <HotToastProvider>{children}</HotToastProvider>
      </SessionProvider>
    </>
  );
}
