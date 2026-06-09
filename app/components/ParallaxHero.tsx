'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'

const dancing = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] })

const slides = [
  {
    src: '/images/carousel-1.webp',
    title: 'Cafés Artesanales',
    subtitle: '100% Arábico',
    text: 'Café cuidadosamente seleccionado y preparado con pasión. Cada taza ofrece una experiencia única.'
  },
  {
    src: '/images/carousel-2.webp',
    title: 'Tostadas Gourmet',
    subtitle: 'El sabor perfecto en cada mordisco',
    text: 'Ingredientes frescos y combinaciones únicas para un desayuno o merienda inolvidable.'
  },
  {
    src: '/images/carousel-3.webp',
    title: 'Pie de Limón',
    subtitle: 'Frescura y dulzura',
    text: 'Base crujiente con relleno suave y cremoso. El postre ideal para cualquier ocasión.'
  }
]

const AUTOPLAY_INTERVAL = 5000
const FADE_DURATION = 1000

export default function ParallaxHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentIndex) return
      setPrevIndex(currentIndex)
      setCurrentIndex(index)
      setIsTransitioning(true)
      setTimeout(() => {
        setPrevIndex(index)
        setIsTransitioning(false)
      }, FADE_DURATION)
    },
    [currentIndex]
  )

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % slides.length)
  }, [currentIndex, goToSlide])

  const startAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(nextSlide, AUTOPLAY_INTERVAL)
  }, [nextSlide])

  useEffect(() => {
    startAutoplay()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [startAutoplay])

  return (
    <section aria-label='Galería de productos' className='relative h-screen'>
      {/* Slides with crossfade */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex
        const isPrev = isTransitioning && index === prevIndex

        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity ease-in-out ${
              isActive && !isTransitioning
                ? 'opacity-100'
                : isActive
                  ? 'opacity-100'
                  : isPrev
                    ? 'opacity-0'
                    : 'opacity-0'
            }`}
            style={{ transitionDuration: `${FADE_DURATION}ms` }}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes='100vw'
              className='object-cover'
            />
          </div>
        )
      })}

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/40' />

      {/* Content */}
      <div className='relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white'>
        <h1
          key={currentIndex}
          className={`${dancing.className} animate-fade-in text-5xl font-medium md:text-7xl`}
        >
          {slides[currentIndex].title}
        </h1>
        <p
          key={`sub-${currentIndex}`}
          className='animate-fade-in mt-4 text-xl font-light md:text-3xl'
        >
          {slides[currentIndex].subtitle}
        </p>
        <p
          key={`txt-${currentIndex}`}
          className='animate-fade-in mt-4 max-w-lg text-sm font-light md:text-base'
        >
          {slides[currentIndex].text}
        </p>
      </div>

      {/* Navigation dots */}
      <nav
        className='absolute bottom-6 left-0 right-0 flex justify-center gap-3'
        aria-label='Navegación del carousel'
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentIndex
                ? 'scale-125 bg-white'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : undefined}
          />
        ))}
      </nav>
    </section>
  )
}
