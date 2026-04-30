import { ProductCatalog } from '@/components/ProductCatalog'
import { cakesProducts } from './data'

export default function Cakes() {
  return (
    <main className='pt-20 md:pt-32'>
      <ProductCatalog products={cakesProducts} />
    </main>
  )
}
