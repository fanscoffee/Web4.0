'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { Product, ALLERGEN_LABELS, ALLERGEN_ICONS } from './types'

interface ProductCatalogProps {
  products: Product[]
}

export default function ProductCatalog({ products }: ProductCatalogProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (index: number) => {
    setSelectedIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedIndex(null)
  }

  const goToPrevious = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex(
      selectedIndex === 0 ? products.length - 1 : selectedIndex - 1
    )
  }, [selectedIndex, products.length])

  const goToNext = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex(
      selectedIndex === products.length - 1 ? 0 : selectedIndex + 1
    )
  }, [selectedIndex, products.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, goToPrevious, goToNext])

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  return (
    <>
      <div className='mx-4 my-12 grid max-w-[1920px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:mx-8 lg:mx-16 lg:grid-cols-3 lg:gap-10 xl:mx-24'>
        {products.map((product, index) => (
          <ProductCard
            key={`${product.title}-${index}`}
            product={product}
            onInfoClick={() => openModal(index)}
          />
        ))}
      </div>

      {isModalOpen && selectedIndex !== null && (
        <ProductModal
          product={products[selectedIndex]}
          onClose={closeModal}
          onPrevious={goToPrevious}
          onNext={goToNext}
          currentIndex={selectedIndex}
          totalProducts={products.length}
        />
      )}
    </>
  )
}

interface ProductCardProps {
  product: Product
  onInfoClick: () => void
}

function ProductCard({ product, onInfoClick }: ProductCardProps) {
  return (
    <div
      onClick={onInfoClick}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onInfoClick() }}
      role='button'
      tabIndex={0}
      className='group relative h-[320px] cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl'
    >
      <Image
        src={product.image}
        alt={product.title}
        fill
        className='object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110'
        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
      <button
        onClick={e => {
          e.stopPropagation()
          onInfoClick()
        }}
        className='absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-brown backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white'
        aria-label='Ver información del producto'
      >
        <span className='text-lg font-bold'>i</span>
      </button>
       <div className='absolute bottom-0 left-0 right-0 bg-black/50 p-4 backdrop-blur-md'>
         <div className='flex items-center justify-between'>
           <h3 className='mb-1 truncate text-xl font-bold text-white'>
             {product.title}
           </h3>
           <span className='rounded-full bg-green/90 px-2 py-0.5 text-sm font-bold text-white'>
             {product.price.toFixed(2)}€
           </span>
         </div>
         <p className='line-clamp-2 text-sm text-white/90'>
           {product.description}
         </p>
         {product.portions !== undefined && (
           <p className='mt-1 text-sm font-semibold text-white'>
             {product.portions} porciones
           </p>
         )}
       </div>
    </div>
  )
}

interface ProductModalProps {
  product: Product
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
  currentIndex: number
  totalProducts: number
}

