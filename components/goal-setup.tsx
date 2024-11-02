'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface GoalSetupProps {
  onAddGoal: (title: string, deadline: string) => void;
}

export function GoalSetup({ onAddGoal }: GoalSetupProps) {
  const router = useRouter()
  const { data: session } = useSession()
  const [goal, setGoal] = useState('')
  const [deadline, setDeadline] = useState('')
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!goal || !deadline || !session?.user) {
      return
    }

    const goalId = Date.now().toString()
    
    // Create new goal object
    const newGoal = {
      id: goalId,
      title: goal,
      deadline: deadline,
      progress: 0,
      userId: session.user.id,
      createdAt: new Date().toISOString()
    }

    // Get existing goals
    const existingGoals = JSON.parse(localStorage.getItem(`goals-${session.user.id}`) || '[]')
    
    // Add new goal
    const updatedGoals = [...existingGoals, newGoal]
    
    // Save to localStorage
    localStorage.setItem(`goals-${session.user.id}`, JSON.stringify(updatedGoals))
    
    // Call the parent's handler
    onAddGoal(goal, deadline)
    
    // Clear form
    setGoal('')
    setDeadline('')
    
    // Navigate to tasks page
    router.push(`/goals/${goalId}/tasks`)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600">{t('setNewGoal')}</CardTitle>
        <CardDescription>{t('defineGoalDescription')}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="goal">{t('whatsYourGoal')}</Label>
              <Input 
                id="goal" 
                placeholder={t('goalPlaceholder')}
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                required
                className="w-full"
                minLength={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="deadline">{t('whenAchieve')}</Label>
              <div className="relative">
                <Input 
                  id="deadline" 
                  type="date" 
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  required
                  className="w-full"
                  min={new Date().toISOString().split('T')[0]}
                />
                <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
            disabled={!goal || !deadline}
          >
            {t('addNewGoal')}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}