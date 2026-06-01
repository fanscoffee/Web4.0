import type { Metadata } from 'next'
import ReviewForm from './ReviewForm'

export const metadata: Metadata = {
  title: 'Déjanos tu Reseña | Fans Coffee Bakery',
  description:
    'Tu opinión nos importa. Valora tu experiencia en Fans Coffee Bakery y ayúdanos a mejorar. ¡Gracias por visitarnos!',
  alternates: {
    canonical: 'https://www.fanscoffee.es/review'
  },
  openGraph: {
    title: 'Déjanos tu Reseña | Fans Coffee Bakery',
    description:
      'Tu opinión nos importa. Valora tu experiencia en Fans Coffee Bakery.',
    url: 'https://www.fanscoffee.es/review',
    siteName: 'Fans Coffee Bakery',
    locale: 'es_ES',
    type: 'website'
  },
  robots: {
    index: false,
    follow: false
  }
}

export default function Review() {
  return <ReviewForm />
}
