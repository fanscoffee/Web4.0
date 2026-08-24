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
    name: 'Burgundy',
    class: 'bg-brand-burgundy',
    value: '#5B1D2D',
    usage: 'Fondos principales, navegación, paneles',
    textColor: 'text-brand-cream'
  },
  {
    name: 'Cream',
    class: 'bg-brand-cream',
    value: '#FFEFCC',
    usage: 'Canvas principal y fondos cálidos',
    textColor: 'text-brand-burgundy'
  },
  {
    name: 'Pink',
    class: 'bg-brand-pink',
    value: '#E7A4BE',
    usage: 'Titulares display, secciones dulces, acentos',
    textColor: 'text-brand-burgundy'
  },
  {
    name: 'Olive',
    class: 'bg-brand-olive',
    value: '#57591D',
    usage: 'Títulos, llamadas a la acción, estados activos',
    textColor: 'text-brand-cream'
  },
  {
    name: 'Gold',
    class: 'bg-brand-gold',
    value: '#F4D33A',
    usage: 'Estrellas, detalles y highlights',
    textColor: 'text-brand-burgundy'
  },
  {
    name: 'Paper',
    class: 'bg-brand-paper',
    value: '#FFF8E8',
    usage: 'Superficies, formularios y tarjetas',
    textColor: 'text-brand-burgundy'
  },
  {
    name: 'Muted',
    class: 'bg-brand-muted',
    value: '#74524F',
    usage: 'Texto secundario y metadatos',
    textColor: 'text-brand-cream'
  },
  {
    name: 'Error',
    class: 'bg-brand-error',
    value: '#97364A',
    usage: 'Errores y estados de atención',
    textColor: 'text-brand-cream'
  }
]

const grayScale = [
  { name: 'gray-50', value: '#fffaf1' },
  { name: 'gray-100', value: '#fbf4e4' },
  { name: 'gray-200', value: '#f1e3cf' },
  { name: 'gray-300', value: '#decab2' },
  { name: 'gray-400', value: '#b19487' },
  { name: 'gray-500', value: '#84655e' },
  { name: 'gray-600', value: '#6c4e4a' },
  { name: 'gray-700', value: '#523436' },
  { name: 'gray-800', value: '#3a2228' },
  { name: 'gray-900', value: '#2a171e' }
]

export default function Palette() {
  return (
    <main className='brand-page py-28'>
      <div className='brand-container'>
        <p className='brand-eyebrow text-center'>Sistema de diseño</p>
        <h1 className='mt-4 text-center text-5xl leading-none text-brand-burgundy md:text-7xl'>
          Paleta de Colores
        </h1>
        <p className='mx-auto mb-12 max-w-2xl text-center text-brand-burgundy/70'>
          Referencia oficial de colores para Fans Coffee Bakery. Solo se deben
          utilizar estos colores para mantener la consistencia visual del
          proyecto.
        </p>

        {/* Brand Colors */}
        <section className='mb-12'>
          <h2 className='mb-6 text-4xl leading-none text-brand-olive'>
            Colores de Marca
          </h2>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {colors.map(color => (
              <div
                key={color.name}
                className='overflow-hidden rounded-brand border-2 border-brand-burgundy/10 bg-brand-paper shadow-brand-soft'
              >
                <div className={`h-24 ${color.class}`} />
                <div className='p-4'>
                  <h3 className='text-2xl text-brand-burgundy'>{color.name}</h3>
                  <p className='text-sm text-brand-muted'>{color.value}</p>
                  <p className='mt-1 font-mono text-xs text-brand-muted'>
                    {color.class}
                  </p>
                  <p className='mt-2 text-xs text-brand-muted'>{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gray Scale */}
        <section className='mb-12'>
          <h2 className='mb-6 text-4xl leading-none text-brand-olive'>
            Escala de Grises (Tailwind)
          </h2>
          <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-5'>
            {grayScale.map(gray => (
              <div
                key={gray.name}
                className='overflow-hidden rounded-brand border-2 border-brand-burgundy/10 shadow-brand-soft'
              >
                <div className='h-16' style={{ backgroundColor: gray.value }} />
                <div className='bg-brand-paper p-3'>
                  <p className='text-sm font-bold text-brand-burgundy'>
                    {gray.name}
                  </p>
                  <p className='text-xs text-brand-muted'>{gray.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className='brand-panel mb-12 p-6 sm:p-8'>
          <h2 className='mb-4 text-4xl leading-none text-brand-olive'>
            Guía de Uso
          </h2>
          <ul className='space-y-2 text-sm leading-6 text-brand-burgundy/75'>
            <li>
              <strong className='text-brand-burgundy'>Olive:</strong> Botones
              principales, enlaces, CTAs, iconos activos
            </li>
            <li>
              <strong className='text-brand-burgundy'>Burgundy:</strong> Hover
              de botones, fondos de secciones, badges importantes
            </li>
            <li>
              <strong className='text-brand-burgundy'>Burgundy:</strong>{' '}
              Títulos, texto principal, elementos de navegación
            </li>
            <li>
              <strong className='text-brand-burgundy'>Cream:</strong> Fondos de
              secciones, footer, cards con fondo claro
            </li>
            <li>
              <strong className='text-brand-burgundy'>Pink/Gold:</strong>
              Acentos secundarios, badges de precio, highlights
            </li>
            <li>
              <strong className='text-brand-burgundy'>Paper:</strong> Fondos de
              cards, contenedores, texto sobre fondos oscuros
            </li>
            <li>
              <strong className='text-brand-burgundy'>Warm neutrals:</strong>{' '}
              Texto secundario, bordes, placeholders, iconos inactivos
            </li>
          </ul>
        </section>

        {/* Back to Home */}
        <div className='text-center'>
          <Link href='/' className='brand-button'>
            Volver al inicio →
          </Link>
        </div>
      </div>
    </main>
  )
}
