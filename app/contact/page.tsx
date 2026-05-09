import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contacto | Fans Coffee Bakery',
  description:
    'Contacta con Fans Coffee Bakery. C/ Dr. Esquerdo 180, Madrid. Tel: 628 984 413. Email: fanscoffee22@gmail.com.',
  alternates: {
    canonical: 'https://www.fanscoffee.es/contact'
  },
  openGraph: {
    title: 'Contacto | Fans Coffee Bakery',
    description:
      'Contacta con nosotros. Estamos aquí para ayudarte.',
    url: 'https://www.fanscoffee.es/contact',
    siteName: 'Fans Coffee Bakery',
    locale: 'es_ES',
    type: 'website'
  }
}

export default function Contact() {
  return <ContactForm />
}
