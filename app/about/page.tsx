import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Fans Coffee Bakery',
  description:
    'Conoce la historia de Fans Coffee Bakery: café artesanal, productos frescos, ambiente único y pasión por la repostería en Madrid.',
  alternates: {
    canonical: 'https://www.fanscoffee.es/about'
  },
  openGraph: {
    title: 'Sobre Nosotros | Fans Coffee Bakery',
    description:
      'Conoce la historia de Fans Coffee Bakery: productos artesanales y un ambiente único.',
    url: 'https://www.fanscoffee.es/about',
    siteName: 'Fans Coffee Bakery',
    locale: 'es_ES',
    type: 'website'
  }
}

export default function About() {
  return (
    <main className='brand-page pb-16 pt-[4.75rem] md:pt-[5.75rem]'>
      <div className='brand-container py-12 md:py-20'>
        <header className='mb-12 max-w-3xl'>
          <p className='brand-eyebrow'>Nuestra casa</p>
          <h1 className='mt-4 text-6xl leading-[0.88] text-brand-burgundy md:text-8xl'>
            Sobre Nosotros
          </h1>
          <p className='brand-script mt-5 text-3xl text-brand-olive md:text-4xl'>
            Más que una cafetería, somos una familia
          </p>
        </header>

        <article className='grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
          <section
            className='brand-panel p-6 sm:p-10'
            aria-labelledby='story-heading'
          >
            <p className='brand-eyebrow'>Desde Madrid</p>
            <h2
              id='story-heading'
              className='mt-3 text-4xl leading-none text-brand-olive md:text-5xl'
            >
              Nuestra Historia
            </h2>
            <p className='text-brand-burgundy/78 mt-6 text-base leading-8'>
              Fans Coffee Bakery nació con un sueño: crear un espacio donde cada
              persona se sienta como en casa. Somos más que una panadería, somos
              una experiencia.
            </p>
          </section>

          <section
            className='brand-panel-dark p-6 sm:p-10'
            aria-labelledby='values-heading'
          >
            <p className='brand-eyebrow text-brand-pink'>Lo que nos mueve</p>
            <h2
              id='values-heading'
              className='mt-3 text-4xl leading-none text-brand-pink md:text-5xl'
            >
              Nuestros Valores
            </h2>
            <ul className='mt-7 space-y-6'>
              <li className='flex items-start gap-3'>
                <span
                  className='mt-1 text-2xl text-brand-gold'
                  aria-hidden='true'
                >
                  ✦
                </span>
                <div>
                  <strong className='text-lg text-brand-cream'>
                    Calidad artesanal
                  </strong>
                  <p className='mt-1 text-sm leading-6 text-brand-cream/70'>
                    Productos hechos con ingredientes frescos y masa madre.
                  </p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span
                  className='mt-1 text-2xl text-brand-gold'
                  aria-hidden='true'
                >
                  ✦
                </span>
                <div>
                  <strong className='text-lg text-brand-cream'>
                    Café 100% Arábico
                  </strong>
                  <p className='mt-1 text-sm leading-6 text-brand-cream/70'>
                    Selección cuidadosa de los mejores granos.
                  </p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span
                  className='mt-1 text-2xl text-brand-gold'
                  aria-hidden='true'
                >
                  ✦
                </span>
                <div>
                  <strong className='text-lg text-brand-cream'>
                    Ambiente único
                  </strong>
                  <p className='mt-1 text-sm leading-6 text-brand-cream/70'>
                    Un espacio acogedor donde disfrutar con familia y amigos.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section
            className='border-t-2 border-brand-burgundy/15 pt-8 lg:col-span-2'
            aria-labelledby='location-info-heading'
          >
            <p className='brand-eyebrow'>Te esperamos</p>
            <h2
              id='location-info-heading'
              className='mt-3 text-4xl leading-none text-brand-burgundy md:text-5xl'
            >
              Encuéntranos
            </h2>
            <p className='text-brand-burgundy/78 mt-5 max-w-2xl text-base leading-8'>
              Estamos ubicados en el corazón de Madrid, en la calle Doctor
              Esquerdo 180. Abrimos de lunes a viernes de 7:00 a 14:00
              (desayunos).
            </p>
            <div className='mt-6'>
              <Link href='/contact' className='brand-button'>
                Ver ubicación →
              </Link>
            </div>
          </section>
        </article>

        <nav
          className='mt-14 border-t-2 border-brand-burgundy/15 pt-7'
          aria-label='Enlaces relacionados'
        >
          <p className='mb-4 text-sm font-bold uppercase tracking-[0.12em] text-brand-muted'>
            Descubre más:
          </p>
          <div className='flex flex-wrap gap-x-6 gap-y-3'>
            <Link
              href='/breakfast'
              className='font-bold text-brand-olive underline decoration-brand-pink decoration-2 underline-offset-4'
            >
              Desayunos
            </Link>
            <Link
              href='/special-toast'
              className='font-bold text-brand-olive underline decoration-brand-pink decoration-2 underline-offset-4'
            >
              Tostadas
            </Link>
            <Link
              href='/cakes'
              className='font-bold text-brand-olive underline decoration-brand-pink decoration-2 underline-offset-4'
            >
              Tartas
            </Link>
          </div>
        </nav>
      </div>
    </main>
  )
}
