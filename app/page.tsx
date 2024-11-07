'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { useLanguage } from '@/lib/language-context'
import { Building2, Users, BarChart, Settings, ArrowRight } from 'lucide-react'
import { MainNav } from '@/components/main-nav'

export default function LandingPage() {
  const router = useRouter()
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <MainNav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('leanCreatorTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t('leanCreatorSubtitle')}
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => router.push('/business')}>
              {t('discoverHow')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => router.push('/contact')}
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              {t('contactUs')}
            </Button>
          </div>
        </div>
      </section>

      {/* About Lean Creator Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t('whatIsLeanCreator')}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('whatIsLeanCreatorText')}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('howLeanCreatorHelps')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Building2 className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('brandIdentity')}</h3>
              <p className="text-gray-600">{t('brandIdentityText')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('productsServices')}</h3>
              <p className="text-gray-600">{t('productsServicesText')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <BarChart className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('strategicComm')}</h3>
              <p className="text-gray-600">{t('strategicCommText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t('readyToStart')}</h2>
          <p className="text-xl text-gray-600 mb-8">{t('readyToStartText')}</p>
          <Button size="lg" onClick={() => router.push('/contact')}>
            {t('scheduleCall')}
          </Button>
        </div>
      </section>
    </div>
  )
}