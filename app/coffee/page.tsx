import { ProductCatalog } from '@/components/ProductCatalog'
import { coffeeProducts } from './data'

export default function Coffee() {
  return (
    <main className='pt-2 md:pt-32'>
      <ProductCatalog products={coffeeProducts} />
    </main>
  )
}
