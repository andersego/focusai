'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Smile, Meh, Frown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useLanguage } from '@/lib/language-context'

interface Props {
  goalId: string;
}

export function Feedback({ goalId }: Props) {
  const router = useRouter()
  const { data: session } = useSession()
  const { t } = useLanguage()
  const [mood, setMood] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = () => {
    if (!session?.user || !mood || !feedback) return;

    // Store feedback in localStorage
    const storedFeedback = JSON.parse(localStorage.getItem(`feedback-${session.user.id}`) || '{}')
    storedFeedback[`${goalId}-${Date.now()}`] = {
      mood,
      feedback,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem(`feedback-${session.user.id}`, JSON.stringify(storedFeedback))

    // Navigate back to tasks
    router.push(`/goals/${goalId}/tasks`)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-600">{t('dailyReflection')}</CardTitle>
          <CardDescription className="text-center">{t('howTasksAlign')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-base">{t('howFeelProgress')}</Label>
            <RadioGroup className="flex justify-center space-x-4 mt-2" value={mood} onValueChange={setMood}>
              <div className="flex flex-col items-center">
                <RadioGroupItem value="great" id="great" className="peer sr-only" />
                <Label
                  htmlFor="great"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Smile className="mb-3 h-6 w-6" />
                  <span className="text-sm font-medium">Great</span>
                </Label>
              </div>
              <div className="flex flex-col items-center">
                <RadioGroupItem value="okay" id="okay" className="peer sr-only" />
                <Label
                  htmlFor="okay"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Meh className="mb-3 h-6 w-6" />
                  <span className="text-sm font-medium">Okay</span>
                </Label>
              </div>
              <div className="flex flex-col items-center">
                <RadioGroupItem value="challenging" id="challenging" className="peer sr-only" />
                <Label
                  htmlFor="challenging"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Frown className="mb-3 h-6 w-6" />
                  <span className="text-sm font-medium">Challenging</span>
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="feedback">{t('thoughtsOnTasks')}</Label>
            <Textarea
              id="feedback"
              placeholder={t('shareExperience')}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => router.push(`/goals/${goalId}/tasks`)}
          >
            {t('cancel')}
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={!mood || !feedback}
            className="bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            {t('submit')}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}