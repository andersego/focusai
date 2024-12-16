'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import Link from 'next/link'
import { Instagram, Linkedin, Star } from 'lucide-react'
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

  // Referencias para los videos
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const currentlyPlayingIndex = useRef<number | null>(null); // Para rastrear el índice del video que se está reproduciendo

  const setVideoRef = useCallback((el: HTMLVideoElement | null, index: number) => {
    videoRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let closestVideoIndex: number | null = null;
      let closestDistance = Infinity;

      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        const index = videoRefs.current.indexOf(video);

        if (entry.isIntersecting) {
          const rect = video.getBoundingClientRect();
          const videoCenter = rect.top + rect.height / 2;
          const windowCenter = window.innerHeight / 2;
          const distance = Math.abs(videoCenter - windowCenter);

          // Verificar si este video es el más cercano al centro
          if (distance < closestDistance) {
            closestDistance = distance;
            closestVideoIndex = index;
          }
        }
      });

      // Reproducir el video más cercano al centro
      if (closestVideoIndex !== null) {
        const currentlyPlayingVideo = videoRefs.current[currentlyPlayingIndex.current!];

        // Pausar el video que se está reproduciendo si no es el más cercano
        if (currentlyPlayingVideo && currentlyPlayingIndex.current !== closestVideoIndex) {
          currentlyPlayingVideo.pause(); // Pausar el video que se está reproduciendo
        }

        const closestVideo = videoRefs.current[closestVideoIndex];
        if (closestVideo) {
          // Solo reproducir si no hay otro video en reproducción
          if (currentlyPlayingIndex.current !== closestVideoIndex) {
            //closestVideo.play();
            //currentlyPlayingIndex.current = closestVideoIndex; // Actualizar el índice del video que se está reproduciendo
          }
        }
      }
    });

    // Observar cada video
    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      // Desconectar el observer al desmontar
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-700 to-white" style={{ backgroundColor: secondaryColor }}>
      <MainNav />
      <div className="flex flex-col items-center justify-center p-6 pt-20 mb-4">
        <img
          src="/mi-imagen.png"
          alt="Tu Nombre"
          className="w-32 h-32 rounded-full border-4 border-blue-600 mb-4"
        />
        
        <h2 className="text-xl font-bold text-center mt-0" style={{ color: primaryColor }}>
          Ander Focus IA ✨
        </h2>
        <h3 className="text-xl font-bold text-center mt-0" style={{ color: textColor }}>
        {t('automateBusinesses')}
        </h3>
        <div className="flex justify-center items-center space-x-4">
            <Link 
              href="https://www.linkedin.com/in/ander-sepulveda/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
            <span className="text-gray-300">|</span>

        <Link 
              href="https://www.instagram.com/ander.focus.ia/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </Link>
            </div>
        <div className="mt-2 w-full max-w-2xl bg-gray-100 rounded-lg shadow-lg p-6 pt-2">
          
          <div className="mt-4 flex flex-col space-y-4">
          <button
              onClick={() => window.open('https://www.amazon.es/dp/B0DQJK5NK9?ref_=pe_93986420_774957520', '_blank')}
              className="font-semibold bg-green-100 border border-blue-600 text-blue-600 py-3 px-6 rounded-full hover:bg-blue-600 hover:text-white transition duration-200 text-lg shadow-md hover:shadow-lg whitespace-pre-wrap"
            >
              {t('book')}
            </button>
            <button
              onClick={() => router.push('/auth/signin')}
              className="font-semibold bg-white border border-blue-600 text-blue-600 py-3 px-6 rounded-full hover:bg-blue-600 hover:text-white transition duration-200 text-lg shadow-md hover:shadow-lg whitespace-pre-wrap"
            >
              {t('freeApp')}
            </button>
            <button
              onClick={() => window.open('https://chat.whatsapp.com/IYalF4NMR4wDOmLoUMX4ZU', '_blank')}

              className="font-semibold bg-white border border-blue-600 text-blue-600 py-3 px-6 rounded-full hover:bg-blue-600 hover:text-white transition duration-200 text-lg shadow-md hover:shadow-lg"
            >
              {t('freeCommunity')}
            </button>
            <button
              onClick={() => window.open('https://ander-sepulveda1.hotmart.host/formacion-trabaja-con-ia', '_blank')}
              className="font-semibold bg-white border border-blue-600 text-blue-600 py-3 px-6 rounded-full hover:bg-blue-600 hover:text-white transition duration-200 text-lg shadow-md hover:shadow-lg"
            >
              {t('trainingSupport')}
            </button>
            <button
              onClick={() => window.open('https://app.hotmart.com/market/details?producerUcode=67664551-4caf-415d-802f-26d424868604&productUcode=82ca4411-c3a7-4891-aa38-dc442f4a54bf&bookmarked=false&searchId=5d35560d-9b2f-4374-910e-77de50e4afc7', '_blank')}
              className="font-semibold bg-white border border-blue-600 text-blue-600 py-3 px-6 rounded-full hover:bg-blue-600 hover:text-white transition duration-200 text-lg shadow-md hover:shadow-lg"
            >
              {t('affiliate')}
            </button>
            <button
              onClick={() => window.open('https://calendly.com/anderfocus/llamada-15-minutos', '_blank')}
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
        <div className="mt-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="flex justify-center mb-2">
              <Star className="h-6 w-6 text-yellow-500 fill-current" />
              <Star className="h-6 w-6 text-yellow-500 fill-current" />
              <Star className="h-6 w-6 text-yellow-500 fill-current" />
              <Star className="h-6 w-6 text-yellow-500 fill-current" />
              <Star className="h-6 w-6 text-yellow-500 fill-current" />
            </span>
            Testimonios
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-center overflow-x-auto p-2 md:p-8">
            <div
              className="min-w-[75px] transform transition-transform duration-200 hover:scale-105 hover:shadow-lg mb-8 md:mb-0 md:mr-4"
              onClick={() => {
                const video = videoRefs.current[0];
                if (video) {
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }
              }}
            >
              <video
                ref={(el) => setVideoRef(el, 0)}
                className="w-full h-full max-h-[550px] rounded-lg shadow-lg object-cover"
                controls
                src="/videos/video1.mp4"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
                onTouchStart={(e) => {
                  e.preventDefault(); // Evitar el comportamiento predeterminado
                  const video = e.currentTarget;
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }} // Alternar play/pause en dispositivos táctiles
              />
            </div>
            <div
              className="min-w-[75px] transform transition-transform duration-200 hover:scale-105 hover:shadow-lg mb-8 md:mb-0 md:mr-4"
              onClick={() => {
                const video = videoRefs.current[1];
                if (video) {
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }
              }}
            >
              <video
                ref={(el) => setVideoRef(el, 1)}
                className="w-full h-full max-h-[550px] rounded-lg shadow-lg object-cover"
                controls
                src="/videos/video2.mp4" // Reemplaza con la URL de tu video
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
                onTouchStart={(e) => {
                  e.preventDefault(); // Evitar el comportamiento predeterminado
                  const video = e.currentTarget;
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }} // Alternar play/pause en dispositivos táctiles
              />
            </div>
            <div
              className="min-w-[75px] transform transition-transform duration-200 hover:scale-105 hover:shadow-lg mb-8 md:mb-0 md:mr-4"
              onClick={() => {
                const video = videoRefs.current[2];
                if (video) {
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }
              }}
            >
              <video
                ref={(el) => setVideoRef(el, 2)}
                className="w-full h-full max-h-[550px] rounded-lg shadow-lg object-cover"
                controls
                src="/videos/video3.mp4" // Reemplaza con la URL de tu video
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
                onTouchStart={(e) => {
                  e.preventDefault(); // Evitar el comportamiento predeterminado
                  const video = e.currentTarget;
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }} // Alternar play/pause en dispositivos táctiles
              />
            </div>
            <div
              className="min-w-[75px] transform transition-transform duration-200 hover:scale-105 hover:shadow-lg mb-8 md:mb-0 md:mr-4"
              onClick={() => {
                const video = videoRefs.current[2];
                if (video) {
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }
              }}
            >
              <video
                ref={(el) => setVideoRef(el, 2)}
                className="w-full h-full max-h-[550px] rounded-lg shadow-lg object-cover"
                controls
                src="/videos/video4.mp4" // Reemplaza con la URL de tu video
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
                onTouchStart={(e) => {
                  e.preventDefault(); // Evitar el comportamiento predeterminado
                  const video = e.currentTarget;
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }} // Alternar play/pause en dispositivos táctiles
              />
            </div>
            {/* Agrega más videos según sea necesario */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndividualsPage; 