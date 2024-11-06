'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from '@/lib/language-context'
import { Building2, Mail } from 'lucide-react'
import { MainNav } from '@/components/main-nav'

export default function ContactPage() {
  const router = useRouter()
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <MainNav />

      {/* Contact Form Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold mb-6">{t('contactFormTitle')}</h1>
              <p className="text-xl text-gray-600 mb-8">{t('contactFormDescription')}</p>
              
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('companyName')}</h3>
                    <p className="text-gray-600">{t('officeLocation')}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contact@focusai.agency</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>{t('contactFormTitle')}</CardTitle>
                <CardDescription>{t('contactFormDescription')}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t('name')}</label>
                    <Input required placeholder={t('namePlaceholder')} />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t('email')}</label>
                    <Input required type="email" placeholder={t('emailPlaceholder')} />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t('company')}</label>
                    <Input required placeholder={t('companyPlaceholder')} />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t('message')}</label>
                    <Textarea required placeholder={t('messagePlaceholder')} />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    {t('send')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 