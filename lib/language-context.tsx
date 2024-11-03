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
  const [language, setLanguage] = useState<Language>(() => {
    // First try to get from localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage') as Language
    if (savedLanguage === 'en' || savedLanguage === 'es') {
      return savedLanguage
    }
    // If no saved preference, default to Spanish
    return 'es'
  })

  // Save language preference whenever it changes
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language)
  }, [language])

  // Try to detect language from email domain only if no preference is saved
  useEffect(() => {
    if (!localStorage.getItem('preferredLanguage') && session?.user?.email) {
      const emailDomain = session.user.email.split('@')[1]
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