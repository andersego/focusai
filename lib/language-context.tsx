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
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Try to get from localStorage only on client side
    const savedLanguage = typeof window !== 'undefined' 
      ? localStorage.getItem('preferredLanguage') as Language 
      : null

    if (savedLanguage === 'en' || savedLanguage === 'es') {
      setLanguage(savedLanguage)
    } else if (session?.user?.email) {
      // If no saved preference, try to detect from email
      const emailDomain = session.user.email.split('@')[1]
      if (emailDomain.endsWith('.com')) {
        setLanguage('en')
      }
    }
  }, [session])

  // Save language preference only on client side
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('preferredLanguage', language)
    }
  }, [language, isClient])

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