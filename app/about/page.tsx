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
    <main className='min-h-screen pt-20 md:pt-32'>
      <div className='container mx-auto max-w-3xl px-4 py-12'>
        <header className='mb-12 text-center'>
          <h1 className='text-3xl font-bold text-gray-900 md:text-4xl'>
            Sobre Nosotros
          </h1>
          <p className='mt-4 text-lg text-gray-600'>
            Más que una cafetería, somos una familia
          </p>
        </header>

        <article className='space-y-6'>
          <section aria-labelledby='story-heading'>
            <h2 id='story-heading' className='mb-4 text-2xl font-bold text-green'>
              Nuestra Historia
            </h2>
            <p className='text-gray-700'>
              Fans Coffee Bakery nació con un sueño: crear un espacio donde cada persona
              se sienta como en casa. Somos más que una panadería, somos una experiencia.
            </p>
          </section>

          <section aria-labelledby='values-heading'>
            <h2 id='values-heading' className='mb-4 text-2xl font-bold text-green'>
              Nuestros Valores
            </h2>
            <ul className='space-y-3'>
              <li className='flex items-start'>
                <span className='mr-3 text-green' aria-hidden='true'>★</span>
                <div>
                  <strong className='text-gray-900'>Calidad artesanal</strong>
                  <p className='text-gray-600'>Productos hechos con ingredientes frescos y masa madre.</p>
                </div>
              </li>
              <li className='flex items-start'>
                <span className='mr-3 text-green' aria-hidden='true'>★</span>
                <div>
                  <strong className='text-gray-900'>Café 100% Arábico</strong>
                  <p className='text-gray-600'>Selección cuidadosa de los mejores granos.</p>
                </div>
              </li>
              <li className='flex items-start'>
                <span className='mr-3 text-green' aria-hidden='true'>★</span>
                <div>
                  <strong className='text-gray-900'>Ambiente único</strong>
                  <p className='text-gray-600'>Un espacio acogedor donde disfrutar con familia y amigos.</p>
                </div>
              </li>
            </ul>
          </section>

          <section aria-labelledby='location-info-heading'>
            <h2 id='location-info-heading' className='mb-4 text-2xl font-bold text-green'>
              Encuéntranos
            </h2>
            <p className='text-gray-700'>
              Estamos ubicados en el corazón de Madrid, en la calle Doctor Esquerdo 180.
              Abrimos de lunes a viernes de 7:00 a 14:00 (desayunos).
            </p>
            <div className='mt-4'>
              <Link
                href='/contact'
                className='inline-block rounded-full bg-green px-6 py-3 font-medium text-white transition-all hover:bg-dark-green'
              >
                Ver ubicación →
              </Link>
            </div>
          </section>
        </article>

        <nav className='mt-12 border-t border-gray-200 pt-8' aria-label='Enlaces relacionados'>
          <p className='mb-4 text-center text-gray-500'>Descubre más:</p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/breakfast' className='text-green hover:underline'>Desayunos</Link>
            <Link href='/special-toast' className='text-green hover:underline'>Tostadas</Link>
            <Link href='/cakes' className='text-green hover:underline'>Tartas</Link>
          </div>
        </nav>
      </div>
    </main>
  )
}