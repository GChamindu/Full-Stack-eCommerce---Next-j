"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface propsType {
    children:ReactNode;
}
const AuthProvider = ({children}:propsType) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default AuthProvider
