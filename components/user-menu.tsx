'use client'

import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { LogOut, User } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function UserMenu() {
  const { data: session, status } = useSession()
  const router = useRouter()

  console.log('UserMenu Render:', { status, session })

  useEffect(() => {
    console.log('Session Changed:', { status, session })
  }, [status, session])

  if (status === 'loading') {
    return null
  }

  if (!session?.user) {
    return null
  }

  return (
    <div className="flex items-center gap-2">
      <div 
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white shadow cursor-pointer hover:bg-gray-50"
        onClick={() => router.push('/')}
      >
        <User className="h-4 w-4" />
        <span className="text-sm font-medium">{session.user.name}</span>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => signOut({ callbackUrl: '/auth/signin' })}
        className="hover:bg-red-50"
      >
        <LogOut className="h-4 w-4 text-red-500" />
      </Button>
    </div>
  )
} 