import { ProductCatalog } from '@/components/ProductCatalog'
import { pastryProducts } from './data'

export default function Pastry() {
  return (
    <main className='pt-20 md:pt-32'>
      <ProductCatalog products={pastryProducts} />
    </main>
  )
}
