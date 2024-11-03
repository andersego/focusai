'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { translations } from './translations'

export type Language = 'en' | 'es'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof typeof translations.en) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()
  const [language, setLanguage] = useState<Language>('es') // Default to Spanish

  useEffect(() => {
    // Try to detect language from email domain
    if (session?.user?.email) {
      const emailDomain = session.user.email.split('@')[1]
      // If email domain ends with .com, assume English, otherwise Spanish
      if (emailDomain.endsWith('.com')) {
        setLanguage('en')
      }
    }
  }, [session])

  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 