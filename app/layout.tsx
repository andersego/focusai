import { Inter } from 'next/font/google'
import { SessionProvider } from '@/providers/session-provider'
import { LanguageProvider } from '@/lib/language-context'
import { DevTimeProvider } from '@/lib/dev-time-context'
import { ClientLayout } from '@/components/client-layout'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CreatorsAi',
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
        <Analytics />
      </body>
    </html>
  )
}
