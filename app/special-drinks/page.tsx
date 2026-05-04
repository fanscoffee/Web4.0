import { ProductCatalog } from '@/components/ProductCatalog'
import { smoothieProducts, frappeProducts } from './data'

export default function SpecialDrinks() {
  return (
    <main className='pt-20 md:pt-32'>
      <section className='container mx-auto max-w-[1920px] px-4 py-12 md:py-20'>
        <div className='mb-12'>
          <h1 className='mb-8 text-center text-4xl font-bold text-dark-green md:text-5xl'>
            Bebidas Especiales
          </h1>
        </div>

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
