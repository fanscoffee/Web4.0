import type { Metadata } from 'next'
import Link from 'next/link'
import ParallaxHero from '@/components/ParallaxHero'

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
        url: '/images/ilustracion-blanca.webp',
        width: 1269,
        height: 1239,
        alt: 'Ilustración granate - Fans Coffee Bakery'
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
    images: ['/images/ilustracion-blanca.webp']
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
    <main className='brand-page pt-[4.75rem] md:pt-[5.75rem]'>
      <section aria-label='Galería de productos'>
        <ParallaxHero />
      </section>

      <section
        className='relative overflow-hidden bg-brand-cream py-16 md:py-24'
        aria-labelledby='proposition-heading'
      >
        <div className='pointer-events-none absolute -right-16 top-10 h-48 w-48 rounded-full border-2 border-dashed border-brand-pink/60 md:h-72 md:w-72' />
        <div className='brand-container relative'>
          <h1 id='proposition-heading' className='sr-only'>
            Fans Coffee Bakery - Tu cafetería en Madrid
          </h1>

          <div className='grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end'>
            <div className='max-w-2xl'>
              <p className='brand-eyebrow'>Café & Bakery · Madrid</p>
              <h2 className='mt-4 max-w-xl text-5xl leading-[0.9] text-brand-burgundy sm:text-6xl md:text-7xl'>
                En FANS somos FANS de ti
              </h2>
              <p className='text-brand-burgundy/72 mt-6 max-w-xl text-lg leading-8'>
                Café artesanal 100% arábico, tostadas gourmet, desayunos
                completos y repostería artesanal en el corazón de Madrid. Cada
                producto hecho con ingredientes frescos y mucho cariño.
              </p>
            </div>

            <div className='brand-panel-dark relative overflow-hidden p-6 sm:p-8'>
              <span className='brand-script absolute right-6 top-4 text-3xl text-brand-pink'>
                hecho con cariño
              </span>
              <div className='mt-8 grid grid-cols-3 gap-3 text-center'>
                {stats.map(stat => (
                  <div
                    key={stat.label}
                    className='border-r border-brand-cream/20 last:border-0'
                  >
                    <div className='text-3xl leading-none text-brand-pink md:text-4xl'>
                      {stat.number}
                    </div>
                    <div className='mt-2 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-brand-cream/70'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <nav
            className='mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4'
            aria-label='Navegación del menú'
          >
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative min-h-52 overflow-hidden rounded-brand-lg border-2 p-6 transition-transform hover:-translate-y-1 ${
                  index === 0
                    ? 'border-brand-burgundy bg-brand-burgundy text-brand-cream'
                    : index === 1
                      ? 'border-brand-pink bg-brand-pink text-brand-burgundy'
                      : index === 2
                        ? 'border-brand-olive bg-brand-olive text-brand-cream'
                        : 'border-brand-burgundy/20 bg-brand-paper text-brand-burgundy'
                }`}
              >
                <span className='absolute right-5 top-4 text-4xl opacity-40 transition-transform group-hover:rotate-12'>
                  ✦
                </span>
                <h3 className='max-w-[9rem] text-3xl leading-none'>
                  {item.name}
                </h3>
                <p className='mt-4 text-sm font-bold opacity-75'>
                  {item.price}
                </p>
                <span className='absolute bottom-6 left-6 text-xs font-bold uppercase tracking-[0.12em] underline decoration-brand-pink decoration-2 underline-offset-4'>
                  Ver menú →
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section
        className='bg-brand-pink py-16 md:py-20'
        aria-labelledby='contact-cta-heading'
      >
        <div className='brand-container grid gap-8 md:grid-cols-[1fr_auto] md:items-center'>
          <div>
            <p className='brand-eyebrow text-brand-burgundy'>
              Siempre estamos aquí
            </p>
            <h2
              id='contact-cta-heading'
              className='mt-3 max-w-xl text-4xl leading-none text-brand-burgundy md:text-5xl'
            >
              ¿Tienes preguntas? ¡Escríbenos!
            </h2>
            <p className='mt-4 max-w-xl text-brand-burgundy/75'>
              Estamos aquí para ayudarte. Contáctanos por teléfono, email o
              visita nuestra cafetería.
            </p>
          </div>
          <div className='flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row'>
            <a
              href='tel:+34628984413'
              className='brand-button brand-button--light'
            >
              <span aria-hidden='true'>☎</span> 628 984 413
            </a>
            <Link
              href='/contact'
              className='brand-button brand-button--outline'
            >
              Formulario de contacto
            </Link>
          </div>
        </div>
      </section>

      <section
        className='bg-brand-burgundy py-14 text-brand-cream md:py-20'
        aria-labelledby='location-heading'
      >
        <div className='brand-container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center'>
          <div>
            <p className='brand-eyebrow text-brand-pink'>Ven a vernos</p>
            <h2
              id='location-heading'
              className='mt-3 text-4xl leading-none text-brand-pink md:text-5xl'
            >
              Encuéntranos
            </h2>
            <p className='mt-4 text-brand-cream/80'>
              C/ Doctor Esquerdo 180, 28007 Madrid
            </p>
            <p className='mt-2 text-sm text-brand-cream/60'>
              Lunes a viernes: 7:00 - 14:00 (desayunos)
            </p>
          </div>
          <Link href='/contact' className='brand-button brand-button--light'>
            Ver en mapa →
          </Link>
        </div>
      </section>
    </main>
  )
}
