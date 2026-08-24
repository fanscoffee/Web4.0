'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
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

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className='fixed inset-x-0 top-0 z-[1000]'>
      <nav
        className='border-b-2 border-brand-burgundy/15 bg-brand-cream/95 backdrop-blur-md'
        aria-label='Navegación principal'
      >
        <div className='brand-container flex h-[4.75rem] items-center justify-between gap-6 md:h-[5.75rem]'>
          <button
            type='button'
            onClick={() => setIsMenuOpen(current => !current)}
            className='flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-burgundy text-brand-burgundy transition-colors hover:bg-brand-burgundy hover:text-brand-cream md:hidden'
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls='mobile-menu'
          >
            {isMenuOpen ? <IconClose /> : <IconMenu />}
          </button>

          <Link
            href='/'
            className='shrink-0'
            aria-label='Fans Coffee Bakery, ir a inicio'
          >
            <Image
              src='/logo-negro.png'
              alt='Fans Coffee Bakery'
              width={300}
              height={100}
              className='h-12 w-auto object-contain md:h-16'
              priority
            />
          </Link>

          <div className='hidden min-w-0 flex-1 items-center justify-end gap-8 md:flex'>
            <ul className='flex items-center gap-6 lg:gap-8'>
              {navItems.map(item => (
                <li key={item.href}>
                  <NavLink href={item.href} isActive={pathname === item.href}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <span className='brand-script hidden text-xl text-brand-burgundy xl:block'>
              tu rincón favorito
            </span>
          </div>
        </div>

        <div
          id='mobile-menu'
          className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-brand-burgundy/15 md:hidden`}
          aria-hidden={!isMenuOpen}
        >
          <div className='brand-container flex flex-col gap-1 py-4'>
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-l-4 px-4 py-3 font-display text-lg transition-colors ${
                  pathname === item.href
                    ? 'border-brand-pink bg-brand-pink/20 text-brand-burgundy'
                    : 'border-transparent text-brand-burgundy/75 hover:border-brand-pink hover:bg-brand-pink/10 hover:text-brand-burgundy'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

function NavLink({
  href,
  isActive,
  children
}: {
  href: string
  isActive: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={`relative whitespace-nowrap text-[0.68rem] font-bold uppercase tracking-[0.12em] transition-colors ${
        isActive
          ? 'text-brand-olive after:absolute after:-bottom-3 after:left-0 after:right-0 after:h-1 after:rounded-full after:bg-brand-pink'
          : 'text-brand-burgundy/75 hover:text-brand-burgundy'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  )
}

function IconMenu() {
  return (
    <svg
      className='h-5 w-5'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
      aria-hidden='true'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4 7h16M4 12h16M4 17h16'
      />
    </svg>
  )
}

function IconClose() {
  return (
    <svg
      className='h-5 w-5'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
      aria-hidden='true'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 6l12 12M18 6L6 18'
      />
    </svg>
  )
}
