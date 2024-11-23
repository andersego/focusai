'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { useLanguage } from '@/lib/language-context'
import { LanguageSwitcher } from '@/components/language-switcher'

export const MainNav = () => {
  const router = useRouter()
  const pathname = usePathname() // Hook para obtener la ruta actual
  const { t } = useLanguage()

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            onClick={() => router.push('/')}
          >
            {t('appName')}
          </div>
          <div className="flex items-center gap-0">
            <Button 
              variant={pathname === '/business' ? 'default' : 'ghost'} 
              className="font-medium"
              onClick={() => router.push('/business')}
            >
              {t('forBusinesses')}
            </Button>
            <Button 
              variant={pathname === '/individuals' ? 'default' : 'ghost'}
              onClick={() => router.push('/individuals')}
            >
              {t('forIndividuals')}
            </Button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}
