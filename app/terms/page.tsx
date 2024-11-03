'use client'

import { useLanguage } from '@/lib/language-context'

export default function Terms() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('termsOfService')}</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{t('termsIntro')}</h2>
              <p>{t('termsIntroText')}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{t('userObligations')}</h2>
              <p>{t('userObligationsText')}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{t('intellectualProperty')}</h2>
              <p>{t('intellectualPropertyText')}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{t('limitations')}</h2>
              <p>{t('limitationsText')}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 