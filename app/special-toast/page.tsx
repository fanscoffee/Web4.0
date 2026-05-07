import type { Metadata } from 'next'
import { ProductCatalog } from '@/components/ProductCatalog'
import { saltyToastProducts, sweetToastProducts } from './data'

export const metadata: Metadata = {
  title: 'Tostadas Gourmet | Fans Coffee Bakery',
  description:
    'Descubre nuestras tostadas gourmet: combinaciones únicas con ingredientes frescos. El desayuno o merienda perfecto en Madrid.',
  openGraph: {
    title: 'Tostadas Gourmet | Fans Coffee Bakery',
    description:
      'Descubre nuestras tostadas gourmet con ingredientes frescos y combinaciones únicas.',
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
