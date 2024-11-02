'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart, Calendar, CheckCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useDevTime } from '@/lib/dev-time-context'
import { useLanguage } from '@/lib/language-context'

interface Props {
  goalId: string;
}

export function ProgressSummary({ goalId }: Props) {
  const router = useRouter()
  const { data: session } = useSession()
  const { currentDay } = useDevTime()
  const { t } = useLanguage()
  const [goalTitle, setGoalTitle] = useState('')
  const [progress, setProgress] = useState(0)
  const [totalTasksCompleted, setTotalTasksCompleted] = useState(0)
  const [streak, setStreak] = useState(0)
  const [efficiency, setEfficiency] = useState(0)
  const [suggestion, setSuggestion] = useState('')

  useEffect(() => {
    if (!session?.user) return;

    const calculateStats = () => {
      const goals = JSON.parse(localStorage.getItem(`goals-${session.user.id}`) || '[]')
      const goal = goals.find((g: any) => g.id === goalId)
      
      if (goal) {
        setGoalTitle(goal.title)

        // Calculate total expected tasks based on deadline
        const startDate = new Date(goal.createdAt || new Date());
        const deadlineDate = new Date(goal.deadline);
        const totalDays = Math.ceil((deadlineDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
        const totalExpectedTasks = totalDays * 3; // 3 tasks per day

        // Count all tasks and completed tasks
        const storedTasks = JSON.parse(localStorage.getItem(`tasks-${session.user.id}`) || '{}')
        let totalCompleted = 0;
        let totalTasks = 0;
        let currentStreak = 0;
        let maxStreak = 0;

        for (let day = 0; day <= currentDay; day++) {
          const dayTasks = storedTasks[`${goalId}-day-${day}`] || [];
          const dayCompletedTasks = dayTasks.filter((t: any) => t.completed).length;
          
          totalCompleted += dayCompletedTasks;
          totalTasks += dayTasks.length;

          if (dayCompletedTasks === 3) {
            currentStreak++;
            maxStreak = Math.max(maxStreak, currentStreak);
          } else {
            currentStreak = 0;
          }
        }

        // Update all stats
        setTotalTasksCompleted(totalCompleted);
        setStreak(maxStreak);
        
        // Calculate efficiency (completed tasks vs. total tasks attempted)
        const calculatedEfficiency = totalTasks > 0 
          ? Math.round((totalCompleted / totalTasks) * 100) 
          : 0;
        setEfficiency(calculatedEfficiency);

        // Calculate overall progress (completed tasks vs. expected total tasks)
        const overallProgress = Math.round((totalCompleted / totalExpectedTasks) * 100);
        setProgress(overallProgress);

        // Set suggestion based on efficiency
        if (calculatedEfficiency < 50) {
          setSuggestion(t('lowEfficiencySuggestion'));
        } else if (calculatedEfficiency < 80) {
          setSuggestion(t('mediumEfficiencySuggestion'));
        } else {
          setSuggestion(t('highEfficiencySuggestion'));
        }
      }
    }

    calculateStats();
    // Set up an interval to update stats periodically
    const intervalId = setInterval(calculateStats, 1000);
    return () => clearInterval(intervalId);
  }, [session, goalId, currentDay, t]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-600">{goalTitle}</CardTitle>
          <CardDescription className="text-center">{t('progressDescription')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">{progress}%</div>
            <Progress value={progress} className="w-full h-2" />
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <CheckCircle className="w-8 h-8 mx-auto text-green-500 mb-2" />
              <div className="text-sm font-medium">{totalTasksCompleted} {t('tasksComplete')}</div>
            </div>
            <div>
              <Calendar className="w-8 h-8 mx-auto text-blue-500 mb-2" />
              <div className="text-sm font-medium">{streak} {t('daysStreak')}</div>
            </div>
            <div>
              <BarChart className="w-8 h-8 mx-auto text-purple-500 mb-2" />
              <div className="text-sm font-medium">{efficiency}% {t('efficiency')}</div>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-800 mb-2">{t('suggestion')}</h3>
            <p className="text-sm text-yellow-700">
              {suggestion}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => router.push(`/goals/${goalId}/tasks`)}
          >
            {t('backToTasks')}
          </Button>
          <Button
            onClick={() => router.push(`/goals/${goalId}/feedback`)}
            className="bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            {t('addReflection')}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}