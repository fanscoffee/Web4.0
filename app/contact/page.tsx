import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contacto | Fans Coffee Bakery',
  description:
    '¿Tienes alguna pregunta? Contáctanos en Fans Coffee Bakery. C/ Dr. Esquerdo 180, Madrid. Tel: 628 984 413. Email: fanscoffee22@gmail.com.',
  openGraph: {
    title: 'Contacto | Fans Coffee Bakery',
    description:
      'Contáctanos en Fans Coffee Bakery. Estamos aquí para ayudarte.',
    url: 'https://www.fanscoffee.es/contact',
    siteName: 'Fans Coffee Bakery',
    locale: 'es_ES',
    type: 'website'
  }
}

export default function Contact() {
  return <ContactForm />
}
