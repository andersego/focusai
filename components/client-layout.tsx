'use client'

import { useSession } from 'next-auth/react'
import { UserMenu } from './user-menu'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()

  return (
    <main className="min-h-screen">
      {children}
    </main>
  )
} 