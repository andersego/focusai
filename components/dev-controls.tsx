'use client'

import { useDevTime } from "@/lib/dev-time-context"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function DevControls() {
  const { currentDay, setCurrentDay } = useDevTime()
  const { t } = useLanguage()

  // Only show in development
  if (process.env.NEXT_PUBLIC_ENV === 'production') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-2 bg-white p-2 rounded-lg shadow">
      <span className="text-sm font-medium">{t('currentDay')}: {currentDay + 1}</span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setCurrentDay(currentDay + 1)}
      >
        {t('nextDay')}
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setCurrentDay(0)}
      >
        {t('resetDays')}
      </Button>
    </div>
  )
} 