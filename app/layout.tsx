import { Inter } from 'next/font/google'
import { SessionProvider } from '@/providers/session-provider'
import { LanguageProvider } from '@/lib/language-context'
import { DevTimeProvider } from '@/lib/dev-time-context'
import { ClientLayout } from '@/components/client-layout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FocusAI',
  description: 'Your AI-powered goal achievement companion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <LanguageProvider>
            <DevTimeProvider>
              <ClientLayout>
                {children}
              </ClientLayout>
            </DevTimeProvider>
          </LanguageProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
