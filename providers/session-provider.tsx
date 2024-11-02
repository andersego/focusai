'use client'

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react"

export function SessionProvider({ children }: { children: React.ReactNode }) {
  console.log('SessionProvider initialized')
  return (
    <NextAuthSessionProvider>
      {children}
    </NextAuthSessionProvider>
  )
} 