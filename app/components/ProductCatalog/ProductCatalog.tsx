'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ProductImageGallery } from './ProductImageGallery'
import { ProductRating } from './ProductRating'
import { ALLERGEN_ICONS, ALLERGEN_LABELS } from './types'
import type { Product } from './types'

interface ProductCatalogProps {
  products: Product[]
  representativeImage?: string
  representativeAlt?: string
}

export default function ProductCatalog({
  products,
  representativeImage,
  representativeAlt = 'Bebidas de la categoría'
}: ProductCatalogProps) {
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
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return
      if (event.key === 'Escape') closeModal()
      if (event.key === 'ArrowLeft') goToPrevious()
      if (event.key === 'ArrowRight') goToNext()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, goToPrevious, goToNext])

  useEffect(() => {
    if (!isModalOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isModalOpen])

  const renderProducts = (showImage: boolean) =>
    products.map((product, index) => (
      <ProductCard
        key={`${product.title}-${index}`}
        product={product}
        onInfoClick={() => openModal(index)}
        showImage={showImage}
      />
    ))

  return (
    <>
      {representativeImage ? (
        <div className='brand-container grid gap-8 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.7fr)]'>
          <div className='lg:sticky lg:top-28 lg:self-start'>
            <div className='relative aspect-[2/3] overflow-hidden rounded-brand-lg border-2 border-brand-burgundy/15 bg-brand-cream shadow-brand'>
              <Image
                src={representativeImage}
                alt={representativeAlt}
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 35vw'
              />
            </div>
            <p className='mt-4 max-w-sm text-sm leading-6 text-brand-cream/75'>
              Una imagen, muchas combinaciones. Abre cada tarjeta para consultar
              ingredientes, precio y alérgenos.
            </p>
          </div>
          <div className='grid gap-4 sm:grid-cols-2'>
            {renderProducts(false)}
          </div>
        </div>
      ) : (
        <div className='brand-container grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {renderProducts(true)}
        </div>
      )}

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
  showImage?: boolean
}

function ProductCard({
  product,
  onInfoClick,
  showImage = true
}: ProductCardProps) {
  return (
    <article className='group relative overflow-hidden rounded-brand-lg border-2 border-brand-burgundy/15 bg-brand-burgundy shadow-brand-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-brand'>
      {showImage && (
        <ProductImageGallery
          images={product.images ?? [product.image]}
          alt={product.title}
          onImageClick={onInfoClick}
        />
      )}
      <button
        type='button'
        onClick={onInfoClick}
        className='block w-full text-left'
        aria-label={`Ver información de ${product.title}`}
      >
        <div className='p-5 sm:p-6'>
          <div className='flex items-start justify-between gap-4'>
            <div>
              <span className='brand-eyebrow text-brand-pink'>
                {product.category}
              </span>
              <h3 className='mt-2 text-2xl leading-none text-brand-pink'>
                {product.title}
              </h3>
              {product.rating !== undefined && (
                <div className='mt-3'>
                  <ProductRating rating={product.rating} />
                </div>
              )}
            </div>
            <span className='shrink-0 rounded-full bg-brand-cream px-3 py-1.5 text-sm font-bold text-brand-burgundy'>
              {product.price.toFixed(2)}€
            </span>
          </div>
          <p className='text-brand-cream/78 mt-4 line-clamp-2 text-sm leading-6'>
            {product.description}
          </p>
          {product.portions !== undefined && (
            <p className='mt-3 text-xs font-bold uppercase tracking-[0.1em] text-brand-cream/60'>
              {product.portions} porciones
            </p>
          )}
          <span className='mt-5 inline-block text-xs font-bold uppercase tracking-[0.12em] text-brand-cream underline decoration-brand-pink decoration-2 underline-offset-4'>
            Ver detalles →
          </span>
        </div>
      </button>
      {showImage && (
        <button
          type='button'
          onClick={event => {
            event.stopPropagation()
            onInfoClick()
          }}
          className='absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-burgundy bg-brand-cream text-lg font-bold text-brand-burgundy transition-transform hover:scale-105 hover:bg-brand-pink'
          aria-label='Ver información del producto'
        >
          i
        </button>
      )}
    </article>
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
    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      const modal = modalRef.current
      if (!modal) return
      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!first || !last) return
      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault()
          last.focus()
        }
      } else if (document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleTabKey)
    return () => document.removeEventListener('keydown', handleTabKey)
  }, [])

  return (
    <div
      className='fixed inset-0 z-[1100] flex items-center justify-center overflow-hidden bg-brand-burgundy/85 px-3 py-4 backdrop-blur-sm sm:px-6'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-labelledby='product-modal-title'
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className='relative mx-auto flex h-[min(680px,calc(100dvh-2rem))] w-full max-w-5xl flex-col overflow-hidden rounded-brand-lg border-2 border-brand-pink bg-brand-cream shadow-brand sm:h-auto lg:flex-row'
        onClick={event => event.stopPropagation()}
      >
        <button
          type='button'
          onClick={onClose}
          className='absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-burgundy bg-brand-cream text-xl text-brand-burgundy transition-colors hover:bg-brand-pink sm:right-5 sm:top-5'
          aria-label='Cerrar modal'
        >
          ×
        </button>

        <div className='relative min-h-[15rem] shrink-0 bg-brand-burgundy sm:min-h-[20rem] lg:min-h-0 lg:w-[48%]'>
          <Image
            src={product.image}
            alt={product.title}
            fill
            className='object-cover'
            sizes='(max-width: 1024px) 100vw, 480px'
          />
          <button
            type='button'
            onClick={event => {
              event.stopPropagation()
              onPrevious()
            }}
            className='absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-burgundy bg-brand-cream text-xl text-brand-burgundy transition-colors hover:bg-brand-pink lg:left-5'
            aria-label='Producto anterior'
          >
            ‹
          </button>
          <button
            type='button'
            onClick={event => {
              event.stopPropagation()
              onNext()
            }}
            className='absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-burgundy bg-brand-cream text-xl text-brand-burgundy transition-colors hover:bg-brand-pink lg:right-5'
            aria-label='Siguiente producto'
          >
            ›
          </button>
        </div>

        <div className='min-h-0 flex-1 overflow-y-auto bg-brand-cream p-5 text-brand-burgundy sm:p-8 lg:p-10'>
          <span className='brand-eyebrow text-brand-olive'>
            {product.category}
          </span>
          <h2
            id='product-modal-title'
            className='mt-3 text-4xl leading-none text-brand-burgundy sm:text-5xl'
          >
            {product.title}
          </h2>
          {product.rating !== undefined && (
            <div className='mt-4'>
              <ProductRating rating={product.rating} />
            </div>
          )}
          <div className='mt-5 flex flex-wrap items-center gap-3'>
            <span className='rounded-full bg-brand-burgundy px-4 py-2 text-sm font-bold text-brand-cream'>
              {product.price.toFixed(2)}€
            </span>
            {product.portions !== undefined && (
              <span className='rounded-full bg-brand-pink px-4 py-2 text-sm font-bold text-brand-burgundy'>
                {product.portions} porciones
              </span>
            )}
          </div>
          <p className='text-brand-burgundy/78 mt-6 text-base leading-7'>
            {product.description}
          </p>

          <div className='mt-8 border-t-2 border-brand-burgundy/15 pt-6'>
            <h4 className='text-2xl text-brand-olive'>Alérgenos</h4>
            <div className='mt-4 flex flex-wrap gap-2'>
              {(
                Object.keys(product.allergens) as Array<
                  keyof typeof product.allergens
                >
              ).map(allergen => {
                const isPresent = product.allergens[allergen]
                return (
                  <div
                    key={allergen}
                    className={`inline-flex items-center gap-2 rounded-[0.65rem] px-3 py-2 text-xs font-bold ${
                      isPresent
                        ? 'bg-brand-pink text-brand-burgundy'
                        : 'bg-brand-paper text-brand-muted'
                    }`}
                  >
                    <span className='flex h-4 w-4 items-center justify-center'>
                      {ALLERGEN_ICONS[allergen]}
                    </span>
                    <span>{ALLERGEN_LABELS[allergen]}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className='mt-8 flex items-center justify-between border-t border-brand-burgundy/15 pt-5 text-sm text-brand-muted'>
            <span>
              {currentIndex + 1} / {totalProducts}
            </span>
            <span className='brand-script text-xl text-brand-olive'>
              Fans handmade
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
