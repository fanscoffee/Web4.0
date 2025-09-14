'use client'

import React from 'react'
import { Info } from 'lucide-react'
import { Product } from '../types/product'
import Image from 'next/image'

interface ProductCardProps {
  product: Product
  onClick: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  // Replace example.com images with placeholder images
  const imageUrl = product.image.includes('example.com')
    ? `https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800`
    : product.image

  return (
    <div className='group relative h-80 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg'>
      <div className='absolute inset-0'>
        <Image
          src={imageUrl}
          alt={product.title}
          fill
          className='object-cover'
          sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
        />
      </div>

      {/* Info Button */}
      <button
        onClick={onClick}
        className='absolute right-3 top-3 z-10 transform rounded-full bg-white/80 p-2 shadow-md transition-all duration-200 hover:scale-105 hover:bg-white'
        aria-label={`View ${product.title} details`}
      >
        <Info size={18} className='text-primary' />
      </button>

      {/* Content Overlay */}
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/40 p-4 transition-all duration-300 group-hover:from-black/90'>
        <h3 className='mb-1 truncate text-lg font-bold text-white'>
          {product.title}
        </h3>
        <p className='text-gray-200 line-clamp-2 h-10 text-sm'>
          {product.description}
        </p>
        <div className='mt-2 flex items-center justify-between'>
          <span className='font-medium text-white'>
            ${product.price.toFixed(2)}
          </span>
          <span className='text-gray-300 text-sm'>{product.category}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
