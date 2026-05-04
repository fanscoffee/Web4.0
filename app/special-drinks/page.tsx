import type { Metadata } from 'next'
import { ProductCatalog } from '@/components/ProductCatalog'
import { smoothieProducts, frappeProducts } from './data'

export const metadata: Metadata = {
  title: 'Smoothies y Frappés | Bebidas Especiales | Fans Coffee Bakery',
  description:
    'Disfruta de nuestras bebidas especiales: smoothies naturales de frutas frescas y frappés cremosos. Café, Oreo, caramelo, Nutella y más.',
  openGraph: {
    title: 'Smoothies y Frappés | Bebidas Especiales | Fans Coffee Bakery',
    description:
      'Disfruta de nuestras bebidas especiales: smoothies naturales y frappés cremosos.',
    url: 'https://www.fanscoffee.es/special-drinks',
    siteName: 'Fans Coffee Bakery',
    locale: 'es_ES',
    type: 'website'
  }
}

export default function SpecialDrinks() {
  return (
    <main className='pt-20 md:pt-32'>
      <section className='container mx-auto max-w-[1920px] px-4 py-12 md:py-20'>
        <div className='mb-16'>
          <h2 className='mb-8 text-center text-3xl font-bold text-green md:text-4xl'>
            Smoothies
          </h2>
          <ProductCatalog products={smoothieProducts} />
        </div>

        <div>
          <h2 className='mb-8 text-center text-3xl font-bold text-green md:text-4xl'>
            Frappés
          </h2>
          <ProductCatalog products={frappeProducts} />
        </div>
      </section>
    </main>
  )
}
