import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fans Coffee Bakery | Café Artesanal y Repostería en Madrid',
  description:
    'Descubre Fans Coffee Bakery: café 100% arábico, tostadas gourmet, postres artesanales y un ambiente único en Madrid. Desayunos desde 3.30€. ¡Visítanos!',
  alternates: {
    canonical: 'https://www.fanscoffee.es/'
  },
  openGraph: {
    title: 'Fans Coffee Bakery | Café Artesanal y Repostería en Madrid',
    description:
      'Descubre Fans Coffee Bakery: café 100% arábico, tostadas gourmet, postres artesanales y un ambiente único en Madrid.',
    url: 'https://www.fanscoffee.es/',
    siteName: 'Fans Coffee Bakery',
    images: [
      {
        url: '/images/carousel-1.webp',
        width: 1200,
        height: 630,
        alt: 'Cafés Artesanales - Fans Coffee Bakery'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fans Coffee Bakery | Café Artesanal y Repostería en Madrid',
    description:
      'Descubre Fans Coffee Bakery: café 100% arábico, tostadas gourmet, postres artesanales.',
    images: ['/images/carousel-1.webp']
  }
}

const menuItems = [
  { name: 'Desayunos', href: '/breakfast', price: 'Desde 3.30€' },
  { name: 'Tostadas', href: '/special-toast', price: '4.30€ - 7.50€' },
  { name: 'Bebidas', href: '/special-drinks', price: '4.70€' },
  { name: 'Tartas', href: '/cakes', price: '12€ - 47€' }
]

const stats = [
  { number: '100%', label: 'Café Arábico' },
  { number: '7:00', label: 'Apertura' },
  { number: '4.5★', label: 'Valoración' }
]

export default function Home() {
  return (
    <main>
      {/* Hero Section - Parallax Carousel */}
      <section aria-label='Galería de productos'>
        <ParallaxHero />
      </section>

      {/* Value Proposition Section */}
      <section
        className='bg-gray-50 py-16'
        aria-labelledby='proposition-heading'
      >
        <div className='container mx-auto max-w-5xl px-4'>
          <h1 id='proposition-heading' className='sr-only'>
            Fans Coffee Bakery - Tu cafetería en Madrid
          </h1>
          <div className='mb-12 text-center'>
            <h2 className='text-gray-900 mb-4 text-3xl font-bold md:text-4xl'>
              En FANS somos FANS de ti
            </h2>
            <p className='text-gray-600 mx-auto max-w-2xl text-lg'>
              Café artesanal 100% arábico, tostadas gourmet, desayunos completos
              y repostería artesanal en el corazón de Madrid. Cada producto
              hecho con ingredientes frescos y mucho cariño.
            </p>
          </div>

          {/* Stats */}
          <div
            className='mb-12 grid grid-cols-3 gap-4 text-center'
            role='list'
            aria-label='Características principales'
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className='rounded-xl bg-white p-6 shadow-md'
                role='listitem'
              >
                <div className='text-2xl font-bold text-green md:text-3xl'>
                  {stat.number}
                </div>
                <div className='text-gray-600 text-sm'>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Cards */}
          <nav
            className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'
            aria-label='Navegación del menú'
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className='group rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg'
              >
                <h3 className='text-gray-900 mb-2 text-xl font-bold group-hover:text-green'>
                  {item.name}
                </h3>
                <p className='text-gray-500 text-sm'>{item.price}</p>
                <span className='mt-3 inline-block text-sm font-medium text-green group-hover:underline'>
                  Ver menú →
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* CTA Contact Section */}
      <section className='bg-green py-16' aria-labelledby='contact-cta-heading'>
        <div className='container mx-auto max-w-4xl px-4 text-center'>
          <h2
            id='contact-cta-heading'
            className='mb-4 text-2xl font-bold text-white md:text-3xl'
          >
            ¿Tienes preguntas? ¡Escríbenos!
          </h2>
          <p className='mb-8 text-white/90'>
            Estamos aquí para ayudarte. Contáctanos por teléfono, email o visita
            nuestra cafetería.
          </p>
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <a
              href='tel:+34628984413'
              className='hover:bg-gray-100 rounded-full bg-white px-8 py-4 font-bold text-green transition-all'
            >
              📞 628 984 413
            </a>
            <Link
              href='/contact'
              className='rounded-full bg-dark-green px-8 py-4 font-bold text-white transition-all hover:bg-black'
            >
              Formulario de contacto
            </Link>
          </div>
        </div>
      </section>

      {/* Location Quick View */}
      <section
        className='bg-gray-900 py-12 text-white'
        aria-labelledby='location-heading'
      >
        <div className='container mx-auto max-w-4xl px-4'>
          <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
            <div className='text-center md:text-left'>
              <h2 id='location-heading' className='mb-2 text-2xl font-bold'>
                Encuéntranos
              </h2>
              <p className='text-white/80'>
                C/ Doctor Esquerdo 180, 28007 Madrid
              </p>
              <p className='mt-2 text-sm text-white/60'>
                Lunes a viernes: 7:00 - 14:00 (desayunos)
              </p>
            </div>
            <Link
              href='/contact'
              className='hover:text-gray-900 rounded-full border-2 border-white px-6 py-3 font-medium text-white transition-all hover:bg-white'
            >
              Ver en mapa →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function ParallaxHero() {
  return (
    <div className='relative'>
      <div
        className='flex h-screen items-center justify-center bg-cover bg-center'
        style={{
          backgroundImage: 'url(/images/carousel-1.webp)'
        }}
      >
        <div className='absolute inset-0 bg-black/40' />
        <div className='relative z-10 text-center text-white'>
          <h1 className='text-4xl font-bold md:text-6xl'>Fans Coffee Bakery</h1>
          <p className='mt-4 text-xl md:text-2xl'>
            Café artesanal y repostería en Madrid
          </p>
        </div>
      </div>
    </div>
  )
}
