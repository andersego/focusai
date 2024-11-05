'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { GoalSetup } from '@/components/goal-setup'
import { GoalsList } from '@/components/goals-list'
import { useLanguage } from '@/lib/language-context'
import { useDevTime } from '@/lib/dev-time-context'
import { DevControls } from '@/components/dev-controls'
import { useRouter } from 'next/navigation'

interface Goal {
  id: string;
  title: string;
  deadline: string;
  progress: number;
}

export default function GoalsPage() {
  const { data: session } = useSession()
  const { t } = useLanguage()
  const [goals, setGoals] = useState<Goal[]>([])
  const router = useRouter()

  useEffect(() => {
    if (session?.user) {
      const storedGoals = localStorage.getItem(`goals-${session.user.id}`)
      if (storedGoals) {
        setGoals(JSON.parse(storedGoals))
      }
    }
  }, [session])

  const handleAddGoal = (title: string, deadline: string) => {
    if (!session?.user) return

    const newGoal: Goal = {
      id: Date.now().toString(),
      title,
      deadline,
      progress: 0
    }
    
    const updatedGoals = [...goals, newGoal]
    setGoals(updatedGoals)
    localStorage.setItem(`goals-${session.user.id}`, JSON.stringify(updatedGoals))
  }

  const handleDeleteGoal = (goalId: string) => {
    if (!session?.user) return

    // Remove goal from goals list
    const updatedGoals = goals.filter(goal => goal.id !== goalId)
    setGoals(updatedGoals)
    localStorage.setItem(`goals-${session.user.id}`, JSON.stringify(updatedGoals))
    
    // Clean up all related data
    const cleanupData = () => {
      // Clean up tasks
      const storedTasks = JSON.parse(localStorage.getItem(`tasks-${session.user.id}`) || '{}')
      Object.keys(storedTasks).forEach(key => {
        if (key.startsWith(`${goalId}-`)) {
          delete storedTasks[key]
        }
      })
      localStorage.setItem(`tasks-${session.user.id}`, JSON.stringify(storedTasks))

      // Clean up feedback
      const storedFeedback = JSON.parse(localStorage.getItem(`feedback-${session.user.id}`) || '{}')
      Object.keys(storedFeedback).forEach(key => {
        if (key.startsWith(`${goalId}-`)) {
          delete storedFeedback[key]
        }
      })
      localStorage.setItem(`feedback-${session.user.id}`, JSON.stringify(storedFeedback))

      // Clean up any other related data
      const storedProgress = JSON.parse(localStorage.getItem(`progress-${session.user.id}`) || '{}')
      delete storedProgress[goalId]
      localStorage.setItem(`progress-${session.user.id}`, JSON.stringify(storedProgress))
    }

    cleanupData()
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto space-y-8">
        <GoalSetup onAddGoal={handleAddGoal} router={router} />
        <div className="h-px bg-gray-200" />
        <GoalsList goals={goals} onDeleteGoal={handleDeleteGoal} />
      </div>
      <DevControls />
    </div>
  )
} 