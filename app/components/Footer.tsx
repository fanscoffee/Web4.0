'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

const legalLinks = [
  { href: '/legal', label: 'Aviso Legal' },
  { href: '/privacy', label: 'Privacidad' },
  { href: '/work', label: 'Trabaja con nosotros' },
  { href: '/about', label: 'Nosotros' },
  { href: '/sitemap', label: 'Mapa del sitio' }
]

export default function Footer() {
  const pathname = usePathname()
  const showMap = pathname !== '/contact'

  return (
    <footer className='border-t-4 border-brand-pink bg-brand-burgundy px-4 py-12 text-brand-cream md:py-16'>
      <div className='brand-container'>
        <div className='grid gap-10 lg:grid-cols-[1fr_auto_auto] lg:items-start lg:gap-16'>
          <div>
            <Image
              src='/logo-blanco.png'
              alt='Fans Coffee Bakery'
              width={322}
              height={200}
              className='h-12 w-auto object-contain object-left md:h-14'
            />
            <p className='mt-5 max-w-sm text-sm leading-6 text-brand-cream/75'>
              En FANS, somos FANS de ti y de cada momento dulce.
            </p>
            <div className='mt-6 flex items-center gap-4'>
              <span className='text-sm font-bold uppercase tracking-[0.12em]'>
                Síguenos:
              </span>
              <a
                href='https://www.instagram.com/fanscoffeebakery/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram de Fans Coffee Bakery'
                className='flex h-11 w-11 items-center justify-center rounded-full border border-brand-pink/60 text-brand-pink transition-colors hover:bg-brand-pink hover:text-brand-burgundy'
              >
                <FaInstagram className='size-5' />
              </a>
            </div>
            <p className='mt-6 text-sm leading-7 text-brand-cream/75'>
              <strong className='text-brand-cream'>Horario:</strong>
              <br />
              Lunes a viernes: 7:00 – 21:00
              <br />
              Sábado: 8:00 – 21:00
              <br />
              Domingo: 8:30 – 21:00
            </p>
          </div>

          <div>
            <h3 className='mb-4 text-2xl text-brand-pink'>Feed de Instagram</h3>
            <a
              href='https://www.instagram.com/fanscoffeebakery/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Abrir Instagram de Fans Coffee Bakery'
            >
              <div className='grid grid-cols-3 gap-2'>
                {Array.from({ length: 6 }, (_, index) => (
                  <Image
                    key={index}
                    src={`/images/instagram/i${index + 1}.webp`}
                    alt={`Foto de Instagram de Fans Coffee Bakery ${index + 1}`}
                    width={112}
                    height={112}
                    className='h-24 w-24 rounded-[0.65rem] border border-brand-pink/40 object-cover transition-transform hover:scale-105 sm:h-28 sm:w-28'
                    sizes='(max-width: 640px) 30vw, 112px'
                    loading='lazy'
                  />
                ))}
              </div>
            </a>
          </div>

          {showMap && (
            <div className='w-full min-w-0 overflow-hidden rounded-brand border-2 border-brand-pink/50 bg-brand-cream p-1 lg:w-[300px]'>
              <iframe
                title='Ubicación de Fans Coffee Bakery en Google Maps'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.315829639117!2d-3.6768293491456254!3d40.40185366436702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227f0d51d1505%3A0xbfa018432bd3d379!2sFans%20Coffee%20%26%20Bakery!5e0!3m2!1ses!2ses!4v1620941613287!5m2!1ses!2ses'
                width='100%'
                height='250'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='block h-[250px] w-full max-w-full rounded-brand border-0'
              />
            </div>
          )}
        </div>

        <div className='mt-12 border-t border-brand-pink/30 pt-6'>
          <div className='flex flex-col gap-4 text-sm text-brand-cream/70 md:flex-row md:items-center md:justify-between'>
            <nav
              className='flex flex-wrap gap-x-5 gap-y-2'
              aria-label='Enlaces legales'
            >
              {legalLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='transition-colors hover:text-brand-pink'
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p>
              &copy; 2026 FANS COFFEE FRIENDS S.L.L. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
