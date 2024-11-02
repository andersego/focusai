'use client'

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      className="text-sm"
    >
      {language === 'en' ? '🇪🇸 Español' : '🇬🇧 English'}
    </Button>
  )
} 