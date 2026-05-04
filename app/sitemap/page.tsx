import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
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

export default async function SiteMapPage() {
  const baseUrl = 'https://www.fanscoffee.es'
  const appDir = path.join(process.cwd(), 'app')
  const excludeFiles = [
    'layout.tsx',
    'sitemap.tsx',
    'components',
    'favicon.ico',
    'globals.css',
    'not-found.tsx',
    'page.tsx',
    'pdfs'
  ]

  const entries = await fs.promises.readdir(appDir, { withFileTypes: true })

  const pages = entries
    .filter(entry => entry.isDirectory() || entry.name.endsWith('page.tsx'))
    .map(entry => entry.name.replace('/page.tsx', ''))
    .filter(route => !excludeFiles.includes(route))

  return (
    <main className='container mx-auto mt-28 max-w-[800px] p-6 md:mt-32'>
      <h1 className='mb-4 text-3xl font-bold'>Mapa del Sitio</h1>
      <ul className='list-disc pl-6'>
        {pages.map(page => (
          <li key={page}>
            <Link
              href={`/${page === 'home' ? '' : page}`}
              className='text-blue-600 hover:underline'
            >
              {baseUrl}/{page}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
