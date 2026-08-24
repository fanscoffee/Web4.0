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
    <main className='brand-page pt-[4.75rem] md:pt-[5.75rem]'>
      <header className='brand-container py-14 md:py-24 md:pb-12'>
        <p className='brand-eyebrow'>Hechas para celebrar</p>
        <h1 className='mt-3 text-5xl leading-none text-brand-burgundy md:text-7xl'>
          Tartas Artesanales
        </h1>
      </header>
      <ProductCatalog products={cakesProducts} />
      <div className='h-16 md:h-24' />
    </main>
  )
}
