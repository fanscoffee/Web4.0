import { MetadataRoute } from "next";
import { promises as fs } from 'fs';
import path from 'path'

export default async function generateSitemaps(): Promise<MetadataRoute.Sitemap> {
    const pagesDir = path.join(process.cwd(), 'app');
    const files = await fs.readdir(pagesDir);
    const excludeFiles = ['layout.tsx','sitemap.tsx', 'components', 'favicon.ico', 'globals.css', 'not-found.tsx', 'page.tsx', 'pdfs'];

    const staticRoutes = files
      .filter((file) => !excludeFiles.includes(file))
      .map((file) => ({
        url: `https://www.fanscoffee.es/${file}`,
        lastModified: new Date().toISOString(),
      }));
  
    return [
      { url: 'https://www.fanscoffee.es/', lastModified: new Date().toISOString() },
      ...staticRoutes,
    ];
  }