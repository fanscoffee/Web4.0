import type { Metadata } from 'next'
import { ProductCatalog } from '@/components/ProductCatalog'
import { saltyToastProducts, sweetToastProducts } from './data'

export const metadata: Metadata = {
  title: 'Tostadas Especiales | Fans Coffee Bakery',
  description:
    'Tostadas especiales gourmet: salmón, tomate seco, Nutella y más. Pan artesano con mollete integral o chapata. Desde 4.50€.',
  alternates: {
    canonical: 'https://www.fanscoffee.es/special-toast'
  },
  openGraph: {
    title: 'Tostadas Especiales | Fans Coffee Bakery',
    description: 'Tostadas gourmet: saladas y dulces. Desde 4.50€.',
    url: 'https://www.fanscoffee.es/special-toast',
    siteName: 'Fans Coffee Bakery',
    locale: 'es_ES',
    type: 'website'
  }
}

export default function SpecialToast() {
  return (
    <main className='brand-page pt-[4.75rem] md:pt-[5.75rem]'>
      <section className='py-14 md:py-24'>
        <header className='brand-container mb-10 border-b-2 border-brand-burgundy/15 pb-7'>
          <p className='brand-eyebrow'>Sabor artesanal</p>
          <h1 className='mt-3 text-5xl leading-none text-brand-burgundy md:text-7xl'>
            Tostadas Saladas
          </h1>
        </header>
        <ProductCatalog products={saltyToastProducts} />
      </section>

      <section className='border-t-2 border-brand-burgundy/15 bg-brand-pink/25 py-14 md:py-24'>
        <header className='brand-container mb-10 border-b-2 border-brand-burgundy/15 pb-7'>
          <p className='brand-eyebrow text-brand-burgundy'>Un poco más dulce</p>
          <h2 className='mt-3 text-5xl leading-none text-brand-burgundy md:text-7xl'>
            Tostadas Dulces
          </h2>
        </header>
        <ProductCatalog products={sweetToastProducts} />
      </section>
    </main>
  )
}
