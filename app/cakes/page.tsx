import type { Metadata } from 'next'
import { ProductCatalog } from '@/components/ProductCatalog'
import { cakesProducts } from './data'

export const metadata: Metadata = {
  title: 'Tartas Artesanales | Fans Coffee Bakery',
  description:
    'Tartas artesanales: Selva Negra, Red Velvet, Queso Vasco, Tres Chocolates y más. Desde 22€ - 30€. Reserva la tuya.',
  alternates: {
    canonical: 'https://www.fanscoffee.es/cakes'
  },
  openGraph: {
    title: 'Tartas Artesanales | Fans Coffee Bakery',
    description:
      'Tartas artesanales: Selva Negra, Red Velvet, Queso, Tres Chocolates. Desde 22€.',
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
