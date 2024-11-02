'use client'

import { Button } from "@/components/ui/button"
import { useDevTime } from "@/lib/dev-time-context"

export function DevControls() {
  const { currentDay, advanceDay, resetDays } = useDevTime()

  return (
    <div className="fixed bottom-4 left-4 flex items-center gap-2 bg-white p-2 rounded-lg shadow">
      <span className="text-sm font-medium">Day: {currentDay}</span>
      <Button
        variant="outline"
        size="sm"
        onClick={advanceDay}
      >
        Next Day
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={resetDays}
      >
        Reset Days
      </Button>
    </div>
  )
} 