'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

const slides = [
  {
    src: '/images/ilustracion-blanca.webp',
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
      window.setTimeout(() => {
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
    <section
      aria-label='Galería de productos'
      className='relative h-[calc(100svh-4.75rem)] min-h-[38rem] overflow-hidden bg-brand-burgundy md:h-[calc(100svh-5.75rem)]'
    >
      {slides.map((slide, index) => {
        const isActive = index === currentIndex
        const isPrev = isTransitioning && index === prevIndex

        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity ease-in-out ${
              isActive || isPrev ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDuration: `${FADE_DURATION}ms`,
              opacity: isPrev ? 0 : undefined
            }}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.src}
              alt={isActive ? slide.title : ''}
              fill
              priority={index === 0}
              sizes='100vw'
              className='object-cover'
            />
          </div>
        )
      })}

      <div className='absolute inset-0 bg-brand-burgundy/55' />
      <div className='absolute inset-0 bg-gradient-to-r from-brand-burgundy/80 via-brand-burgundy/35 to-transparent' />

      <div className='brand-container relative z-10 flex h-full items-end pb-24 md:items-center md:pb-0'>
        <div className='max-w-2xl border-l-4 border-brand-pink pl-5 sm:pl-8'>
          <p className='brand-eyebrow text-brand-pink'>Fans Coffee Bakery</p>
          <h1
            key={currentIndex}
            className='animate-fade-in mt-4 text-6xl leading-[0.88] text-brand-pink sm:text-7xl md:text-8xl'
          >
            {slides[currentIndex].title}
          </h1>
          <p
            key={`sub-${currentIndex}`}
            className='brand-script animate-fade-in mt-4 text-3xl text-brand-cream sm:text-4xl md:text-5xl'
          >
            {slides[currentIndex].subtitle}
          </p>
          <p
            key={`txt-${currentIndex}`}
            className='animate-fade-in mt-4 max-w-lg text-sm leading-6 text-brand-cream/85 md:text-base'
          >
            {slides[currentIndex].text}
          </p>
        </div>
      </div>

      <nav
        className='absolute bottom-7 left-0 right-0 z-10 flex justify-center gap-3'
        aria-label='Navegación del carousel'
      >
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type='button'
            onClick={() => goToSlide(index)}
            className={`h-3 w-10 rounded-full border border-brand-cream/70 transition-all ${
              index === currentIndex
                ? 'bg-brand-pink'
                : 'bg-brand-cream/20 hover:bg-brand-cream/60'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : undefined}
          />
        ))}
      </nav>
    </section>
  )
}
