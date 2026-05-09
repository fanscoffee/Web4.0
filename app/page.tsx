import type { Metadata } from 'next'
import ParallaxComponent from '@/components/ParallaxComponent'

export const metadata: Metadata = {
  title: 'Fans Coffee Bakery | Café Artesanal y Repostería en Madrid',
  description:
    'Descubre Fans Coffee Bakery: café 100% arábico, tostadas gourmet, postres artesanales y un ambiente único en Madrid. ¡Ven a visitarnos!',
  openGraph: {
    title: 'Fans Coffee Bakery | Café Artesanal y Repostería en Madrid',
    description:
      'Descubre Fans Coffee Bakery: café 100% arábico, tostadas gourmet, postres artesanales y un ambiente único en Madrid. ¡Ven a visitarnos!',
    url: 'https://www.fanscoffee.es/',
    siteName: 'Fans Coffee Bakery',
    images: [
      {
        url: '/images/carousel-1.webp',
        width: 1200,
        height: 630,
        alt: 'Cafés Artesanales - Fans Coffee Bakery'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  }
}

export default function Home() {
  return (
    <div>
      <h1 className='sr-only'>Fans Coffee Bakery - Café artesanal y repostería en Madrid</h1>
      <ParallaxComponent />
    </div>
  )
}
