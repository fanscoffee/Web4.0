import type { Metadata } from 'next'
import Image from 'next/image'
import {
  baseOptions,
  normalDrinks,
  specialDrinks,
  extras,
  extraImages
} from './data'

export const metadata: Metadata = {
  title: 'Desayuno Especial | Fans Coffee Bakery',
  description:
    'Diseña tu desayuno perfecto en Madrid: elige tu base, bebida y extras. Desde 3.00€. Lunes a viernes de 7:00 a 14:00.',
  alternates: {
    canonical: 'https://www.fanscoffee.es/breakfast'
  },
  openGraph: {
    title: 'Desayuno Especial | Fans Coffee Bakery',
    description:
      'Diseña tu desayuno perfecto: elige tu base, bebida y extras. Desde 3.00€.',
    url: 'https://www.fanscoffee.es/breakfast',
    siteName: 'Fans Coffee Bakery',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Desayuno especial en Fans Coffee Bakery'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&q=80'
    ]
  }
}

export default function Breakfast() {
  return (
    <main className='min-h-screen'>
      <section className='px-4 pb-16 pt-24 md:pt-48'>
        <div className='mx-auto max-w-6xl'>
          <h1 className='mb-12 text-center text-3xl font-bold tracking-wide text-[#774949] md:text-4xl'>
            DISEÑA TU DESAYUNO PERFECTO
          </h1>

          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            {/* PASO 1: ELIGE TU BASE */}
            <div>
              <h2 className='mb-6 text-center text-xl font-bold text-[#2c2c2c] md:text-2xl lg:text-left'>
                PASO 1: ELIGE TU BASE
              </h2>
              <div className='space-y-6'>
                {baseOptions.map(option => (
                  <div
                    key={option.id}
                    className='overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md'
                  >
                    <div className='relative aspect-[4/3] w-full'>
                      <Image
                        src={option.image}
                        alt={option.name}
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                        className='object-cover'
                      />
                    </div>
                    <div className='p-4'>
                      <h3 className='text-lg font-bold text-[#2c2c2c]'>
                        {option.name}
                      </h3>
                      {option.description && (
                        <p className='text-gray-600 mt-1 text-sm'>
                          {option.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PASO 2: ELIGE TU BEBIDA */}
            <div>
              <h2 className='mb-6 text-center text-xl font-bold text-[#2c2c2c] md:text-2xl lg:text-left'>
                PASO 2: ELIGE TU BEBIDA
              </h2>
              <div className='space-y-6'>
                {/* Bebida Normal */}
                <div className='relative rounded-lg bg-white p-6 shadow-sm'>
                  <span className='absolute right-4 top-4 text-3xl'>☕</span>
                  <span className='mb-4 inline-block rounded-full bg-[#6b7c3f] px-3 py-1 text-sm font-semibold text-white'>
                    CON BEBIDA NORMAL: 3.00€
                  </span>
                  <ul className='space-y-2'>
                    {normalDrinks.map((drink, index) => (
                      <li key={index} className='text-gray-700 text-sm'>
                        <span className='mr-2'>•</span>
                        {drink.name}
                        {drink.detail && (
                          <span className='text-gray-500'>
                            {' '}
                            ({drink.detail})
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bebida Especial */}
                <div className='relative rounded-lg bg-white p-6 shadow-sm'>
                  <span className='absolute right-4 top-4 text-3xl'>🥛</span>
                  <span className='mb-4 inline-block rounded-full bg-[#5a6a35] px-3 py-1 text-sm font-semibold text-white'>
                    CON BEBIDA ESPECIAL: 3.30€
                  </span>
                  <ul className='space-y-2'>
                    {specialDrinks.map((drink, index) => (
                      <li key={index} className='text-gray-700 text-sm'>
                        <span className='mr-2'>•</span>
                        {drink.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Horario */}
                <div className='border-gray-100 rounded-lg border bg-[#faf8f5] p-5 shadow-sm'>
                  <h3 className='mb-2 text-lg font-bold text-[#2c2c2c]'>
                    Horario del desayuno
                  </h3>
                  <p className='text-gray-600 text-sm'>
                    Disponible de lunes a viernes de{' '}
                    <strong className='font-bold text-[#2c2c2c]'>
                      7:00 a 14:00
                    </strong>
                  </p>
                  <p className='text-gray-500 mt-2 text-xs'>
                    Consulta disponibilidad para fines de semana
                  </p>
                </div>
              </div>
            </div>

            {/* PASO 3: AÑADE EXTRAS */}
            <div>
              <h2 className='mb-6 text-center text-xl font-bold text-[#2c2c2c] md:text-2xl lg:text-left'>
                PASO 3: AÑADE EXTRAS
              </h2>
              <div className='rounded-lg bg-white p-6 shadow-sm'>
                <div className='space-y-0'>
                  {extras.map((extra, index) => (
                    <div
                      key={index}
                      className='border-gray-100 flex items-center justify-between border-b py-3 last:border-b-0'
                    >
                      <span className='text-gray-700 text-sm font-medium'>
                        {extra.name}
                      </span>
                      <span className='text-sm font-semibold text-[#6b7c3f]'>
                        {extra.price.toFixed(2).replace('.', ',')} €
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra Images Grid */}
              <div className='mt-6 grid grid-cols-2 gap-3'>
                {extraImages.map((img, index) => (
                  <div
                    key={index}
                    className='relative aspect-square overflow-hidden rounded-lg'
                  >
                    <Image
                      src={img}
                      alt={`Ingrediente extra ${index + 1}`}
                      fill
                      sizes='(max-width: 768px) 50vw, 25vw'
                      className='object-cover'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
