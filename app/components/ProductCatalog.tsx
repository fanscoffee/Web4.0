'use client'

import React, { useState } from 'react'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import { Product } from '../types/product'

interface ProductCatalogProps {
  products: Product[]
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ products }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState<
    number | null
  >(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (index: number) => {
    setSelectedProductIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const goToNextProduct = () => {
    if (selectedProductIndex !== null) {
      setSelectedProductIndex((selectedProductIndex + 1) % products.length)
    }
  }

  const goToPreviousProduct = () => {
    if (selectedProductIndex !== null) {
      setSelectedProductIndex(
        (selectedProductIndex - 1 + products.length) % products.length
      )
    }
  }

  return (
    <div className='mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product, index) => (
          <ProductCard
            key={`${product.title}-${index}`}
            product={product}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {isModalOpen && selectedProductIndex !== null && (
        <ProductModal
          product={products[selectedProductIndex]}
          isOpen={isModalOpen}
          onClose={closeModal}
          onNext={goToNextProduct}
          onPrevious={goToPreviousProduct}
          totalProducts={products.length}
          currentIndex={selectedProductIndex}
        />
      )}
    </div>
  )
}

export default ProductCatalog
