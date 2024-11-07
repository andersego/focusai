'use client'

import { useSession } from 'next-auth/react'
import { UserMenu } from './user-menu'
import { TopNav } from './top-nav'
import { usePathname } from 'next/navigation'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()
  const pathname = usePathname()

  // Lista de rutas donde queremos mostrar la TopNav
  const showTopNav = [
    '/dashboard',
    '/ikigai',
    '/goals',
    // Añade aquí otras rutas internas donde quieras mostrar la TopNav
  ].some(route => pathname.startsWith(route))

  return (
    <div className="min-h-screen">
      {showTopNav && <TopNav />}
      {children}
    </div>
  )
} 