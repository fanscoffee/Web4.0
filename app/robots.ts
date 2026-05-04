import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/review', '/sitemap']
    },
    sitemap: 'https://www.fanscoffee.es/sitemap.xml'
  }
}
