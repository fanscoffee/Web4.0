import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: true
})

const SITE_URL = 'https://www.fanscoffee.es'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Fans Coffee Bakery | Café Artesanal y Repostería en Madrid',
    template: '%s | Fans Coffee Bakery'
  },
  description:
    'En Fans somos fan(s) de ti. Café artesanal, desayunos desde 3.30€, tostadas gourmet y repostería en Madrid. ¡Visítanos!',
  keywords: [
    'café madrid',
    'cafetería madrid',
    'desayuno madrid',
    'repostería artesanal',
    'tostadas gourmet',
    'bakery madrid',
    'café artesanal',
    'pastelería madrid',
    'tartas artesanales madrid'
  ],
  authors: [
    { name: 'Juan Rolo', url: 'https://zonarolo.com' },
    { name: 'Carlos Dominguez', url: 'https://cardandom.com' }
  ],
  openGraph: {
    title: 'Fans Coffee Bakery | Café Artesanal y Repostería en Madrid',
    description:
      'En Fans somos fan(s) de ti. Café artesanal, desayunos, tostadas gourmet y repostería en Madrid.',
    url: SITE_URL,
    siteName: 'Fans Coffee Bakery',
    images: [
      {
        url: '/images/carousel-1.webp',
        width: 1200,
        height: 630,
        alt: 'Fans Coffee Bakery - Café Artesanal y Repostería'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fans Coffee Bakery | Café Artesanal y Repostería en Madrid',
    description:
      'En Fans somos fan(s) de ti. Café artesanal, desayunos, tostadas gourmet y repostería en Madrid.',
    images: ['/images/carousel-1.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: SITE_URL
  },
  category: 'food'
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  '@id': `${SITE_URL}/#business`,
  name: 'Fans Coffee Bakery',
  description:
    'Café artesanal, desayunos, tostadas gourmet y repostería en Madrid. Un ambiente único donde la pasión por la panadería se encuentra con la excelencia culinaria.',
  url: SITE_URL,
  telephone: '+34628984413',
  email: 'fanscoffee22@gmail.com',
  image: `${SITE_URL}/fans-logo.jpg`,
  priceRange: '€€',
  servesCuisine: ['Café', 'Desayunos', 'Repostería', 'Panadería'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'C. del Dr. Esquerdo, 180',
    addressLocality: 'Madrid',
    postalCode: '28007',
    addressCountry: 'ES'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.4018536,
    longitude: -3.6744478
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '21:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '21:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '08:30',
      closes: '21:00'
    }
  ],
  sameAs: [
    'https://www.instagram.com/fanscoffeebakery/'
  ]
}

const breadcrumbListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: SITE_URL
    }
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <head>
        <link rel='preload' as='image' href='/images/carousel-1.webp' />
      </head>
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
        <Script
          id='json-ld-global'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id='breadcrumb-json-ld'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbListJsonLd)
          }}
        />
      </body>
    </html>
  )
}
