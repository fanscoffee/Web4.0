import type { Metadata } from 'next'
import Image from 'next/image'
import {
  normalDrinks,
  specialDrinks,
  extras,
  breadOptions
} from './data'

export const metadata: Metadata = {
  title: 'Desayuno Especial | Fans Coffee Bakery',
  description:
    'Comienza tu día con nuestro desayuno especial: café o té, tostadas artesanas con mantequilla y mermelada. Lunes a viernes de 7:00 a 14:00.',
  openGraph: {
    title: 'Desayuno Especial | Fans Coffee Bakery',
    description:
      'Comienza tu día con nuestro desayuno especial: café, tostadas artesanas con mantequilla y mermelada.',
    url: 'https://www.fanscoffee.es/breakfast',
    siteName: 'Fans Coffee Bakery',
    locale: 'es_ES',
    type: 'website'
  }
}

export default function Breakfast() {
  return (
    <main className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='pt-20 md:pt-32'>
        <div className='container mx-auto px-4 py-8 md:py-12'>
          <div className='mx-auto max-w-5xl'>
            <div className='relative overflow-hidden rounded-2xl'>
              <div className='relative h-64 w-full md:h-[450px]'>
                <Image
                  src='https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&q=80'
                  alt='Desayuno especial'
                  fill
                  sizes='(max-width: 768px) 100vw, 1200px'
                  className='object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent' />
                <div className='absolute bottom-6 left-6 md:bottom-10 md:left-10'>
                  <span className='inline-block rounded-full bg-green px-4 py-1 text-sm font-semibold text-white'>
                    Promoción
                  </span>
                  <h1 className='mt-3 text-3xl font-bold text-white md:text-5xl'>
                    Desayuno Especial Fans
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className='bg-gray-50 pb-12'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-5xl'>
            {/* Title and Description */}
            <div className='mb-8 text-center'>
              <h2 className='mb-4 text-2xl font-bold text-gray-900 md:text-3xl'>
                ¡Comienza tu día con nosotros!
              </h2>
              <p className='mx-auto max-w-2xl text-lg leading-relaxed text-gray-600'>
                Disfruta de nuestro desayuno completo que incluye café o té,
                tostadas artesanas con mantequilla y mermelada.
              </p>
            </div>

            {/* Combo and Price Cards */}
            <div className='mb-8 grid gap-4 md:grid-cols-2'>
              <div className='rounded-xl bg-white p-6 text-center shadow-md'>
                <div className='mb-2 text-2xl font-bold text-green'>
                  Café + Tostada
                </div>
                <p className='text-gray-600'>La combinación perfecta</p>
              </div>
              <div className='rounded-xl bg-white p-6 text-center shadow-md'>
                <div className='mb-2 text-4xl font-bold text-gray-900'>
                  3.30€
                </div>
                <p className='text-gray-600'>Precio del desayuno especial</p>
              </div>
            </div>

            {/* Schedule Card */}
            <div className='mb-10 rounded-xl bg-white p-6 shadow-md'>
              <h3 className='mb-3 text-xl font-bold text-gray-900'>
                Horario del desayuno
              </h3>
              <p className='text-gray-600'>
                Disponible de lunes a viernes de{' '}
                <strong className='font-bold'>7:00 a 14:00</strong>
              </p>
              <p className='mt-2 text-sm text-gray-500'>
                Consulta disponibilidad para fines de semana
              </p>
            </div>

            {/* Bebidas Section */}
            <div className='mb-10 grid gap-6 md:grid-cols-2'>
              {/* Bebidas Normales */}
              <div className='rounded-xl bg-white p-6 shadow-md'>
                <h3 className='mb-4 text-xl font-bold text-green'>
                  Bebidas Normales
                </h3>
                <ul className='space-y-2'>
                  {normalDrinks.map((drink, index) => (
                    <li key={index} className='flex items-center text-gray-700'>
                      <span className='mr-2 h-2 w-2 rounded-full bg-green' />
                      {drink.name}
                      {drink.detail && (
                        <span className='ml-2 text-sm text-gray-500'>
                          ({drink.detail})
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bebidas Especiales */}
              <div className='rounded-xl bg-white p-6 shadow-md'>
                <h3 className='mb-4 text-xl font-bold text-green'>
                  Bebidas Especiales
                </h3>
                <ul className='space-y-2'>
                  {specialDrinks.map((drink, index) => (
                    <li key={index} className='flex items-center text-gray-700'>
                      <span className='mr-2 h-2 w-2 rounded-full bg-green' />
                      {drink.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Extras Section */}
            <div className='mb-10 rounded-xl bg-white p-6 shadow-md'>
              <h3 className='mb-4 text-xl font-bold text-green'>Extras</h3>
              <div className='grid gap-2 md:grid-cols-2'>
                {extras.map((extra, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between border-b border-gray-100 py-2'
                  >
                    <span className='text-gray-700'>{extra.name}</span>
                    <span className='font-semibold text-dark-green'>
                      {extra.price.toFixed(2).replace('.', ',')} €
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pan / Bollería Section */}
            <div className='rounded-xl bg-white p-6 shadow-md'>
              <h3 className='mb-4 text-xl font-bold text-green'>
                Opciones de Pan / Base
              </h3>
              <div className='space-y-4'>
                {breadOptions.map((option, index) => (
                  <div key={index} className='border-b border-gray-100 pb-4 last:border-0 last:pb-0'>
                    <div className='flex items-start'>
                      <span className='mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green/10 text-sm font-bold text-green'>
                        {index + 1}
                      </span>
                      <div>
                        <h4 className='font-semibold text-gray-900'>
                          {option.name}
                        </h4>
                        {option.detail && (
                          <p className='mt-1 text-sm text-gray-600'>
                            {option.detail}
                          </p>
                        )}
                        {option.items && (
                          <ul className='mt-2 space-y-1'>
                            {option.items.map((item, i) => (
                              <li
                                key={i}
                                className='flex items-center text-sm text-gray-600'
                              >
                                <span className='mr-2 text-green'>•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
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