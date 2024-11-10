'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MainNav } from '@/components/main-nav';
import { Footer } from '@/components/footer'; // Changed to named import
import { useLanguage } from '@/lib/language-context'


const primaryColor = '#2563EB'; // Color azul
const secondaryColor = '#ffffff'; // Color secundario
const textColor = '#000000'; // Color del texto
const privacyTextColor = '#888888'; // Color gris para el texto de política de privacidad

const IndividualsPage = () => {
  const router = useRouter();
  const { t } = useLanguage()


  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-700 to-white" style={{ backgroundColor: secondaryColor }}>
      <MainNav />
      <div className="flex flex-col items-center justify-center p-6 pt-24 mb-8">
        <img
          src="/mi-imagen.png"
          alt="Tu Nombre"
          className="w-32 h-32 rounded-full border-4 border-blue-600 mb-4"
        />
        
        <h2 className="text-xl font-bold text-center mt-2" style={{ color: primaryColor }}>
          Ander Focus IA ✨
        </h2>
        <h3 className="text-xl font-bold text-center mt-2" style={{ color: textColor }}>
        {t('automateBusinesses')}
        </h3>
        <div className="mt-2 w-full max-w-2xl bg-gray-100 rounded-lg shadow-lg p-6">
          
          <div className="mt-4 flex flex-col space-y-4">
            <button
              onClick={() => router.push('/auth/signin')}
              className="font-semibold bg-white border border-blue-600 text-blue-600 py-3 px-6 rounded-full hover:bg-blue-600 hover:text-white transition duration-200 text-lg shadow-md hover:shadow-lg"
            >
              {t('freeApp')}
            </button>
            <button
              onClick={() => window.open('https://www.youtube.com/watch?v=ZjSZQa7CpDc', '_blank')}

              className="font-semibold bg-white border border-blue-600 text-blue-600 py-3 px-6 rounded-full hover:bg-blue-600 hover:text-white transition duration-200 text-lg shadow-md hover:shadow-lg"
            >
              {t('freeMicroCourse')}
            </button>
            <button
              onClick={() => window.open('https://calendar.app.google/ifbPqgPXugjbXRUTA', '_blank')}
              className="font-semibold bg-white border border-blue-600 text-blue-600 py-3 px-6 rounded-full hover:bg-blue-600 hover:text-white transition duration-200 text-lg shadow-md hover:shadow-lg"
            >
              {t('mentoring')}
            </button>
            <button
              onClick={() => window.open('https://ander-sepulveda1.hotmart.host/formacion-trabaja-con-ia', '_blank')}
              className="font-semibold bg-white border border-blue-600 text-blue-600 py-3 px-6 rounded-full hover:bg-blue-600 hover:text-white transition duration-200 text-lg shadow-md hover:shadow-lg"
            >
              {t('trainingSupport')}
            </button>
            <button
              className="font-semibold bg-white border border-blue-600 text-blue-600 py-3 px-6 rounded-full hover:bg-blue-600 hover:text-white transition duration-200 text-lg shadow-md hover:shadow-lg"
            >
              {t('collaborations')}
            </button>
            <button
              onClick={() => router.push('/business')}
              className="font-semibold bg-white border border-blue-600 text-blue-600 py-3 px-6 rounded-full hover:bg-blue-600 hover:text-white transition duration-200 text-lg shadow-md hover:shadow-lg"
            >
              {t('automateYourBusiness')}
            </button>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default IndividualsPage; 