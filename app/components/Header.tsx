'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    name: "Cafés",
    href: '/coffee'
  },
  {
    name: "Panadería",
    href: '/bakery'
  },
  {
    name: "Pastelería",
    href: '/pastry'
  },
  {
    name: "Tartas enteras",
    href: '/pdfs/cakes'
  },
  {
    name: "Contacto",
    href: '/contact'
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isHomePage = pathname === '/'
  const menuIcon = isMenuOpen ? (
    <svg
      className='h-5 w-5'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  ) : (
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
  )
  return (
    <nav
      className={
        isHomePage
          ? 'absolute left-0 top-0 z-10 w-full bg-transparent text-white'
          : 'relative w-full bg-white text-black shadow-md'
      }
    >
      <div className='flex flex-wrap items-center justify-between p-2'>
        <Link
          href='/'
          className='flex items-center space-x-3 md:hidden rtl:space-x-reverse'
        >
          <Image
            src={isHomePage ? '/fans-logo-blanco.png' : '/fans-logo-oscuro.png'}
            alt='Fans Logo'
            height={200}
            width={150}
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
          {menuIcon}
        </button>
        <div
          className={`w-full md:block ${isMenuOpen ? 'block' : 'hidden'}`}
          id='navbar-default'
        >
          <ul className='mt-4 flex flex-col items-center justify-center rounded-lg text-xl font-medium backdrop-blur-md md:mt-0 md:flex-row md:space-x-16 md:text-base md:backdrop-blur-none rtl:space-x-reverse'>
            <li onClick={toggleMenu} className='hidden md:block'>
              <Link
                href='/'
                className='flex items-center space-x-3 rtl:space-x-reverse'
              >
                <Image
                  src={
                    isHomePage
                      ? '/fans-logo-blanco.png'
                      : '/fans-logo-oscuro.png'
                  }
                  className='h-15'
                  alt='Fans Logo'
                  width={200}
                  height={200}
                />
              </Link>
            </li>
            {navItems.map(item => {
              return (
                <li key={item.href} onClick={toggleMenu}>
                  <Link 
                    href={item.href}
                    className='text-gray-900 hover:bg-gray-100 block rounded px-3 py-2 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green'
                    aria-current={pathname === item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
