'use client'

import { Feedback } from '@/components/feedback'
import { useParams } from 'next/navigation'

export default function FeedbackPage() {
  const params = useParams()
  
  if (!params?.goalId) {
    return null
  }

  return <Feedback goalId={params.goalId as string} />
} 