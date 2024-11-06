'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { useLanguage } from '@/lib/language-context'
import { Building2, Users, BarChart, Settings, ArrowRight, CheckCircle } from 'lucide-react'
import { MainNav } from '@/components/main-nav'

export default function BusinessPage() {
  console.log('BusinessPage: Component rendering')
  const router = useRouter()
  const { t } = useLanguage()

  console.log('BusinessPage: Router and language loaded')
  console.log('BusinessPage: MainNav import status:', !!MainNav)

  return (
    <div className="min-h-screen bg-white">
      {console.log('BusinessPage: Before MainNav render')}
      <MainNav />
      {console.log('BusinessPage: After MainNav render')}

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('leanCreatorTitle')}
              </h1>
              <p className="text-xl mb-8">
                {t('leanCreatorDescription')}
              </p>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-blue-900"
                onClick={() => router.push('/contact')}
              >
                {t('scheduleCall')}
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-lg">
                <CheckCircle className="h-6 w-6 flex-shrink-0" />
                <span>{t('brandIdentityText')}</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <CheckCircle className="h-6 w-6 flex-shrink-0" />
                <span>{t('productsServicesText')}</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <CheckCircle className="h-6 w-6 flex-shrink-0" />
                <span>{t('strategicCommText')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('howLeanCreatorHelps')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">{t('brandIdentity')}</h3>
              <p className="text-gray-600">{t('brandIdentityText')}</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">{t('productsServices')}</h3>
              <p className="text-gray-600">{t('productsServicesText')}</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">{t('strategicComm')}</h3>
              <p className="text-gray-600">{t('strategicCommText')}</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Settings className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">{t('salesAutomation')}</h3>
              <p className="text-gray-600">{t('salesAutomationText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t('readyToStart')}</h2>
          <p className="text-xl text-gray-600 mb-8">{t('readyToStartText')}</p>
          <Button 
            size="lg"
            onClick={() => router.push('/contact')}
          >
            {t('scheduleCall')}
          </Button>
        </div>
      </section>
    </div>
  )
} 