function ProductModal({
  product,
  onClose,
  onPrevious,
  onNext,
  currentIndex,
  totalProducts
}: ProductModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    modalRef.current?.focus()
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const modal = modalRef.current
      if (!modal) return
      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleTabKey)
    return () => document.removeEventListener('keydown', handleTabKey)
  }, [])

  return (
    <div
      className='fixed inset-0 z-[1100] flex items-center justify-center overflow-hidden bg-black/70 px-2 py-4 pt-[5.5rem] backdrop-blur-sm sm:px-4 sm:py-4 sm:pt-4 lg:z-50'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-label={`Detalles de ${product.title}`}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className='relative mx-2 flex h-[min(560px,calc(100dvh-6.25rem))] max-h-[calc(100dvh-6.25rem)] w-full max-w-sm flex-col overflow-hidden rounded-2xl bg-beige shadow-2xl sm:mx-4 sm:h-auto sm:max-h-[85vh] sm:max-w-md md:max-w-2xl lg:h-[min(480px,85vh)] lg:w-[min(900px,94vw)] lg:max-w-none lg:flex-row'
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className='absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brown shadow-md transition-colors hover:bg-white sm:right-4 sm:top-4'
          aria-label='Cerrar modal'
        >
          <svg
            className='h-4 w-4 sm:h-5 sm:w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>

        <button
          onClick={e => {
            e.stopPropagation()
            onPrevious()
          }}
          className='absolute left-1 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brown shadow-md transition-colors hover:bg-white lg:left-4 lg:flex lg:h-12 lg:w-12'
          aria-label='Producto anterior'
        >
          <svg
            className='h-5 w-5 lg:h-6 lg:w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>

        <button
          onClick={e => {
            e.stopPropagation()
            onNext()
          }}
          className='absolute right-1 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brown shadow-md transition-colors hover:bg-white lg:right-4 lg:flex lg:h-12 lg:w-12'
          aria-label='Siguiente producto'
        >
          <svg
            className='h-5 w-5 lg:h-6 lg:w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>

        <div className='relative aspect-square h-[clamp(190px,31dvh,230px)] w-full shrink-0 overflow-hidden bg-beige lg:h-full lg:w-auto'>
          <Image
            src={product.image}
            alt={product.title}
            fill
            className='object-cover'
            sizes='(max-width: 1024px) 100vw, 480px'
          />
          <button
            onClick={e => {
              e.stopPropagation()
              onPrevious()
            }}
            className='absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brown shadow-md transition-colors hover:bg-white lg:hidden'
            aria-label='Producto anterior'
          >
            <svg
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
          <button
            onClick={e => {
              e.stopPropagation()
              onNext()
            }}
            className='absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brown shadow-md transition-colors hover:bg-white lg:hidden'
            aria-label='Siguiente producto'
          >
            <svg
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>

        <div className='flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden p-3 sm:p-6 lg:overflow-y-auto lg:p-8'>
            <span className='mb-2 inline-block w-fit rounded-full bg-green/20 px-2 py-0.5 text-[10px] font-semibold text-dark-green sm:mb-3 sm:px-3 sm:py-1 sm:text-xs'>
              {product.category}
            </span>
             <h2 className='mb-1 text-lg font-bold text-dark-green sm:mb-3 sm:text-2xl lg:text-3xl'>
               {product.title}
             </h2>
             <span className='mb-1 inline-block rounded-full bg-green/90 px-2 py-0.5 text-sm font-bold text-white sm:mb-3'>
               {product.price.toFixed(2)}€
             </span>
             {product.portions !== undefined && (
               <span className='mb-1 inline-block rounded-full bg-green/20 px-2 py-0.5 text-sm font-semibold text-dark-green sm:mb-3'>
                 {product.portions} porciones
               </span>
             )}
             <p className='mb-2 text-xs leading-relaxed text-brown/80 sm:mb-4 sm:text-sm'>
              {product.description}
            </p>
            <div className='border-t border-brown/20 pt-2 sm:pt-4'>
              <h4 className='mb-2 text-xs font-semibold text-dark-green sm:mb-3'>
                Alérgenos
              </h4>
              <div className='flex flex-wrap gap-1 sm:gap-3'>
                {(
                  Object.keys(product.allergens) as Array<
                    keyof typeof product.allergens
                  >
                ).map(allergen => {
                  const isPresent = product.allergens[allergen]
                  return (
                    <div
                      key={allergen}
                      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] sm:px-3 sm:py-2 sm:text-sm ${
                        isPresent
                          ? 'bg-red-100 text-red-700'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      <span className='flex h-3 w-3 shrink-0 items-center justify-center sm:h-4 sm:w-4'>
                        {ALLERGEN_ICONS[allergen]}
                      </span>
                      <span className='font-medium leading-none sm:font-semibold'>
                        {ALLERGEN_LABELS[allergen]}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='mt-auto flex items-center justify-between gap-2 pt-3 sm:mt-6 sm:pt-0'>
              <span className='text-[10px] text-brown/50 sm:text-sm'>
                {currentIndex + 1} / {totalProducts}
              </span>
            </div>
          </div>
      </div>
    </div>
  )
}
