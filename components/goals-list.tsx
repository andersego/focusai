'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/lib/language-context'

interface Goal {
  id: string;
  title: string;
  deadline: string;
  progress: number;
  dailyProgress?: number;
}

interface GoalsListProps {
  goals: Goal[];
  onDeleteGoal: (goalId: string) => void;
}

export function GoalsList({ goals, onDeleteGoal }: GoalsListProps) {
  const router = useRouter()
  const { t } = useLanguage()

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString()
  }

  const handleDelete = (goalId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (confirm(t('deleteConfirm'))) {
      onDeleteGoal(goalId)
    }
  }

  const handleCardClick = (goalId: string) => {
    router.push(`/goals/${goalId}/tasks`)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-4">{t('yourGoals')}</h2>
      <div className="grid gap-4">
        {goals.map((goal) => (
          <Card 
            key={goal.id} 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleCardClick(goal.id)}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-bold text-blue-600">{goal.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {t('due')} {formatDate(goal.deadline)}
                  </CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  onClick={(e) => handleDelete(goal.id, e)}
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-blue-600 rounded-full h-2 transition-all duration-300"
                  style={{ width: `${goal.dailyProgress || 0}%` }}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  {t('todaysProgress')}: {goal.dailyProgress || 0}% {t('completed')}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
        {goals.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            {t('noGoals')}
          </div>
        )}
      </div>
    </div>
  )
} 