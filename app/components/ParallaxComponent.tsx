'use client'

import { useState, useEffect, useRef } from 'react'
import { Parallax } from 'react-parallax'
import { Dancing_Script } from 'next/font/google'

const images = [
  {
    url: '/images/carousel-1.webp',
    title: 'Cafés Artesanales',
    subtittle: '100% Arabico',
    text: 'Disfruta de nuestros cafés cuidadosamente seleccionados y preparados con pasión. Desde un suave cappuccino hasta un intenso espresso, cada taza está hecha para ofrecerte una experiencia única. Perfectos para acompañar nuestras tostadas o postres, nuestros cafés son el complemento ideal para cualquier momento del día.'
  },
  {
    url: '/images/carousel-2.webp',
    title: 'Tostadas Gourmet',
    subtittle: 'El Sabor Perfecto en Cada Mordisco',
    text: 'Descubre nuestras irresistibles tostadas, preparadas con ingredientes frescos y combinaciones únicas. Cada una de nuestras tostadas es una explosión de sabor, perfecta para un desayuno saludable o una merienda deliciosa. ¡Ven y disfruta del crujido perfecto en cada bocado!'
  },
  {
    url: '/images/carousel-3.webp',
    title: 'Pie de Limón',
    subtittle: 'Un Toque de Frescura y Dulzura',
    text: 'Nuestro pie de limón es el balance perfecto entre lo dulce y lo ácido, con una base crujiente y un relleno suave y cremoso que hará que cada bocado sea una delicia. Preparado con ingredientes frescos, este postre es ideal para cualquier ocasión. ¡Prueba la frescura en cada porción!'
  }
]

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function ParallaxComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      setIsFading(true)
      setTimeout(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
        setIsFading(false)
      }, 500)
    }, 5000)
  }

  useEffect(() => {
    resetInterval()

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const goToImage = (index: number) => {
    setIsFading(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsFading(false)
    }, 500)
    resetInterval()
  }

  return (
    <div className='relative'>
      <div
        className={`transition-opacity duration-1000 ease-in-out ${isFading ? 'opacity-10' : 'opacity-100'}`}
      >
        <Parallax
          bgImage={images[currentIndex].url}
          strength={300}
          className='flex items-center justify-center bg-cover bg-center'
          style={{
            height: '100vh',
            width: '100%'
          }}
          bgImageStyle={{
            minHeight: '100%', // Esto asegura que las imágenes mantengan el mismo tamaño
            objectFit: 'cover', // Ajuste para que se adapten a la pantalla
            width: '100vw'
          }}
        >
          {/* Capa de desenfoque del tamaño de la imagen */}
          <div className='absolute inset-0 h-full w-full bg-black/30 backdrop-blur-sm'></div>

          {/* Contenedor para subtítulo y texto centrado */}
          <div className='z-1 relative mx-auto flex h-screen w-3/4 flex-col items-center justify-center text-white'>
            <h1
              className={`${dancing.className} text-center text-6xl font-medium md:text-8xl`}
            >
              {images[currentIndex].title}
            </h1>
            <p className='pt-8 text-center text-xl font-light md:text-4xl'>
              {images[currentIndex].subtittle}
            </p>
            <p className='w-11/12 pt-8 text-center font-extralight md:w-1/2'>
              {images[currentIndex].text}
            </p>
          </div>
        </Parallax>
      </div>

      {/* Puntos de navegación */}
      <div className='absolute bottom-4 left-0 right-0 flex justify-center space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray'}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  )
}
