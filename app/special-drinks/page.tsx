import type { Metadata } from 'next'
import { ProductCatalog } from '@/components/ProductCatalog'
import { smoothieProducts, frappeProducts } from './data'

export const metadata: Metadata = {
  title: 'Smoothies y Frappés | Bebidas Especiales | Fans Coffee Bakery',
  description:
    'Disfruta de nuestras bebidas especiales: smoothies naturales de frutas frescas y frappés cremosos. Café, Oreo, caramelo, Nutella y más. Desde 4.70€.',
  alternates: {
    canonical: 'https://www.fanscoffee.es/special-drinks'
  },
  openGraph: {
    title: 'Smoothies y Frappés | Bebidas Especiales | Fans Coffee Bakery',
    description:
      'Bebidas especiales: smoothies de frutas frescas y frappés. Desde 4.70€.',
    url: 'https://www.fanscoffee.es/special-drinks',
    siteName: 'Fans Coffee Bakery',
    locale: 'es_ES',
    type: 'website'
  }
}

export default function SpecialDrinks() {
  return (
    <main className='brand-page pt-[4.75rem] md:pt-[5.75rem]'>
      <section className='border-b-2 border-brand-burgundy/15 py-14 md:py-24'>
        <header className='brand-container mb-10 border-b-2 border-brand-burgundy/15 pb-7'>
          <p className='brand-eyebrow'>Fruta, hielo y energía</p>
          <h1 className='mt-3 text-5xl leading-none text-brand-burgundy md:text-7xl'>
            Smoothies
          </h1>
        </header>
        <div>
          <ProductCatalog products={smoothieProducts} />
        </div>
      </section>

      <section className='bg-brand-burgundy py-14 text-brand-cream md:py-24'>
        <header className='brand-container mb-10 border-b-2 border-brand-pink/30 pb-7'>
          <p className='brand-eyebrow text-brand-pink'>Cremosos y frescos</p>
          <h2 className='mt-3 text-5xl leading-none text-brand-pink md:text-7xl'>
            Frappés
          </h2>
        </header>
        <ProductCatalog products={frappeProducts} />
      </section>
    </main>
  )
}
