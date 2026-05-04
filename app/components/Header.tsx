'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Desayuno', href: '/breakfast' },
  { name: 'Tostadas especiales', href: '/special-toast' },
  { name: 'Bebidas especiales', href: '/special-drinks' },
  { name: 'Tartas enteras', href: '/cakes' },
  { name: 'Contacto', href: '/contact' }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const logoSrc = isHomePage ? '/fans-logo-blanco.png' : '/fans-logo-oscuro.png'
  const headerBgClass = isHomePage ? 'bg-transparent' : 'bg-white shadow-md'

  return (
    <header>
      <nav
        className={`fixed left-0 top-0 z-[1000] w-full transition-colors md:absolute md:left-0 md:top-0 md:z-[100] ${headerBgClass}`}
      >
        <div className='flex items-center justify-between p-4 md:p-3'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex h-12 w-12 items-center justify-center rounded-lg md:hidden ${
              isHomePage ? 'text-white' : 'text-gray-700'
            }`}
            aria-label='Menú'
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <IconClose /> : <IconMenu />}
          </button>

          <Link
            href='/'
            onClick={() => setIsMenuOpen(false)}
            className='absolute left-1/2 -translate-x-1/2 md:hidden'
          >
            <Image
              src={logoSrc}
              alt='Fans Logo'
              width={120}
              height={80}
              className='h-14 w-auto'
              priority
            />
          </Link>

          <div className='hidden w-12 md:block' />
        </div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div
            className={`flex flex-col items-center pb-8 pt-4 ${
              isHomePage ? 'bg-black/90 backdrop-blur-md' : 'bg-white'
            }`}
          >
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full py-4 text-center text-xl font-medium transition-colors ${
                  isHomePage
                    ? `text-white hover:bg-white/10 ${pathname === item.href ? 'text-green' : ''}`
                    : `text-gray-900 hover:bg-gray-100 ${pathname === item.href ? 'text-green' : ''}`
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className='hidden md:flex md:items-center md:justify-center md:py-4'>
          <Link href='/' className='flex items-center'>
            <Image
              src={logoSrc}
              alt='Fans Logo'
              width={220}
              height={140}
              className='h-20 w-auto'
              priority
            />
          </Link>
          <ul className='ml-16 flex space-x-10'>
            {navItems.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-lg font-medium transition-colors ${
                    isHomePage
                      ? `text-white hover:text-green ${pathname === item.href ? 'text-green' : ''}`
                      : `text-gray-800 hover:text-green ${pathname === item.href ? 'text-green' : ''}`
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

function IconMenu() {
  return (
    <svg
      className='h-8 w-8'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
  )
}

function IconClose() {
  return (
    <svg
      className='h-8 w-8'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  )
}
