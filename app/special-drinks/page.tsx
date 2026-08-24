import type { Metadata } from 'next'
import { ProductCatalog } from '@/components/ProductCatalog'
import { frappeProducts, hotDrinkProducts, smoothieProducts } from './data'

export const metadata: Metadata = {
  title:
    'Smoothies, Frappés y Bebidas Calientes | Bebidas Especiales | Fans Coffee Bakery',
  description:
    'Disfruta de nuestras bebidas especiales: smoothies naturales, frappés cremosos, café, chai y matcha. Desde 4.70€.',
  alternates: {
    canonical: 'https://www.fanscoffee.es/special-drinks'
  },
  openGraph: {
    title:
      'Smoothies, Frappés y Bebidas Calientes | Bebidas Especiales | Fans Coffee Bakery',
    description:
      'Bebidas especiales: smoothies, frappés, café, chai y matcha. Desde 4.70€.',
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
          <div className='mt-3 flex flex-wrap items-baseline gap-4'>
            <h1 className='text-5xl leading-none text-brand-burgundy md:text-7xl'>
              Smoothies
            </h1>
            <span className='rounded-full bg-brand-burgundy px-4 py-2 text-base font-bold text-brand-cream'>
              4.70€
            </span>
          </div>
        </header>
        <div>
          <ProductCatalog
            products={smoothieProducts}
            representativeImage='/bebidas-especiales/smoothies.webp'
            representativeAlt='Selección de smoothies de frutas'
          />
        </div>
      </section>

      <section className='bg-brand-burgundy py-14 text-brand-cream md:py-24'>
        <header className='brand-container mb-10 border-b-2 border-brand-pink/30 pb-7'>
          <p className='brand-eyebrow text-brand-pink'>Cremosos y frescos</p>
          <div className='mt-3 flex flex-wrap items-baseline gap-4'>
            <h2 className='text-5xl leading-none text-brand-pink md:text-7xl'>
              Frappés
            </h2>
            <span className='rounded-full bg-brand-cream px-4 py-2 text-base font-bold text-brand-burgundy'>
              4.70€
            </span>
          </div>
        </header>
        <ProductCatalog
          products={frappeProducts}
          representativeImage='/bebidas-especiales/frappes.webp'
          representativeAlt='Selección de frappés cremosos'
        />
      </section>

      <section className='bg-brand-olive py-14 text-brand-cream md:py-24'>
        <header className='brand-container mb-10 border-b-2 border-brand-gold/30 pb-7'>
          <p className='brand-eyebrow text-brand-gold'>Calor, espuma y calma</p>
          <div className='mt-3 flex flex-wrap items-baseline gap-4'>
            <h2 className='text-5xl leading-none text-brand-gold md:text-7xl'>
              Bebidas calientes
            </h2>
            <span className='rounded-full bg-brand-gold px-4 py-2 text-base font-bold text-brand-burgundy'>
              4.70€
            </span>
          </div>
        </header>
        <ProductCatalog products={hotDrinkProducts} />
      </section>
    </main>
  )
}
