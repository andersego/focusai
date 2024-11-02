'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from '@/lib/language-context'
import { Heart, Brain, Globe, DollarSign, Loader2, History } from 'lucide-react'
import { useSession } from 'next-auth/react'

interface IkigaiAnswers {
  love: string;
  good: string;
  world: string;
  paid: string;
}

interface IkigaiResult {
  profession: string;
  connections: {
    passion: string;
    mission: string;
    vocation: string;
    profession: string;
  };
  path: string;
  timestamp?: string;
}

interface StoredIkigai {
  attempts: number;
  results: IkigaiResult[];
}

export default function IkigaiPage() {
  const { t } = useLanguage()
  const { data: session } = useSession()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<IkigaiAnswers>({
    love: '',
    good: '',
    world: '',
    paid: '',
  })
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<IkigaiResult | null>(null)
  const [storedIkigai, setStoredIkigai] = useState<StoredIkigai | null>(null)
  const [showHistory, setShowHistory] = useState(false)

  useEffect(() => {
    if (session?.user) {
      const stored = localStorage.getItem(`ikigai-${session.user.id}`)
      if (stored) {
        const parsedStored = JSON.parse(stored) as StoredIkigai
        setStoredIkigai(parsedStored)
        if (parsedStored.results.length > 0 && !result) {
          setResult(parsedStored.results[parsedStored.results.length - 1])
        }
      } else {
        setStoredIkigai({ attempts: 0, results: [] })
      }
    }
  }, [session])

  const questions = [
    { key: 'love' as keyof IkigaiAnswers, text: t('ikigaiLoveQuestion'), icon: Heart, color: 'text-red-500' },
    { key: 'good' as keyof IkigaiAnswers, text: t('ikigaiGoodQuestion'), icon: Brain, color: 'text-blue-500' },
    { key: 'world' as keyof IkigaiAnswers, text: t('ikigaiWorldQuestion'), icon: Globe, color: 'text-green-500' },
    { key: 'paid' as keyof IkigaiAnswers, text: t('ikigaiPaidQuestion'), icon: DollarSign, color: 'text-yellow-500' },
  ]

  const handleNext = async () => {
    if (currentAnswer.trim() === '') return;

    const updatedAnswers = {
      ...answers,
      [questions[step].key]: currentAnswer,
    }
    setAnswers(updatedAnswers)
    setCurrentAnswer('')

    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      if (!session?.user || !storedIkigai || storedIkigai.attempts >= 3) return;
      
      setLoading(true)
      try {
        const response = await fetch('/api/analyze-ikigai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedAnswers),
        })

        const data = await response.json()
        const newResult = { ...data, timestamp: new Date().toISOString() }
        setResult(newResult)

        // Update stored ikigai
        const updatedIkigai = {
          attempts: storedIkigai.attempts + 1,
          results: [...storedIkigai.results, newResult]
        }
        setStoredIkigai(updatedIkigai)
        localStorage.setItem(`ikigai-${session.user.id}`, JSON.stringify(updatedIkigai))
      } catch (error) {
        console.error('Error analyzing ikigai:', error)
      } finally {
        setLoading(false)
      }
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
      setCurrentAnswer(answers[questions[step - 1].key])
    }
  }

  const handleReset = () => {
    if (!storedIkigai || storedIkigai.attempts >= 3) return;
    setStep(0)
    setAnswers({
      love: '',
      good: '',
      world: '',
      paid: '',
    })
    setCurrentAnswer('')
    setResult(null)
  }

  const CurrentIcon = questions[step]?.icon

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-xl">
          <CardContent className="pt-6 text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-blue-600 mb-4" />
            <p className="text-gray-600">{t('ikigaiAnalyzing')}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (result) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-blue-600">
              {t('ikigaiResult')}
            </CardTitle>
            <CardDescription className="text-center">
              {t('ikigaiResultDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">{t('ikigaiSuggestedProfession')}</h3>
              <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">{result.profession}</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">{t('ikigaiConnections')}</h3>
              <div className="grid gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-1">{t('ikigaiPassion')}</h4>
                  <p className="text-gray-700">{result.connections.passion}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-1">{t('ikigaiMission')}</h4>
                  <p className="text-gray-700">{result.connections.mission}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-1">{t('ikigaiVocation')}</h4>
                  <p className="text-gray-700">{result.connections.vocation}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-1">{t('ikigaiProfession')}</h4>
                  <p className="text-gray-700">{result.connections.profession}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">{t('ikigaiSuggestedPath')}</h3>
              <p className="text-gray-700 bg-blue-50 p-4 rounded-lg whitespace-pre-line">{result.path}</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            {storedIkigai && storedIkigai.attempts < 3 ? (
              <Button
                onClick={handleReset}
                className="flex items-center gap-2"
              >
                {t('createNewIkigai')}
              </Button>
            ) : (
              <div className="text-sm text-gray-500">
                {t('maxAttemptsReached')}
              </div>
            )}
            <Button 
              variant="outline"
              onClick={() => setShowHistory(true)}
              className="flex items-center gap-2"
            >
              <History className="w-4 h-4" />
              {t('viewPreviousResults')}
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            {CurrentIcon && <CurrentIcon className={`h-12 w-12 ${questions[step].color}`} />}
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            {questions[step].text}
          </CardTitle>
          <CardDescription className="text-center">
            {t('ikigaiStepDescription')} {step + 1}/4
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
            placeholder={t('ikigaiAnswerPlaceholder')}
            className="min-h-[150px]"
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={step === 0}
          >
            {t('back')}
          </Button>
          <Button
            onClick={handleNext}
            disabled={!currentAnswer.trim()}
          >
            {step < questions.length - 1 ? t('next') : t('finish')}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
} 