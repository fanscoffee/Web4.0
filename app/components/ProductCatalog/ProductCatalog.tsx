'use client'

import { useState, useEffect, useCallback } from 'react'
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
            key={index}
            product={product}
            onInfoClick={() => openModal(index)}
          />
        ))}
      </div>

      {isModalOpen && selectedIndex !== null && (
        <ProductModal
          product={products[selectedIndex]}
          isOpen={isModalOpen}
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
        <h3 className='mb-1 truncate text-xl font-bold text-white'>
          {product.title}
        </h3>
        <p className='line-clamp-2 text-sm text-white/90'>
          {product.description}
        </p>
      </div>
    </div>
  )
}

interface ProductModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
  currentIndex: number
  totalProducts: number
}

function ProductModal({
  product,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  currentIndex,
  totalProducts
}: ProductModalProps) {
  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm'
      onClick={onClose}
    >
      <div
        className='relative mx-2 w-full max-w-sm overflow-hidden rounded-2xl bg-beige shadow-2xl sm:mx-4 sm:max-w-lg md:max-w-2xl lg:flex'
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className='absolute right-2 top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brown shadow-md transition-colors hover:bg-white sm:right-4 sm:top-4 sm:h-10 sm:w-10'
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

        <div className='max-h-[85vh] overflow-y-auto lg:flex lg:max-h-[500px]'>
          <div className='w-full lg:w-1/2'>
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={300}
              className='h-36 w-full object-cover sm:h-48 sm:object-center lg:h-full'
            />
          </div>

          <div className='flex w-full flex-col p-3 sm:p-6 lg:w-1/2 lg:p-8'>
            <span className='mb-2 inline-block w-fit rounded-full bg-green/20 px-2 py-0.5 text-[10px] font-semibold text-dark-green sm:mb-3 sm:px-3 sm:py-1 sm:text-xs'>
              {product.category}
            </span>
            <h2 className='mb-1 text-lg font-bold text-dark-green sm:mb-3 sm:text-2xl lg:text-3xl'>
              {product.title}
            </h2>
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

            <div className='mt-3 flex items-center justify-between gap-2 sm:mt-6'>
              <span className='text-[10px] text-brown/50 sm:text-sm'>
                {currentIndex + 1} / {totalProducts}
              </span>
              <div className='flex items-center gap-2 lg:hidden'>
                <button
                  onClick={e => {
                    e.stopPropagation()
                    onPrevious()
                  }}
                  className='flex items-center gap-1 rounded-lg bg-green/10 px-3 py-1.5 text-xs font-medium text-dark-green transition-colors hover:bg-green/20 sm:px-4 sm:py-2 sm:text-sm'
                >
                  <svg
                    className='h-3 w-3 sm:h-4 sm:w-4'
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
                  className='flex items-center gap-1 rounded-lg bg-green/10 px-3 py-1.5 text-xs font-medium text-dark-green transition-colors hover:bg-green/20 sm:px-4 sm:py-2 sm:text-sm'
                >
                  <svg
                    className='h-3 w-3 sm:h-4 sm:w-4'
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
