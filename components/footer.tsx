'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-auto">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="space-y-4">
          <div className="flex justify-center items-center space-x-4">
            <Link 
              href="https://www.instagram.com/ander.focus.ia/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </Link>
            <span className="text-gray-300">|</span>
            <Link 
              href="https://www.linkedin.com/in/ander-sepulveda/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
            <span className="text-gray-300">|</span>
            <Link 
              href="/privacy-policy" 
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              {t('privacyPolicy')}
            </Link>
            <span className="text-gray-300">|</span>
            <Link 
              href="/terms" 
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              {t('termsOfService')}
            </Link>
          </div>
          
          <p className="text-sm text-gray-500">
            © {currentYear} FocusAI {t('allRightsReserved')}
          </p>
          
          <p className="text-xs text-gray-400">
            {t('footerDescription')}
          </p>
        </div>
      </div>
    </footer>
  )
} 