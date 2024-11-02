'use client'

import { ProgressSummary } from '@/components/progress-summary'
import { useParams } from 'next/navigation'

export default function ProgressPage() {
  const params = useParams()
  
  if (!params?.goalId) {
    return null
  }

  return <ProgressSummary goalId={params.goalId as string} />
} 