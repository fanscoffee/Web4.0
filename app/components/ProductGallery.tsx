'use client'

import React, { useState } from 'react'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

const ProductGallery = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          onClick={() => setSelectedProduct(product)}
        />
      ))}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  )
}

export default ProductGallery
