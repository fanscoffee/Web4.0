'use client'

import { useState, useEffect, useRef } from 'react'
import { Parallax } from 'react-parallax'

const images = [
  {
    url: 'https://images.pexels.com/photos/5662082/pexels-photo-5662082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    subtittle: 'The Special Taste',
    text: 'Lorem ipsu pin que pun que pam plam plam plam'
  },
  {
    url: 'https://images.pexels.com/photos/8017965/pexels-photo-8017965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    subtittle: 'Caraota con repollo',
    text: 'Nihil sint commodi, accusamus vitae unde molestias in laboriosam voluptate aperiam atque. Molestiae cumque est excepturi sunt maxime, quod tempora harum incidunt!'
  },
  {
    url: 'https://images.pexels.com/photos/10204269/pexels-photo-10204269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    subtittle: 'Quinchoncho con toddy',
    text: 'Molestias at voluptate molestiae alias commodi aliquid sint excepturi consequuntur, vitae in, illo labore rem accusamus eligendi officia.'
  }
]

export default function Home() {
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

    // Limpiar el intervalo cuando el componente se desmonte
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
    resetInterval() // Reiniciar el intervalo al hacer clic
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
            height: 'calc(100vh - 120px)',
            width: '100%'
          }}
        >
          <div className='items-center justify-center space-y-10 text-white'>
            <p className='flex justify-center text-lg font-extralight'>
              Breaking Bread
            </p>
            <h1 className='mx-auto flex justify-center text-center text-6xl font-medium'>
              {images[currentIndex].subtittle}
            </h1>
            <p className='mx-auto flex w-1/2 justify-center text-center font-extralight'>
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
