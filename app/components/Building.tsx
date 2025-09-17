import Link from 'next/link'
import Image from 'next/image'

export default function Building() {
  return (
    <div className='py-24 text-center'>
      <h1 className='mx-auto text-3xl font-bold'>En Construcción</h1>
      <p className='mx-auto mt-4 max-w-lg text-xl'>
        Nuestra página está bajo construcción, sabiendo esto aún puedes
        contactarte con nosotros a través de nuestra página de contacto
        rellenando el formulario y te atenderemos tan pronto como sea posible.
      </p>

      <div className='container m-auto max-w-[600px]'>
        <Link href='/' className='block'>
          <Image
            className='mx-auto mt-5 h-[400px] w-[600px] object-contain'
            src='https://i.imgur.com/qIufhof.png'
            alt='En construcción'
            width={600}
            height={400}
            priority
          />
          <button className='font-small hover:text-md mt-5 rounded-full bg-green px-8 py-4 text-sm text-white transition-all hover:bg-dark-green hover:font-medium'>
            Inicio
          </button>
        </Link>
      </div>
    </div>
  )
}
