'use client'

import { SessionProvider } from "next-auth/react"
import { LanguageProvider } from "@/lib/language-context"
import { DevTimeProvider } from "@/lib/dev-time-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { UserMenu } from "@/components/user-menu"

export function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <LanguageProvider>
        <DevTimeProvider>
          <div className="fixed top-4 right-4 flex items-center gap-4 z-50">
            <LanguageSwitcher />
            <UserMenu />
          </div>
          {children}
        </DevTimeProvider>
      </LanguageProvider>
    </SessionProvider>
  )
} 