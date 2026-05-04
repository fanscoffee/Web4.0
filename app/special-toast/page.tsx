import { ProductCatalog } from '@/components/ProductCatalog'
import { toastProducts } from './data'

export default function SpecialToast() {
  return (
    <main className='pt-20 md:pt-32'>
      <ProductCatalog products={toastProducts} />
    </main>
  )
}
