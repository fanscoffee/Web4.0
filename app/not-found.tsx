import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h1 className='mx-auto mt-5 max-w-lg text-center text-3xl font-bold'>
        Error 404
      </h1>
      <p className='mx-auto mt-5 max-w-lg text-xl'>
        Lo sentimos, no hemos podido encontrar la página que busca. Tal vez haya
        escrito mal la URL? Asegúrese de revisar su ortografía.
      </p>
      <Link href='/'>
        <img
          className='mx-auto mt-5 h-[400px] w-[600px]'
          src='https://i.imgur.com/lDJZJoX.png'
          alt='404'
        />
      </Link>
    </div>
  )
}
