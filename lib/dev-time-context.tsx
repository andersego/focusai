'use client'

import { createContext, useContext, useState } from 'react'

export type DevTimeContextType = {
  currentDay: number;
  setCurrentDay: (day: number) => void;
}

const DevTimeContext = createContext<DevTimeContextType | undefined>(undefined)

export function DevTimeProvider({ children }: { children: React.ReactNode }) {
  const [currentDay, setCurrentDay] = useState(0)

  return (
    <DevTimeContext.Provider value={{ currentDay, setCurrentDay }}>
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