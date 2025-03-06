'use client'

import React from 'react'

const ProductModal = ({ product, onClose }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative rounded-lg bg-white p-4'>
        <button className='absolute right-2 top-2' onClick={onClose}>
          <i className='fas fa-times'></i>
        </button>
        <img
          src={product.image}
          alt={product.title}
          className='h-64 w-full rounded-lg object-cover'
        />
        <h2 className='mt-4 text-2xl font-bold'>{product.title}</h2>
        <p className='mt-2'>{product.description}</p>
        <div className='mt-4'>
          <h3 className='font-bold'>Allergens:</h3>
          <ul>
            {Object.keys(product.allergens).map(allergen => (
              <li key={allergen}>
                {allergen}: {product.allergens[allergen] ? 'Yes' : 'No'}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
