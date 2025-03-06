'use client'

import React from 'react'

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className='relative cursor-pointer overflow-hidden rounded-lg shadow-lg'
      onClick={onClick}
    >
      <img
        src={product.image}
        alt={product.title}
        className='h-48 w-full object-cover'
      />
      <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4'>
        <h3 className='truncate text-lg font-bold text-white'>
          {product.title}
        </h3>
        <p className='truncate text-sm text-white'>{product.description}</p>
      </div>
      <button className='absolute right-2 top-2 rounded-full bg-white p-1'>
        <i className='fas fa-info'></i>
      </button>
    </div>
  )
}

export default ProductCard
