'use client'

import { useLanguage } from '@/lib/language-context'

export default function PrivacyPolicy() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('privacyPolicy')}</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{t('privacyIntro')}</h2>
              <p>{t('privacyIntroText')}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{t('dataCollection')}</h2>
              <p>{t('dataCollectionText')}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{t('dataSecurity')}</h2>
              <p>{t('dataSecurityText')}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{t('contactInfo')}</h2>
              <p>{t('contactInfoText')}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 