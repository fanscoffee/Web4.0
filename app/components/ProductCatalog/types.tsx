export interface ProductAllergens {
  gluten: boolean
  lactose: boolean
  egg: boolean
  nuts: boolean
}

export interface Product {
  title: string
  description: string
  image: string
  allergens: ProductAllergens
  price: number
  category: string
}

export const ALLERGEN_LABELS: Record<keyof ProductAllergens, string> = {
  gluten: 'Gluten',
  lactose: 'Lactosa',
  egg: 'Huevo',
  nuts: 'Frutos secos'
}

export const ALLERGEN_ICONS: Record<keyof ProductAllergens, JSX.Element> = {
  gluten: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h1c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
    </svg>
  ),
  lactose: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    </svg>
  ),
  egg: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 3C9.5 3 7.5 5.5 7.5 8.5c0 1.8.9 3.5 2.5 4.5v7c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-7c1.6-1 2.5-2.7 2.5-4.5C16.5 5.5 14.5 3 12 3z"/>
    </svg>
  ),
  nuts: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.5.7 2.8 1.8 3.7L8 11.5c-.6.3-1 1-1 1.7V15c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-1.8c0-.7-.4-1.4-1-1.7l-1.3-1.3c1.1-.9 1.8-2.2 1.8-3.7C16.5 4 14.5 2 12 2z"/>
    </svg>
  )
}
