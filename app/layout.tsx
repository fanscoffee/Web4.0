import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Fans Coffee',
  description:
    'En Fans somos fan(s) de ti. ¡Visítanos! Para pedidos llama al: 📞 628984413'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/svg+xml' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='author' content='Juan Rolo - @zonarolo' />
        <meta name='author' content='Carlos Dominguez - @Cardandom' />

        <meta property='og:title' content='Fans Coffee' />
        <meta
          property='og:description'
          content='En Fans somos fan(s) de ti. ¡Visítanos! Para pedidos llama al: 📞 628984413'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://fanscoffee.es' />
        <meta
          property='og:image'
          content='https://fanscoffee.es/fans-logo.webp'
        />
        <meta property='og:image:alt' content='Fans Coffee  Logo' />
        <meta property='og:image:width' content='2150' />
        <meta property='og:image:height' content='2180' />

        <meta property='twitter:title' content='Fans Coffee ' />
        <meta
          property='twitter:description'
          content='En Fans somos fan(s) de ti. ¡Visítanos! Para pedidos llama al: 📞 628984413'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:image'
          content='https://fanscoffee.es/fans-logo.webp'
        />
        <meta property='twitter:image:alt' content='Fans Coffee ' />
      </head>
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
