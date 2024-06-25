'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className='bg-beige mx-auto border-gray-200'>
      <div className='flex flex-wrap items-center justify-between p-4'>
        <Link
          href='/'
          className='flex items-center space-x-3 md:hidden rtl:space-x-reverse'
        >
          <Image
            src='/fans-logo-oscuro.png'
            className='h-15'
            alt='Flowbite Logo'
            width={100}
            height='200'
          />
        </Link>
        <button
          onClick={toggleMenu}
          data-collapse-toggle='navbar-default'
          type='button'
          className='h-10 w-10 rounded-lg p-2 text-sm text-gray-500 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden'
          aria-controls='navbar-default'
          aria-expanded={isMenuOpen}
        >
          <span className='sr-only'>Hamburger menu</span>
          <svg
            className='h-5 w-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div
          className={`w-full md:block ${isMenuOpen ? 'block' : 'hidden'}`}
          id='navbar-default'
        >
          <ul className='md:bg-beige mt-4 flex flex-col items-center justify-center rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-16 md:border-0 md:p-0 rtl:space-x-reverse'>
            <li onClick={toggleMenu}>
              <Link
                href='/coffee'
                className='md:hover:text-green block rounded px-3 py-2 text-gray-100 md:bg-transparent md:p-0'
                aria-current='page'
              >
                Coffee
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                href='/bakery'
                className='md:hover:text-green block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent'
              >
                Bakery
              </Link>
            </li>
            <li onClick={toggleMenu} className='hidden md:block'>
              <Link
                href='/'
                className='flex items-center space-x-3 rtl:space-x-reverse'
              >
                <Image
                  src='/fans-logo-oscuro.png'
                  className='h-15'
                  alt='Flowbite Logo'
                  width={200}
                  height='200'
                />
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                href='/pastry'
                className='md:hover:text-green block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent'
              >
                Pastry
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                href='/contact'
                className='md:hover:text-green block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
