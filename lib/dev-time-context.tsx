'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type DevTimeContextType = {
  currentDay: number;
  advanceDay: () => void;
  resetDays: () => void;
}

const DevTimeContext = createContext<DevTimeContextType | undefined>(undefined)

export function DevTimeProvider({ children }: { children: ReactNode }) {
  const [currentDay, setCurrentDay] = useState(0)

  const advanceDay = () => {
    setCurrentDay(prev => prev + 1)
  }

  const resetDays = () => {
    setCurrentDay(0)
  }

  return (
    <DevTimeContext.Provider value={{ currentDay, advanceDay, resetDays }}>
      {children}
    </DevTimeContext.Provider>
  )
}

export function useDevTime() {
  const context = useContext(DevTimeContext)
  if (context === undefined) {
    throw new Error('useDevTime must be used within a DevTimeProvider')
  }
  return context
} 