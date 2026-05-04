import type { Metadata } from 'next'
import { ProductCatalog } from '@/components/ProductCatalog'
import { cakesProducts } from './data'

export const metadata: Metadata = {
  title: 'Nuestras Tartas Artesanales | Fans Coffee Bakery',
  description:
    'Descubre nuestras tartas artesanales: Selva Negra, Red Velvet, Queso, Tres Chocolates, Frutas y más. Hechas con ingredientes frescos y mucho cariño.',
  openGraph: {
    title: 'Nuestras Tartas Artesanales | Fans Coffee Bakery',
    description:
      'Descubre nuestras tartas artesanales: Selva Negra, Red Velvet, Queso, Tres Chocolates y más.',
    url: 'https://www.fanscoffee.es/cakes',
    siteName: 'Fans Coffee Bakery',
    locale: 'es_ES',
    type: 'website'
  }
}

export default function Cakes() {
  return (
    <main className='pt-20 md:pt-32'>
      <ProductCatalog products={cakesProducts} />
    </main>
  )
}
