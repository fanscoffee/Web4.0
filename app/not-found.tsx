import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Página no encontrada | Fans Coffee Bakery',
  description:
    'La página que buscas no existe. Vuelve al inicio de Fans Coffee Bakery.'
}

export default function NotFound() {
  return (
    <main className='brand-page px-4 pb-20 pt-36 text-center md:pt-48'>
      <p className='brand-eyebrow'>Ups, algo se perdió</p>
      <h1 className='mx-auto mt-4 text-6xl leading-none text-brand-burgundy md:text-8xl'>
        Error 404
      </h1>
      <p className='mx-auto mt-5 max-w-lg text-lg leading-8 text-brand-burgundy/75'>
        Lo sentimos, no hemos podido encontrar la página que busca. Tal vez haya
        escrito mal la URL? Asegúrese de revisar su ortografía.
      </p>

      <Link href='/' className='block'>
        <Image
          className='mx-auto mt-8 h-[280px] w-full max-w-[600px] object-contain'
          src='https://i.imgur.com/lDJZJoX.png'
          alt='Ilustración de página no encontrada'
          width={600}
          height={400}
          priority
        />
      </Link>
      <Link href='/' className='brand-button mt-6'>
        Inicio
      </Link>
    </main>
  )
}
