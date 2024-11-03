'use client'

import { LanguageProvider } from "@/lib/language-context"
import { DevTimeProvider } from "@/lib/dev-time-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { UserMenu } from "@/components/user-menu"
import { Footer } from "@/components/footer"

export function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <DevTimeProvider>
        <div className="min-h-screen flex flex-col">
          <div className="fixed top-4 right-4 flex items-center gap-4 z-50">
            <LanguageSwitcher />
            <UserMenu />
          </div>
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </DevTimeProvider>
    </LanguageProvider>
  )
} 