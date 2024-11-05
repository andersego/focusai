'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from '@/lib/language-context'
import { LoadingSpinner } from '@/components/loading-spinner'
import { ArrowLeft, Heart, Star, Globe, DollarSign } from 'lucide-react'

interface IkigaiResult {
  suggestedProfession: string;
  connections: {
    passion: string;
    mission: string;
    vocation: string;
    profession: string;
  };
  steps: string[];
}

type Step = 'love' | 'good' | 'world' | 'paid' | 'result';

export default function IkigaiPage() {
  const router = useRouter()
  const { t, language } = useLanguage()
  const [currentStep, setCurrentStep] = useState<Step>('love')
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<IkigaiResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const getStepIcon = (step: Step) => {
    switch (step) {
      case 'love':
        return <Heart className="h-12 w-12 text-red-500" />
      case 'good':
        return <Star className="h-12 w-12 text-yellow-500" />
      case 'world':
        return <Globe className="h-12 w-12 text-blue-500" />
      case 'paid':
        return <DollarSign className="h-12 w-12 text-green-500" />
      default:
        return null
    }
  }

  const handleBack = () => {
    if (currentStep === 'love') {
      router.push('/')  // Si estamos en la primera pregunta, volver al inicio
    } else {
      // Obtener el índice del paso actual
      const steps: Step[] = ['love', 'good', 'world', 'paid', 'result']
      const currentIndex = steps.indexOf(currentStep)
      // Ir al paso anterior
      setCurrentStep(steps[currentIndex - 1])
    }
  }

  const handleNext = async () => {
    if (currentAnswer.trim() === '') return;

    const updatedAnswers = {
      ...answers,
      [currentStep]: currentAnswer,
    }
    setAnswers(updatedAnswers)
    setCurrentAnswer('')

    if (currentStep === 'paid') {
      setIsLoading(true)
      try {
        const response = await fetch('/api/generate-ikigai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            love: updatedAnswers.love,
            good: updatedAnswers.good,
            world: updatedAnswers.world,
            paid: updatedAnswers.paid
          }),
        })

        const data = await response.json()
        
        if (!response.ok) {
          throw new Error(data.details || 'Failed to generate analysis')
        }

        if (!data.result?.connections?.passion) {
          throw new Error('Invalid response format')
        }

        setResult(data.result)
        setCurrentStep('result')
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setIsLoading(false)
      }
    } else {
      const nextSteps: Record<Step, Step> = {
        love: 'good',
        good: 'world',
        world: 'paid',
        paid: 'result',
        result: 'result'
      }
      setCurrentStep(nextSteps[currentStep])
    }
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        {currentStep !== 'result' ? (
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex flex-col items-center">
                {getStepIcon(currentStep)}
                <h2 className="text-2xl font-bold mt-4 text-center">
                  {t(
                    currentStep === 'love' ? 'ikigaiWhatYouLoveToDo' :
                    currentStep === 'good' ? 'ikigaiGoodQuestion' :
                    currentStep === 'world' ? 'ikigaiWorldQuestion' :
                    'ikigaiPaidQuestion'
                  )}
                </h2>
              </div>
              <textarea
                className="w-full p-4 border rounded-lg min-h-[150px]"
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                placeholder={t('ikigaiAnswerPlaceholder')}
              />
              <div className="flex justify-between gap-4">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1"
                >
                  {t('back')}
                </Button>
                <Button 
                  onClick={handleNext}
                  className="flex-1"
                  disabled={currentAnswer.trim() === ''}
                >
                  {currentStep === 'paid' ? t('finish') : t('next')}
                </Button>
              </div>
            </div>
          </Card>
        ) : result && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">{t('ikigaiResult')}</h2>
            <p className="text-gray-600">{t('ikigaiResultDescription')}</p>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">{t('ikigaiSuggestedProfession')}</h3>
              <p className="text-lg text-blue-600">{result.suggestedProfession}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{t('ikigaiConnections')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-1">{t('ikigaiPassion')}</h4>
                  <p className="text-gray-700">{result.connections?.passion}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-1">{t('ikigaiMission')}</h4>
                  <p className="text-gray-700">{result.connections?.mission}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-1">{t('ikigaiVocation')}</h4>
                  <p className="text-gray-700">{result.connections?.vocation}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-1">{t('ikigaiProfession')}</h4>
                  <p className="text-gray-700">{result.connections?.profession}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">{t('ikigaiSuggestedPath')}</h3>
              <div className="space-y-3">
                {result.steps?.map((step, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="font-medium">{t('ikigaiStepDescription')} {index + 1}:</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 