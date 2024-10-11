import Link from 'next/link'

export default function Building() {
  return (
    <div className='py-24 text-center'>
      <h1 className='mx-auto text-3xl font-bold'>En Construcción</h1>
      <p className='mx-auto mt-4 max-w-lg text-xl'>
        Nuestra página esta bajo construcción, sabiendo esto aún puedes
        contactarte con nosotros a través de nuestra página de contacto
        rellenando el formulario y te atenderemos tan pronto como sea posible.
      </p>

      <div className='container m-auto max-w-[600px]'>
        <Link href='/'>
          <img
            className='h-[400px] w-[600px]'
            src='https://i.imgur.com/qIufhof.png'
            alt='En construcción'
          />
          <button className='font-small hover:text-md rounded-full bg-green px-8 py-4 text-sm text-white transition-all hover:bg-dark-green hover:font-medium'>
            Inicio
          </button>
        </Link>
      </div>
    </div>
  )
}
