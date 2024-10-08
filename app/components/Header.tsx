'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isHomePage = pathname === '/'

  return (
    <nav
      className={`${isHomePage ? 'absolute left-0 top-0 z-10 w-full bg-transparent' : 'relative w-full bg-white shadow-md'}`}
    >
      <div className='flex flex-wrap items-center justify-between p-4'>
        <Link
          href='/'
          className='flex items-center space-x-3 md:hidden rtl:space-x-reverse'
        >
          <Image
            src='/fans-logo-oscuro.png'
            className='h-15'
            alt='Fans Logo'
            height={200}
            width={100}
          />
        </Link>
        <button
          onClick={toggleMenu}
          data-collapse-toggle='navbar-default'
          type='button'
          className='text-gray-500 focus:ring-gray-200 h-10 w-10 rounded-lg p-2 text-sm hover:bg-transparent focus:outline-none focus:ring-2 md:hidden'
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
          <ul className='mt-4 flex flex-col items-center justify-center rounded-lg bg-transparent p-4 font-medium md:mt-0 md:flex-row md:space-x-16 rtl:space-x-reverse'>
            <li onClick={toggleMenu} className='hidden md:block'>
              <Link
                href='/'
                className='flex items-center space-x-3 rtl:space-x-reverse'
              >
                <Image
                  src='/fans-logo-oscuro.png'
                  className='h-15'
                  alt='Fans Logo'
                  width={200}
                  height={200}
                />
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                href='/coffee'
                className='text-gray-100 block rounded px-3 py-2 md:bg-transparent md:p-0 md:hover:text-green'
                aria-current='page'
              >
                Coffee
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                href='/bakery'
                className='text-gray-900 hover:bg-gray-100 block rounded px-3 py-2 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green'
              >
                Bakery
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                href='/pastry'
                className='text-gray-900 hover:bg-gray-100 block rounded px-3 py-2 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green'
              >
                Pastry
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                href='/pdfs/catalog'
                className='text-gray-900 hover:bg-gray-100 block rounded px-3 py-2 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green'
              >
                Catalog
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                href='/contact'
                className='text-gray-900 hover:bg-gray-100 block rounded px-3 py-2 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green'
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
