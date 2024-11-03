'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from '@/lib/language-context'
import { Target, Compass, Users } from 'lucide-react'
import { LoadingSpinner } from '@/components/loading-spinner'
import Link from 'next/link'

export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { t } = useLanguage()
  const [showComingSoon, setShowComingSoon] = useState(false)

  useEffect(() => {
    console.log('Session status:', status)
    console.log('Session data:', session)

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
      <div className="flex-grow bg-gray-50 p-4">
        <div className="max-w-2xl mx-auto space-y-8">
          {showComingSoon && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800">
              {t('featureComingSoon')}
            </div>
          )}

          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-blue-600">FocusAI</h1>
            <p className="text-lg text-gray-500">{t('appDescription')}</p>
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
                <CardTitle className="flex items-center gap-2">
                  <Compass className="h-5 w-5 text-blue-500" />
                  {t('ikigaiTitle')}
                </CardTitle>
                <CardDescription>{t('ikigaiDescription')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{t('ikigaiContent')}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handlePersonalBrandClick}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  {t('personalBrandTitle')}
                </CardTitle>
                <CardDescription>{t('personalBrandDescription')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{t('personalBrandContent')}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push('/goals')}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-500" />
                  {t('goalsTitle')}
                </CardTitle>
                <CardDescription>{t('goalsDescription')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{t('goalsContent')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}