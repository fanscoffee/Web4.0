import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Fans Coffee Bakery',
  description:
    'Conoce la historia de Fans Coffee Bakery: masa madre, productos artesanales, postres creativos y un ambiente único inspirado en Los Simpsons.',
  openGraph: {
    title: 'Sobre Nosotros | Fans Coffee Bakery',
    description:
      'Conoce la historia de Fans Coffee Bakery: masa madre, productos artesanales, postres creativos y un ambiente único.',
    url: 'https://www.fanscoffee.es/about',
    siteName: 'Fans Coffee Bakery',
    locale: 'es_ES',
    type: 'website'
  }
}

export default function About() {
  return (
    <div className='mt-18 container max-w-[800px] py-24 md:mt-28'>
      <h1 className='mx-auto text-3xl font-bold'>Nosotros</h1>
      <p className='mx-auto mt-5'>
        Somos más que una panadería, somos una experiencia. Nos enorgullece ser
        tu lugar de encuentro para disfrutar de productos artesanales de alta
        calidad en un ambiente único y acogedor.
      </p>
      <p className='mx-auto mt-5'>
        Nuestro pan, elaborado con masa madre, es el corazón de nuestra
        panadería.
      </p>
      <p className='mx-auto mt-5'>
        Pero no nos detenemos ahí, nuestros postres son una deliciosa mezcla de
        creatividad y calidad que deleitarán tus sentidos.
      </p>
      <p className='mx-auto mt-5'>
        Nuestro espacio refleja nuestra pasión por lo simple y lo divertido. La
        decoración crea un ambiente relajante para que puedas disfrutar de tus
        alimentos y bebidas favoritas en paz. Además, tenemos una sección
        dedicada a los personajes famosos de Los Simpsons.
      </p>
    </div>
  )
}
