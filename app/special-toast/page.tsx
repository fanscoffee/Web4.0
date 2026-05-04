import type { Metadata } from 'next'
import { ProductCatalog } from '@/components/ProductCatalog'
import { toastProducts } from './data'

export const metadata: Metadata = {
  title: 'Tostadas Gourmet | Fans Coffee Bakery',
  description:
    'Descubre nuestras tostadas gourmet: combinaciones únicas con ingredientes frescos. El desayuno o merienda perfecto en Madrid.',
  openGraph: {
    title: 'Tostadas Gourmet | Fans Coffee Bakery',
    description:
      'Descubre nuestras tostadas gourmet con ingredientes frescos y combinaciones únicas.',
    url: 'https://www.fanscoffee.es/special-toast',
    siteName: 'Fans Coffee Bakery',
    locale: 'es_ES',
    type: 'website'
  }
}

export default function SpecialToast() {
  return (
    <main className='pt-20 md:pt-32'>
      <ProductCatalog products={toastProducts} />
    </main>
  )
}
