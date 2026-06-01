import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Página no encontrada | Fans Coffee Bakery',
  description: 'La página que buscas no existe. Vuelve al inicio de Fans Coffee Bakery.'
}

export default function NotFound() {
  return (
    <main className='container py-24 text-center'>
      <h1 className='mx-auto text-3xl font-bold'>Error 404</h1>
      <p className='mx-auto mt-4 max-w-lg text-xl'>
        Lo sentimos, no hemos podido encontrar la página que busca. Tal vez haya
        escrito mal la URL? Asegúrese de revisar su ortografía.
      </p>

      <Link href='/' className='block'>
        <Image
          className='mx-auto mt-5 h-[400px] w-[600px] object-contain'
          src='https://i.imgur.com/lDJZJoX.png'
          alt='Ilustración de página no encontrada'
          width={600}
          height={400}
          priority
        />
      </Link>
      <Link
        href='/'
        className='mt-5 inline-block rounded-full bg-green px-8 py-4 text-sm font-medium text-white transition-all hover:bg-dark-green'
      >
        Inicio
      </Link>
    </main>
  )
}
