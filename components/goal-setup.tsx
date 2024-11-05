'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { CalendarIcon } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

interface GoalSetupProps {
  onAddGoal: (title: string, deadline: string) => void;
  router: AppRouterInstance;
}

export function GoalSetup({ onAddGoal, router }: GoalSetupProps) {
  const [goal, setGoal] = useState('')
  const [deadline, setDeadline] = useState('')
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!goal || !deadline) {
      return
    }

    onAddGoal(goal, deadline)
    setGoal('')
    setDeadline('')
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
      <CardFooter className="flex justify-start">
        <Button
          variant="outline"
          onClick={() => router.push('/')}
          className="text-sm"
        >
          {t('back')}
        </Button>
      </CardFooter>
    </Card>
  )
}