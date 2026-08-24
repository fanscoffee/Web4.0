import type { Metadata } from 'next'
import BreakfastBuilder from './BreakfastBuilder'
import { breakfastHero } from './data'

export const metadata: Metadata = {
  title: 'Desayuno Especial | Fans Coffee Bakery',
  description:
    'Elige entre tostadas o bollería, combina tu bebida y añade extras. Desayunos desde 2.90€ en Fans Coffee Bakery, Madrid.',
  alternates: {
    canonical: 'https://www.fanscoffee.es/breakfast'
  },
  openGraph: {
    title: 'Desayuno Especial | Fans Coffee Bakery',
    description:
      'Tostadas desde 3.30€ y bollería desde 2.90€. Elige tu base, bebida y extras.',
    url: 'https://www.fanscoffee.es/breakfast',
    siteName: 'Fans Coffee Bakery',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: breakfastHero.src,
        width: 4519,
        height: 6778,
        alt: 'Desayuno especial en Fans Coffee Bakery'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: [breakfastHero.src]
  }
}

export default function Breakfast() {
  return <BreakfastBuilder />
}
