'use client'

import React, { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Product } from '../types/product'
import AllergenIcons from './AllergenIcons'

interface ProductModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
  totalProducts: number
  currentIndex: number
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  totalProducts,
  currentIndex
}) => {
  useEffect(() => {
    // Disable body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }

    // Re-enable scrolling when modal closes
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    // Add keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrevious()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onNext, onPrevious])

  // Replace example.com images with placeholder images
  const imageUrl = product.image.includes('example.com')
    ? `https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800`
    : product.image

  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-6'
      onClick={onClose}
    >
      <div
        className='relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-xl'
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute right-4 top-4 z-10 rounded-full bg-white/80 p-1.5 transition-colors duration-200 hover:bg-white'
          aria-label='Close modal'
        >
          <X size={20} />
        </button>

        <div className='flex h-full flex-col md:flex-row'>
          {/* Image section */}
          <div className='relative h-64 w-full md:h-auto md:w-1/2'>
            <Image
              src={imageUrl}
              alt={product.title}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>

          {/* Content section */}
          <div className='w-full overflow-y-auto p-6 md:w-1/2'>
            <div className='space-y-4'>
              <h2 className='text-gray-800 text-2xl font-bold'>
                {product.title}
              </h2>
              <p className='text-gray-600'>{product.description}</p>

              <div className='flex items-center justify-between'>
                <span className='text-gray-900 text-xl font-semibold'>
                  ${product.price.toFixed(2)}
                </span>
                <span className='bg-primary/10 text-primary rounded-full px-3 py-1 text-sm'>
                  {product.category}
                </span>
              </div>

              <div className='border-gray-200 border-t pt-4'>
                <h3 className='text-gray-800 mb-3 font-medium'>
                  Allergen Information
                </h3>
                <AllergenIcons allergens={product.allergens} />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className='absolute left-4 top-1/2 -translate-y-1/2 transform'>
          <button
            onClick={e => {
              e.stopPropagation()
              onPrevious()
            }}
            className='rounded-full bg-white/80 p-2 shadow-md transition-colors duration-200 hover:bg-white'
            aria-label='Previous product'
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        <div className='absolute right-4 top-1/2 -translate-y-1/2 transform'>
          <button
            onClick={e => {
              e.stopPropagation()
              onNext()
            }}
            className='rounded-full bg-white/80 p-2 shadow-md transition-colors duration-200 hover:bg-white'
            aria-label='Next product'
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination indicator */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded-full bg-white/80 px-3 py-1 text-sm'>
          {currentIndex + 1} / {totalProducts}
        </div>
      </div>
    </div>
  )
}

export default ProductModal
