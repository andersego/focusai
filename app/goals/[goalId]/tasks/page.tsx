'use client'

import { DailyTasks } from '@/components/daily-tasks'
import { useParams } from 'next/navigation'

export default function TasksPage() {
  const params = useParams()
  
  if (!params?.goalId) {
    return null
  }

  return <DailyTasks goalId={params.goalId as string} />
} 