import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Paleta de Colores | Fans Coffee Bakery',
  description:
    'Paleta de colores oficial de Fans Coffee Bakery. Referencia de diseño para mantener consistencia visual.',
  robots: {
    index: false,
    follow: false
  }
}

const colors = [
  {
    name: 'Green',
    class: 'bg-green',
    value: 'hsl(115, 35%, 43%)',
    usage: 'Botones primarios, enlaces, acentos',
    textColor: 'text-white'
  },
  {
    name: 'Dark Green',
    class: 'bg-dark-green',
    value: 'hsl(132, 38%, 18%)',
    usage: 'Hover states, fondos oscuros, footer',
    textColor: 'text-white'
  },
  {
    name: 'Light Yellow',
    class: 'bg-light-yellow',
    value: 'hsl(64, 73%, 67%)',
    usage: 'Acentos cálidos, badges secundarios',
    textColor: 'text-brown'
  },
  {
    name: 'Yellow',
    class: 'bg-yellow',
    value: 'hsl(63, 66%, 55%)',
    usage: 'Highlights, acentos de atención',
    textColor: 'text-brown'
  },
  {
    name: 'Brown',
    class: 'bg-brown',
    value: 'hsl(40, 87%, 15%)',
    usage: 'Texto principal, títulos, elementos oscuros',
    textColor: 'text-white'
  },
  {
    name: 'Beige',
    class: 'bg-beige',
    value: 'hsl(40, 33%, 84%)',
    usage: 'Fondos claros, secciones alternas, footer',
    textColor: 'text-brown'
  },
  {
    name: 'White',
    class: 'bg-white',
    value: '#FFFFFF',
    usage: 'Fondos de cards, contenedores, texto sobre oscuro',
    textColor: 'text-brown'
  },
  {
    name: 'Black',
    class: 'bg-black',
    value: '#000000',
    usage: 'Texto sobre claro, overlays',
    textColor: 'text-white'
  }
]

const grayScale = [
  { name: 'gray-50', value: '#f9fafb' },
  { name: 'gray-100', value: '#f3f4f6' },
  { name: 'gray-200', value: '#e5e7eb' },
  { name: 'gray-300', value: '#d1d5db' },
  { name: 'gray-400', value: '#9ca3af' },
  { name: 'gray-500', value: '#6b7280' },
  { name: 'gray-600', value: '#4b5563' },
  { name: 'gray-700', value: '#374151' },
  { name: 'gray-800', value: '#1f2937' },
  { name: 'gray-900', value: '#111827' }
]

export default function Palette() {
  return (
    <main className='min-h-screen bg-beige py-24'>
      <div className='container mx-auto max-w-4xl px-4'>
        <h1 className='mb-4 text-center text-3xl font-bold text-brown md:text-4xl'>
          Paleta de Colores
        </h1>
        <p className='mx-auto mb-12 max-w-2xl text-center text-gray-600'>
          Referencia oficial de colores para Fans Coffee Bakery. Solo se deben
          utilizar estos colores para mantener la consistencia visual del
          proyecto.
        </p>

        {/* Brand Colors */}
        <section className='mb-12'>
          <h2 className='mb-6 text-2xl font-bold text-brown'>
            Colores de Marca
          </h2>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {colors.map(color => (
              <div
                key={color.name}
                className='overflow-hidden rounded-lg bg-white shadow-md'
              >
                <div className={`h-24 ${color.class}`} />
                <div className='p-4'>
                  <h3 className='text-lg font-bold text-brown'>
                    {color.name}
                  </h3>
                  <p className='text-sm text-gray-500'>{color.value}</p>
                  <p className='mt-1 text-xs font-mono text-gray-600'>
                    {color.class}
                  </p>
                  <p className='mt-2 text-xs text-gray-500'>
                    {color.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gray Scale */}
        <section className='mb-12'>
          <h2 className='mb-6 text-2xl font-bold text-brown'>
            Escala de Grises (Tailwind)
          </h2>
          <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-5'>
            {grayScale.map(gray => (
              <div
                key={gray.name}
                className='overflow-hidden rounded-lg shadow-md'
              >
                <div
                  className='h-16'
                  style={{ backgroundColor: gray.value }}
                />
                <div className='bg-white p-3'>
                  <p className='text-sm font-bold text-brown'>{gray.name}</p>
                  <p className='text-xs text-gray-500'>{gray.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className='mb-12 rounded-lg bg-white p-6 shadow-md'>
          <h2 className='mb-4 text-2xl font-bold text-brown'>
            Guía de Uso
          </h2>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>
              <strong className='text-brown'>Green:</strong> Botones
              principales, enlaces, CTAs, iconos activos
            </li>
            <li>
              <strong className='text-brown'>Dark Green:</strong> Hover de
              botones, fondos de secciones, badges importantes
            </li>
            <li>
              <strong className='text-brown'>Brown:</strong> Títulos, texto
              principal, elementos de navegación
            </li>
            <li>
              <strong className='text-brown'>Beige:</strong> Fondos de
              secciones, footer, cards con fondo claro
            </li>
            <li>
              <strong className='text-brown'>Yellow/Light Yellow:</strong>
              Acentos secundarios, badges de precio, highlights
            </li>
            <li>
              <strong className='text-brown'>White:</strong> Fondos de cards,
              contenedores, texto sobre fondos oscuros
            </li>
            <li>
              <strong className='text-brown'>Gray scale:</strong> Texto
              secundario, bordes, placeholders, iconos inactivos
            </li>
          </ul>
        </section>

        {/* Back to Home */}
        <div className='text-center'>
          <Link
            href='/'
            className='inline-block rounded-full bg-green px-8 py-3 text-sm font-medium text-white transition-all hover:bg-dark-green'
          >
            Volver al inicio →
          </Link>
        </div>
      </div>
    </main>
  )
}
