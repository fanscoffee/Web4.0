'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ProductImageGalleryProps {
  images: string[]
  alt: string
  sizes?: string
  onImageClick?: () => void
}

export function ProductImageGallery({
  images,
  alt,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  onImageClick
}: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const hasMultipleImages = images.length > 1
  const activeImage = images[activeIndex]

  const goToImage = (index: number) => {
    setActiveIndex((index + images.length) % images.length)
  }

  return (
    <div className='relative aspect-[4/3] overflow-hidden bg-brand-cream'>
      <Image
        src={activeImage}
        alt={`${alt} - imagen ${activeIndex + 1}`}
        fill
        className='object-cover transition-opacity duration-300'
        sizes={sizes}
      />

      {onImageClick && (
        <button
          type='button'
          onClick={onImageClick}
          className='absolute inset-0 z-10 cursor-zoom-in'
          aria-label={`Ver información de ${alt}`}
        />
      )}

      {hasMultipleImages && (
        <>
          <button
            type='button'
            onClick={event => {
              event.stopPropagation()
              goToImage(activeIndex - 1)
            }}
            className='absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-burgundy bg-brand-cream/95 text-xl text-brand-burgundy shadow-brand-soft transition-transform hover:scale-105'
            aria-label={`Imagen anterior de ${alt}`}
          >
            <span aria-hidden='true'>‹</span>
          </button>
          <button
            type='button'
            onClick={event => {
              event.stopPropagation()
              goToImage(activeIndex + 1)
            }}
            className='absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-burgundy bg-brand-cream/95 text-xl text-brand-burgundy shadow-brand-soft transition-transform hover:scale-105'
            aria-label={`Siguiente imagen de ${alt}`}
          >
            <span aria-hidden='true'>›</span>
          </button>
          <div className='absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 rounded-full bg-brand-burgundy/75 px-2 py-1.5'>
            {images.map((image, index) => (
              <button
                key={image}
                type='button'
                onClick={event => {
                  event.stopPropagation()
                  goToImage(index)
                }}
                className={`h-2 w-2 rounded-full transition-transform ${
                  index === activeIndex
                    ? 'scale-125 bg-brand-pink'
                    : 'bg-brand-cream/75 hover:bg-brand-cream'
                }`}
                aria-label={`Ver imagen ${index + 1} de ${images.length} de ${alt}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>
          <span className='sr-only' aria-live='polite'>
            Imagen {activeIndex + 1} de {images.length}
          </span>
        </>
      )}
    </div>
  )
}
