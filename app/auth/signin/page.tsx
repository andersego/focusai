'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useLanguage } from '@/lib/language-context'
import { MainNav } from '@/components/main-nav'
import { Footer } from '@/components/footer'; // Changed to named import


export default function SignInPage() {
  const router = useRouter()
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent;

    // Verificar si el usuario está en un WebView
    const isWebView = /wv|webview/i.test(userAgent);

    if (isWebView) {
      alert('Para iniciar sesión, por favor, copia y pega el enlace en tu navegador normal.');
      window.open('https://focusai-git-staging-andersegos-projects.vercel.app/auth/signin', '_system'); // '_system' abre en el navegador externo
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError(t('invalidCredentials'))
      } else {
        router.push('/dashboard')
        router.refresh()
      }
    } catch (error) {
      setError(t('signInError'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      
      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-3">
            <CardTitle className="text-2xl md:text-3xl font-bold text-center text-blue-600">FocusAI</CardTitle>
            <p className="text-gray-500 text-center text-sm md:text-base">{t('appDescription')}</p>
            <CardDescription className="text-center text-sm md:text-base">{t('signInDescription')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder={t('email')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder={t('password')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? t('signingIn') : t('signIn')}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">{t('orContinueWith')}</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => signIn('google')}
            >
              {t('signInWithGoogle')}
            </Button>

            <p className="text-center text-sm text-gray-600">
              {t('noAccount')}{' '}
              <Button variant="link" onClick={() => router.push('/auth/signup')}>
                {t('signUp')}
              </Button>
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />

    </div>
  )
} 