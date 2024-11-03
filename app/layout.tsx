import { Inter } from 'next/font/google'
import './globals.css'
import { ClientLayout } from '@/components/client-layout'
import { SessionProvider } from '@/providers/session-provider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </SessionProvider>
      </body>
    </html>
  )
}
