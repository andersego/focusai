'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { MessageSquare, ArrowLeft, Smile, Meh, Frown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useDevTime } from '@/lib/dev-time-context'
import { useLanguage } from '@/lib/language-context'

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface DailyTasksProps {
  goalId: string;
}

export function DailyTasks({ goalId }: DailyTasksProps) {
  const router = useRouter()
  const { data: session } = useSession()
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<{ message: string; details?: string }>({ message: '' })
  const [goalTitle, setGoalTitle] = useState('')
  const { currentDay } = useDevTime()
  const { t } = useLanguage()
  const [selectedFeedback, setSelectedFeedback] = useState<string | null>(null);

  useEffect(() => {
    if (!session?.user) return;

    const fetchTasks = async () => {
      try {
        const goals = JSON.parse(localStorage.getItem(`goals-${session.user.id}`) || '[]')
        const goal = goals.find((g: any) => g.id === goalId)
        
        if (!goal) {
          throw new Error('Goal not found')
        }

        setGoalTitle(goal.title)

        // Get stored tasks for this goal and day
        const storedTasks = JSON.parse(localStorage.getItem(`tasks-${session.user.id}`) || '{}')
        const todaysTasks = storedTasks[`${goalId}-day-${currentDay}`]

        if (todaysTasks) {
          setTasks(todaysTasks)
          setLoading(false)
          return
        }

        const response = await fetch('/api/generate-tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            goal: goal.title,
            deadline: goal.deadline,
            previousTasks: storedTasks[`${goalId}-day-${currentDay - 1}`] || [],
            currentDay,
          }),
        });

        if (!response.ok) {
          throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();
        setTasks(data.tasks);

        // Store new tasks
        storedTasks[`${goalId}-day-${currentDay}`] = data.tasks
        localStorage.setItem(`tasks-${session.user.id}`, JSON.stringify(storedTasks))
      } catch (err) {
        console.error('Error fetching tasks:', err);
        setError({
          message: 'Failed to load tasks',
          details: err instanceof Error ? err.message : 'Unknown error'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [goalId, session, currentDay]);

  const updateGoalProgress = () => {
    if (!session?.user) return;

    const storedTasks = JSON.parse(localStorage.getItem(`tasks-${session.user.id}`) || '{}');
    const goals = JSON.parse(localStorage.getItem(`goals-${session.user.id}`) || '[]');
    const goal = goals.find((g: any) => g.id === goalId);

    if (goal) {
      let totalTasks = 0;
      let completedTasks = 0;

      // Count all tasks and completed tasks
      Object.keys(storedTasks).forEach(key => {
        if (key.startsWith(`${goalId}-day-`)) {
          const dayTasks = storedTasks[key];
          totalTasks += dayTasks.length;
          completedTasks += dayTasks.filter((t: Task) => t.completed).length;
        }
      });

      // Calculate efficiency
      const efficiency = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

      // Update goal with new progress and efficiency
      const updatedGoals = goals.map((g: any) => 
        g.id === goalId 
          ? { 
              ...g, 
              tasksCompleted: completedTasks,
              totalTasks,
              efficiency,
              dailyProgress: Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100)
            } 
          : g
      );

      localStorage.setItem(`goals-${session.user.id}`, JSON.stringify(updatedGoals));
    }
  };

  const handleTaskChange = (taskId: number) => {
    if (!session?.user) return;

    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    
    // Update tasks in localStorage
    const storedTasks = JSON.parse(localStorage.getItem(`tasks-${session.user.id}`) || '{}');
    storedTasks[`${goalId}-day-${currentDay}`] = updatedTasks;
    localStorage.setItem(`tasks-${session.user.id}`, JSON.stringify(storedTasks));

    setTasks(updatedTasks);
    
    // Update goal progress and efficiency
    updateGoalProgress();
  };

  // Call updateGoalProgress when component mounts and when tasks change
  useEffect(() => {
    if (tasks.length > 0) {
      updateGoalProgress();
    }
  }, [tasks, session, goalId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">{t('generatingTasks')}</p>
        </div>
      </div>
    );
  }

  const completedTasks = tasks.filter(task => task.completed).length;
  const dailyProgress = (completedTasks / tasks.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto space-y-8">
        {/* Today's Tasks Card */}
        <Card className="w-full">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.push('/goals')}
                className="absolute left-4 top-4"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </div>
            <CardTitle className="text-2xl font-bold text-center text-blue-600">{goalTitle}</CardTitle>
            <CardDescription className="text-center">{t('completeTasksMessage')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {tasks.map(task => (
              <div key={task.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`task-${task.id}`} 
                  checked={task.completed}
                  onCheckedChange={() => handleTaskChange(task.id)}
                />
                <label
                  htmlFor={`task-${task.id}`}
                  className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                    task.completed ? 'line-through text-gray-500' : ''
                  }`}
                >
                  {task.text}
                </label>
              </div>
            ))}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>{t('todaysProgress')}</span>
                <span>{completedTasks}/{tasks.length} {t('tasksCompleted')}</span>
              </div>
              <Progress value={dailyProgress} className="w-full" />
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => router.push(`/goals/${goalId}/progress`)}
            >
              {t('viewProgress')}
            </Button>
            <Button
              onClick={() => router.push(`/goals/${goalId}/feedback`)}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              {t('provideFeedback')}
            </Button>
          </CardFooter>
        </Card>

        {/* Previous Days Tasks */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">{t('previousDays')}</h3>
          {Array.from({ length: currentDay }).reverse().map((_, index) => {
            const day = currentDay - index - 1;
            const storedTasks = JSON.parse(localStorage.getItem(`tasks-${session?.user?.id}`) || '{}');
            const dayTasks = storedTasks[`${goalId}-day-${day}`] || [];
            const dayFeedback = JSON.parse(localStorage.getItem(`feedback-${session?.user?.id}`) || '{}')[`${goalId}-day-${day}`];
            const isExpanded = selectedFeedback === `day-${day}`;

            return (
              <Card key={day} className="w-full bg-gray-50 border-gray-200">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      {t('day')} {day + 1}
                    </CardTitle>
                    {dayFeedback && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedFeedback(isExpanded ? null : `day-${day}`)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        {isExpanded ? t('hideFeedback') : t('showFeedback')}
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Day's Tasks */}
                  <div className="space-y-2">
                    {dayTasks.map((task: Task) => (
                      <div key={task.id} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full border ${
                          task.completed 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-gray-300'
                        }`} />
                        <span className={`text-sm ${
                          task.completed 
                            ? 'text-gray-600 line-through' 
                            : 'text-gray-700'
                        }`}>
                          {task.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Day's Feedback */}
                  {dayFeedback && isExpanded && (
                    <div className="mt-4 bg-blue-50 rounded-lg p-3 space-y-2">
                      <div className="flex items-center gap-2">
                        {dayFeedback.mood === 'great' && <Smile className="h-4 w-4 text-green-500" />}
                        {dayFeedback.mood === 'okay' && <Meh className="h-4 w-4 text-yellow-500" />}
                        {dayFeedback.mood === 'challenging' && <Frown className="h-4 w-4 text-red-500" />}
                        <span className="text-sm font-medium text-gray-700">
                          {t(dayFeedback.mood)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {dayFeedback.feedback}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}