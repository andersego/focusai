'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from '@/lib/language-context'
import { IkigaiLoadingSpinner } from '@/components/loading-spinner'
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
  const { data: session, status } = useSession()
  const router = useRouter()
  const { t, language } = useLanguage()
  const [currentStep, setCurrentStep] = useState<Step>('love')
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<IkigaiResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<boolean>(false)
  const [analysisId, setAnalysisId] = useState<string | null>(null)

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

  // Efecto para cargar Ikigai existente
  useEffect(() => {
    const loadExistingIkigai = async () => {
      try {
        const response = await fetch('/api/ikigai/user')
        const data = await response.json()
        if (data.ikigais?.[0]) {
          setResult(data.ikigais[0].result)
          setAnswers(data.ikigais[0].answers)
          if (data.ikigais[0].result) {
            setCurrentStep('result')
          }
        }
      } catch (error) {
        console.error('Error loading ikigai:', error)
      }
    }

    if (session?.user) {
      loadExistingIkigai()
    }
  }, [session])

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
      setError(false)

      // Crear un ID único para este análisis
      const currentAnalysisId = Date.now().toString()
      setAnalysisId(currentAnalysisId)

      // Función para generar el análisis
      const generateAnalysis = async () => {
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
              paid: updatedAnswers.paid,
              analysisId: currentAnalysisId
            })
          })

          const data = await response.json()
          
          if (!response.ok) {
            throw new Error(data.details || 'Failed to generate analysis')
          }

          // Guardar el resultado inmediatamente
          await fetch('/api/ikigai/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              result: data.result,
              answers: updatedAnswers,
              analysisId: currentAnalysisId
            })
          })

          // Solo actualizar la UI si el usuario sigue en la página
          if (document.visibilityState === 'visible') {
            setResult(data.result)
            setCurrentStep('result')
          }
        } catch (error) {
          console.error('Error:', error)
          if (document.visibilityState === 'visible') {
            setError(true)
          }
        } finally {
          if (document.visibilityState === 'visible') {
            setIsLoading(false)
          }
        }
      }

      // Iniciar el análisis
      generateAnalysis()
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

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">{t('ikigaiError')}</h2>
          <p className="text-gray-600">{t('ikigaiErrorDescription')}</p>
          <div className="flex gap-4 justify-center mt-8">
            <Button
              variant="outline"
              onClick={() => router.push('/')}
            >
              {t('backToHome')}
            </Button>
            <Button
              onClick={() => {
                setError(false)
                handleNext()
              }}
            >
              {t('tryAgain')}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return <IkigaiLoadingSpinner />
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

            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                onClick={() => {
                  setCurrentStep('love')
                  setAnswers({})
                  setResult(null)
                  setCurrentAnswer('')
                }}
              >
                {t('createNewIkigai')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 