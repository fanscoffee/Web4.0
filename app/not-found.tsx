import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='container py-24 text-center'>
      <h1 className='mx-auto text-3xl font-bold'>Error 404</h1>
      <p className='mx-auto mt-4 max-w-lg text-xl'>
        Lo sentimos, no hemos podido encontrar la página que busca. Tal vez haya
        escrito mal la URL? Asegúrese de revisar su ortografía.
      </p>
      <Link href='/'>
        <img
          className='mx-auto mt-5 h-[400px] w-[600px]'
          src='https://i.imgur.com/lDJZJoX.png'
          alt='404'
        />
        <button className='font-small hover:text-md rounded-full bg-green px-8 py-4 text-sm text-white transition-all hover:bg-dark-green hover:font-medium'>
          Inicio
        </button>
      </Link>
    </div>
  )
}
