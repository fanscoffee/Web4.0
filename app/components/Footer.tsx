// components/Footer.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()
  const showMap = pathname !== '/contact'

  return (
    <footer className='bg-gray-900 text-gray-300 px-4 py-8'>
      <div className='container mx-auto flex flex-col justify-between md:flex-row'>
        {/* Logo y Descripción */}
        <div className='mb-8 md:mb-0'>
          <h2 className='text-3xl font-bold'>Fans Coffee Bakery</h2>
          <p className='mt-4 text-sm'>
            En FANS, somos FANS de ti y de cada momento dulce.
          </p>
          <div className='mt-4 flex items-center space-x-4'>
            <span>Síguenos:</span>
            <a
              href='https://www.instagram.com/fanscoffeebakery/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram de Fans Coffee Bakery'
              className='text-gray-300'
            >
              <FaInstagram className='size-6' />
            </a>
          </div>
          <p className='mt-4 text-sm'>
            <strong>Horario:</strong><br />
            Lunes a viernes: 7:00 – 21:00<br />
            Sábado: 8:00 – 21:00<br />
            Domingo: 8:30 – 21:00
          </p>
        </div>

        {/* Feed de Instagram */}
        <div className='mb-8 md:mb-0'>
          <h3 className='mb-4 font-semibold'>Feed de Instagram</h3>
          <a href='https://www.instagram.com/fanscoffeebakery/' target='_blank' rel='noopener noreferrer'>
            <div className='grid grid-cols-3 gap-2'>
              <Image
                src='/images/instagram/i1.webp'
                alt='Foto de Instagram de Fans Coffee Bakery 1'
                width={112}
                height={112}
                className='h-28 w-28 object-cover'
                sizes='112px'
                loading='lazy'
              />
              <Image
                src='/images/instagram/i2.webp'
                alt='Foto de Instagram de Fans Coffee Bakery 2'
                width={112}
                height={112}
                className='h-28 w-28 object-cover'
                sizes='112px'
                loading='lazy'
              />
              <Image
                src='/images/instagram/i3.webp'
                alt='Foto de Instagram de Fans Coffee Bakery 3'
                width={112}
                height={112}
                className='h-28 w-28 object-cover'
                sizes='112px'
                loading='lazy'
              />
              <Image
                src='/images/instagram/i4.webp'
                alt='Foto de Instagram de Fans Coffee Bakery 4'
                width={112}
                height={112}
                className='h-28 w-28 object-cover'
                sizes='112px'
                loading='lazy'
              />
              <Image
                src='/images/instagram/i5.webp'
                alt='Foto de Instagram de Fans Coffee Bakery 5'
                width={112}
                height={112}
                className='h-28 w-28 object-cover'
                sizes='112px'
                loading='lazy'
              />
              <Image
                src='/images/instagram/i6.webp'
                alt='Foto de Instagram de Fans Coffee Bakery 6'
                width={112}
                height={112}
                className='h-28 w-28 object-cover'
                sizes='112px'
                loading='lazy'
              />
            </div>
          </a>
        </div>

        {showMap && (
          <div className='mx-auto text-center md:mx-3 md:mt-10'>
            <iframe
              title='Ubicación de Fans Coffee Bakery en Google Maps'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.315829639117!2d-3.6768293491456254!3d40.40185366436702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227f0d51d1505%3A0xbfa018432bd3d379!2sFans%20Coffee%20%26%20Bakery!5e0!3m2!1ses!2ses!4v1620941613287!5m2!1ses!2ses'
              width='300'
              height='250'
              style={{ border: 0, borderRadius: 10 }}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        )}
      </div>
      <div className='text-gray-500 mx-auto mt-8 flex max-w-[1200px] flex-col items-center text-center'>
        <div className='mb-2 flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0'>
          <Link href='legal' className='hover:text-green'>
            Aviso Legal
          </Link>
          <span className='hidden md:inline'>|</span>
          <Link href='privacy' className='hover:text-green'>
            Privacidad
          </Link>
          <span className='hidden md:inline'>|</span>
          <Link href='work' className='hover:text-green'>
            Trabaja con nosotros
          </Link>
          <span className='hidden md:inline'>|</span>
          <Link href='about' className='hover:text-green'>
            Nosotros
          </Link>
          <span className='hidden md:inline'>|</span>
          <Link href='sitemap' className='hover:text-green'>
            Mapa del sitio
          </Link>
        </div>
        <div>
          &copy; 2026 FANS COFFEE FRIENDS S.L.L. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
