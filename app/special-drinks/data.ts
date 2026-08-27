import { Product } from '@/components/ProductCatalog/types'

const smoothieRepresentativeImage = '/bebidas-especiales/smoothies.webp'
const frappeRepresentativeImage = '/bebidas-especiales/frappes.webp'

export const smoothieProducts: Product[] = [
  {
    title: 'Regulador',
    description: 'Fresa y piña',
    image: smoothieRepresentativeImage,
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 4.70,
    category: 'Smoothie'
  },
  {
    title: 'Vitaminado',
    description: 'Fresa y mango',
    image: smoothieRepresentativeImage,
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 4.70,
    category: 'Smoothie'
  },
  {
    title: 'Regulador +',
    description: 'Plátano, coco y piña',
    image: smoothieRepresentativeImage,
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 4.70,
    category: 'Smoothie'
  },
  {
    title: 'Energizante',
    description: 'Plátano, arándanos y açaí',
    image: smoothieRepresentativeImage,
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 4.70,
    category: 'Smoothie'
  },
  {
    title: 'Digestivo',
    description: 'Semillas de chía, mango, fresa y sandía',
    image: smoothieRepresentativeImage,
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 4.70,
    category: 'Smoothie'
  },
  {
    title: 'Nutritivo',
    description: 'Mango, zanahoria, piña y maracuyá',
    image: smoothieRepresentativeImage,
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 4.70,
    category: 'Smoothie'
  },
  {
    title: 'Energético',
    description: 'Plátano y fresa',
    image: smoothieRepresentativeImage,
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 4.70,
    category: 'Smoothie'
  },
  {
    title: 'Regenerador',
    description: 'Mango, melón, kiwi y piña',
    image: smoothieRepresentativeImage,
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 4.70,
    category: 'Smoothie'
  },
  {
    title: 'Energético +',
    description: 'Plátano, grosella, arándano y cereza',
    image: smoothieRepresentativeImage,
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 4.70,
    category: 'Smoothie'
  },
  {
    title: 'Antioxidante',
    description: 'Mango, piña y papaya',
    image: smoothieRepresentativeImage,
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 4.70,
    category: 'Smoothie'
  },
  {
    title: 'Mango',
    description: 'Sabor puro de mango',
    image: smoothieRepresentativeImage,
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 4.70,
    category: 'Smoothie'
  },
  {
    title: 'Fresa',
    description: 'Sabor puro de fresa',
    image: smoothieRepresentativeImage,
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 4.70,
    category: 'Smoothie'
  }
]

export const chaiMatchaProducts: Product[] = [
  {
    title: 'Chai latte',
    description: 'Té chai especiado con leche y espuma cremosa',
    image: '/bebidas-especiales/chai-caliente.webp',
    images: [
      '/bebidas-especiales/chai-caliente.webp',
      '/bebidas-especiales/chai-frio.webp'
    ],
    allergens: { gluten: false, lactose: true, egg: false, nuts: false },
    price: 4.70,
    category: 'Chai y Matcha'
  },
  {
    title: 'Matcha latte',
    description: 'Matcha suave con leche y espuma ligera',
    image: '/bebidas-especiales/matcha-caliente.webp',
    images: [
      '/bebidas-especiales/matcha-caliente.webp',
      '/bebidas-especiales/matcha-frio.webp'
    ],
    allergens: { gluten: false, lactose: true, egg: false, nuts: false },
    price: 4.70,
    category: 'Chai y Matcha'
  }
]

export const frappeProducts: Product[] = [
  {
    title: 'Galletas & Canela',
    description: 'Frappé cremoso con sabor a galletas y un toque de canela',
    image: frappeRepresentativeImage,
    allergens: { gluten: true, lactose: true, egg: false, nuts: false },
    price: 4.70,
    category: 'Frappé'
  },
  {
    title: 'Vainilla',
    description: 'Frappé clásico de vainilla suave y cremoso',
    image: frappeRepresentativeImage,
    allergens: { gluten: false, lactose: true, egg: false, nuts: false },
    price: 4.70,
    category: 'Frappé'
  },
  {
    title: 'Café',
    description: 'Frappé intenso de café con hielo y leche',
    image: frappeRepresentativeImage,
    allergens: { gluten: false, lactose: true, egg: false, nuts: false },
    price: 4.70,
    category: 'Frappé'
  },
  {
    title: 'Oreo',
    description: 'Frappé con trozos de galleta Oreo y crema',
    image: frappeRepresentativeImage,
    allergens: { gluten: true, lactose: true, egg: false, nuts: false },
    price: 4.70,
    category: 'Frappé'
  },
  {
    title: 'Caramelo',
    description: 'Frappé dulce con salsa de caramelo y nata montada',
    image: frappeRepresentativeImage,
    allergens: { gluten: false, lactose: true, egg: false, nuts: false },
    price: 4.70,
    category: 'Frappé'
  },
  {
    title: 'Nutella',
    description: 'Frappé de chocolate y avellanas con Nutella',
    image: frappeRepresentativeImage,
    allergens: { gluten: false, lactose: true, egg: false, nuts: true },
    price: 4.70,
    category: 'Frappé'
  }
]
