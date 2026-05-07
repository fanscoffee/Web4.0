import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Desayuno Especial | Fans Coffee Bakery',
  description:
    'Comienza tu día con nuestro desayuno especial: café o té, zumo natural, tostadas artesanas con mantequilla y mermelada. Lunes a viernes de 7:00 a 14:00.',
  openGraph: {
    title: 'Desayuno Especial | Fans Coffee Bakery',
    description:
      'Comienza tu día con nuestro desayuno especial: café, zumo natural y tostadas artesanas.',
    url: 'https://www.fanscoffee.es/breakfast',
    siteName: 'Fans Coffee Bakery',
    locale: 'es_ES',
    type: 'website'
  }
}

export default function Breakfast() {
  return (
    <main className='pt-20 md:pt-32'>
      <section className='container mx-auto px-4 py-12 md:py-20'>
        <div className='mx-auto max-w-4xl'>
          <div className='overflow-hidden rounded-2xl bg-gradient-to-br from-green/10 to-green/5'>
            <div className='relative h-64 w-full md:h-96'>
              <Image
                src='https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&q=80'
                alt='Desayuno especial'
                fill
                className='object-cover'
                priority
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
              <div className='absolute bottom-6 left-6 right-6 text-white'>
                <span className='inline-block rounded-full bg-green px-4 py-1 text-sm font-semibold'>
                  Promoción
                </span>
                <h1 className='mt-3 text-3xl font-bold md:text-5xl'>
                  Desayuno Especial Fans
                </h1>
              </div>
            </div>

            <div className='p-6 md:p-10'>
              <h2 className='text-gray-900 mb-4 text-2xl font-bold md:text-3xl'>
                ¡Comienza tu día con nosotros!
              </h2>

              <p className='text-gray-600 mb-6 text-lg leading-relaxed'>
                Disfruta de nuestro desayuno completo que incluye café o té,
                tostadas artesanas con mantequilla y mermelada.
              </p>

              <div className='mb-8 grid gap-4 md:grid-cols-2'>
                <div className='rounded-xl bg-white p-6 text-center shadow-md'>
                  <div className='mb-2 text-2xl font-bold text-green'>
                    Café + Tostada
                  </div>
                  <p className='text-gray-600'>La combinación perfecta</p>
                </div>
                <div className='rounded-xl bg-white p-6 text-center shadow-md'>
                  <div className='text-3xl font-bold text-dark-green'>
                    3.30€
                  </div>
                  <p className='text-gray-600 mt-2'>
                    Precio del desayuno especial
                  </p>
                </div>
              </div>

              <div className='rounded-xl bg-white p-6 shadow-md'>
                <h3 className='text-gray-900 mb-3 text-xl font-semibold'>
                  Horario del desayuno
                </h3>
                <p className='text-gray-600'>
                  Disponible de lunes a viernes de <strong>7:00 a 14:00</strong>
                </p>
                <p className='text-gray-500 mt-2 text-sm'>
                  Consulta disponibilidad para fines de semana
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
