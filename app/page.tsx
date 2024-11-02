'use client'

import { useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import { Target, Compass } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto space-y-8">
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

        {session?.user && (
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-600">
              {t('welcome')}, {session.user.name}!
            </h2>
          </div>
        )}

        <div className="flex flex-col space-y-6">
          <Card 
            className="hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-1"
            onClick={() => router.push('/ikigai')}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Compass className="h-6 w-6 text-purple-600" />
                {t('ikigaiTitle')}
              </CardTitle>
              <CardDescription>
                {t('ikigaiDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                {t('ikigaiContent')}
              </p>
            </CardContent>
          </Card>

          <Card 
            className="hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-1"
            onClick={() => router.push('/goals')}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                {t('goalsTitle')}
              </CardTitle>
              <CardDescription>
                {t('goalsDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                {t('goalsContent')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}