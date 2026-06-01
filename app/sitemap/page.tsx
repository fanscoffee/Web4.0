import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mapa del Sitio | Fans Coffee Bakery',
  description:
    'Mapa del sitio de Fans Coffee Bakery. Encuentra todas nuestras páginas: cartas, contacto, sobre nosotros y más.',
  robots: {
    index: false,
    follow: false
  }
}

const sitePages: { href: string; label: string }[] = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Sobre Nosotros' },
  { href: '/breakfast', label: 'Desayunos' },
  { href: '/special-toast', label: 'Tostadas Especiales' },
  { href: '/special-drinks', label: 'Bebidas Especiales' },
  { href: '/cakes', label: 'Tartas Enteras' },
  { href: '/contact', label: 'Contacto' },
  { href: '/work', label: 'Trabaja con Nosotros' },
  { href: '/legal', label: 'Aviso Legal' },
  { href: '/privacy', label: 'Política de Privacidad' },
  { href: '/review', label: 'Déjanos tu Reseña' }
]

export default function SiteMapPage() {
  const baseUrl = 'https://www.fanscoffee.es'

  return (
    <main className='container mx-auto mt-28 max-w-[800px] p-6 md:mt-32'>
      <h1 className='mb-6 text-3xl font-bold'>Mapa del Sitio</h1>
      <ul className='list-disc space-y-2 pl-6'>
        {sitePages.map(page => (
          <li key={page.href}>
            <Link
              href={page.href}
              className='text-green hover:text-dark-green'
            >
              {page.label}
            </Link>
            <span className='ml-2 text-sm text-gray-500'>
              {baseUrl}{page.href}
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}
