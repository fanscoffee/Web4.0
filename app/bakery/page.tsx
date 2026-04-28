import { ProductCatalog } from '@/components/ProductCatalog'
import { bakeryProducts } from './data'

export default function Bakery() {
  return (
    <main className='pt-20 md:pt-32'>
      <ProductCatalog products={bakeryProducts} />
    </main>
  )
}
