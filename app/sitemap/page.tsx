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
    <main className='brand-page'>
      <div className='brand-prose'>
        <p className='brand-eyebrow'>Explora FANS</p>
        <h1>Mapa del Sitio</h1>
        <ul className='brand-panel list-disc space-y-3 p-6 pl-10'>
          {sitePages.map(page => (
            <li key={page.href}>
              <Link
                href={page.href}
                className='font-bold text-brand-olive underline decoration-brand-pink decoration-2 underline-offset-4'
              >
                {page.label}
              </Link>
              <span className='ml-2 text-sm text-brand-muted'>
                {baseUrl}
                {page.href}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
