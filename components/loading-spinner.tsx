import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/lib/language-context'

export function LoadingSpinner() {
  const router = useRouter()
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <p className="mt-4 text-gray-600 text-center max-w-md">
        {t('loading')}
      </p>
    </div>
  )
}

export function IkigaiLoadingSpinner() {
  const router = useRouter()
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <p className="mt-4 text-gray-600 text-center max-w-md">
        {t('generatingIkigai')}
      </p>
      <Button
        variant="outline"
        onClick={() => router.push('/')}
        className="mt-8"
      >
        {t('backToHome')}
      </Button>
    </div>
  )
} 