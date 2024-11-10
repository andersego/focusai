'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from '@/lib/language-context'
import { Target, Compass, Users } from 'lucide-react'
import { LoadingSpinner } from '@/components/loading-spinner'
import { Footer } from '@/components/footer'; // Changed to named import


import Link from 'next/link'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { t } = useLanguage()
  const [showComingSoon, setShowComingSoon] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, session, router])

  const handlePersonalBrandClick = () => {
    setShowComingSoon(true)
    setTimeout(() => setShowComingSoon(false), 3000)
  }

  if (status === 'loading') {
    return <LoadingSpinner />
  }

  if (!session) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-gray-50 p-4 pt-20 md:pt-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600">FocusAI</h1>
            <p className="text-base md:text-lg text-gray-500">{t('appDescription')}</p>
            <p className="text-sm text-gray-500">
              by{' '}
              <Link 
                href="https://www.instagram.com/ander.focus.ia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                Ander Focus
              </Link>
            </p>
          </div>

          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push('/ikigai')}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <Compass className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="break-words">{t('ikigaiTitle')}</span>
                </CardTitle>
                <CardDescription className="text-sm md:text-base">{t('ikigaiDescription')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs md:text-sm text-gray-600">{t('ikigaiContent')}</p>
              </CardContent>
            </Card>

            <Card 
              className="hover:shadow-lg transition-shadow cursor-pointer relative" 
              onClick={handlePersonalBrandClick}
            >
              {showComingSoon && (
                <div className="absolute inset-0 bg-blue-500 bg-opacity-90 rounded-lg flex items-center justify-center text-white text-lg font-medium z-10 transition-all duration-300">
                  {t('featureComingSoon')}
                </div>
              )}
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <Users className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="break-words">{t('personalBrandTitle')}</span>
                </CardTitle>
                <CardDescription className="text-sm md:text-base">{t('personalBrandDescription')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs md:text-sm text-gray-600">{t('personalBrandContent')}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push('/goals')}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <Target className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="break-words">{t('goalsTitle')}</span>
                </CardTitle>
                <CardDescription className="text-sm md:text-base">{t('goalsDescription')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs md:text-sm text-gray-600">{t('goalsContent')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 