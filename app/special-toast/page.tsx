import type { Metadata } from 'next'
import { ProductCatalog } from '@/components/ProductCatalog'
import { saltyToastProducts, sweetToastProducts } from './data'

export const metadata: Metadata = {
  title: 'Tostadas Especiales | Fans Coffee Bakery',
  description:
    'Tostadas especiales gourmet: jamón serrano, salmón, Nutella y más. Pan artesano con mollete integral o chapata. Desde 4.30€.',
  alternates: {
    canonical: 'https://www.fanscoffee.es/special-toast'
  },
  openGraph: {
    title: 'Tostadas Especiales | Fans Coffee Bakery',
    description:
      'Tostadas gourmet: saladas y dulces. Desde 4.30€.',
    url: 'https://www.fanscoffee.es/special-toast',
    siteName: 'Fans Coffee Bakery',
    locale: 'es_ES',
    type: 'website'
  }
}

export default function SpecialToast() {
  return (
    <main className='pt-24 md:pt-48'>
      <section className='mb-12'>
        <h2 className='mx-4 mb-6 text-center text-2xl font-bold text-dark-green md:mx-8 lg:mx-16 lg:text-3xl xl:mx-24'>
          Tostadas Saladas
        </h2>
        <ProductCatalog products={saltyToastProducts} />
      </section>

      <section>
        <h2 className='mx-4 mb-6 text-center text-2xl font-bold text-dark-green md:mx-8 lg:mx-16 lg:text-3xl xl:mx-24'>
          Tostadas Dulces
        </h2>
        <ProductCatalog products={sweetToastProducts} />
      </section>
    </main>
  )
}
