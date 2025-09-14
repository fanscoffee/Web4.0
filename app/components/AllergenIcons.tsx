'use client'

import React from 'react'
import { AlertTriangle } from 'lucide-react'

interface AllergenIconsProps {
  allergens: {
    gluten?: boolean
    lactose?: boolean
    egg?: boolean
    nuts?: boolean
    [key: string]: boolean | undefined
  }
}

const AllergenIcons: React.FC<AllergenIconsProps> = ({ allergens }) => {
  const allergensList = Object.entries(allergens)
    .filter(([_, value]) => value === true)
    .map(([key]) => key)

  if (allergensList.length === 0) {
    return (
      <div className='bg-green-50 flex items-center space-x-2 rounded-md p-3'>
        <span className='text-green-700 text-sm font-medium'>No allergens</span>
      </div>
    )
  }

  return (
    <div className='rounded-md bg-amber-50 p-3'>
      <div className='mb-2 flex items-center space-x-2'>
        <AlertTriangle size={16} className='text-amber-600' />
        <span className='text-sm font-medium text-amber-800'>
          Contains allergens:
        </span>
      </div>
      <div className='grid grid-cols-2 gap-2'>
        {allergensList.map(allergen => (
          <div key={allergen} className='flex items-center space-x-2'>
            <div className='h-3 w-3 rounded-full bg-amber-500' />
            <span className='text-gray-700 text-sm capitalize'>{allergen}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllergenIcons
