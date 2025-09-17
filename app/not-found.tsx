import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className='container py-24 text-center'>
      <h1 className='mx-auto text-3xl font-bold'>Error 404</h1>
      <p className='mx-auto mt-4 max-w-lg text-xl'>
        Lo sentimos, no hemos podido encontrar la página que busca. Tal vez haya
        escrito mal la URL? Asegúrese de revisar su ortografía.
      </p>

      <Link href='/' className='block'>
        <Image
          className='mx-auto mt-5 h-[400px] w-[600px] object-contain'
          src='https://i.imgur.com/lDJZJoX.png'
          alt='404'
          width={600}
          height={400}
          priority
        />
        <button className='font-small hover:text-md mt-5 rounded-full bg-green px-8 py-4 text-sm text-white transition-all hover:bg-dark-green hover:font-medium'>
          Inicio
        </button>
      </Link>
    </div>
  )
}
