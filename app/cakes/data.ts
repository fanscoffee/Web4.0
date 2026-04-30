import { Product } from '@/components/ProductCatalog/types'

export const cakesProducts: Product[] = [
  {
    title: 'Tarta Selva Negra',
    description:
      'Bizcocho de chocolate con capas de nata y cerezas. Cubierta de chocolate negro y virutas.',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 28.0,
    category: 'Chocolate'
  },
  {
    title: 'Tarta Red Velvet',
    description:
      'Suave bizcocho rojo con frosting de queso crema. Decorada con migas de tarta y frutos rojos.',
    image:
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 26.0,
    category: 'Especial'
  },
  {
    title: 'Tarta de Queso',
    description:
      'Clásica tarta de queso al estilo vasco, cremosa por dentro y ligeramente caramelizada por fuera.',
    image:
      'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 24.0,
    category: 'Clásica'
  },
  {
    title: 'Tarta de Frutas',
    description:
      'Base de masa sablée rellena de crema pastelera y cubierta con frutas frescas de temporada.',
    image:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 22.0,
    category: 'Frutas'
  },
  {
    title: 'Tarta Tres Chocolates',
    description:
      'Elegante combinación de chocolate blanco, con leche y negro sobre base de galleta.',
    image:
      'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 30.0,
    category: 'Chocolate'
  },
  {
    title: 'Tarta de Almendra',
    description:
      'Bizcocho de almendra tierno con crema de avellanas y cobertura de chocolate.',
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80',
    allergens: { gluten: false, lactose: true, egg: true, nuts: true },
    price: 27.0,
    category: 'Sin Gluten'
  },
  {
    title: 'Tarta de Zanahoria',
    description:
      'Carrot cake con especias, nueces y frosting de queso crema. Humeda y aromática.',
    image:
      'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: true },
    price: 25.0,
    category: 'Especial'
  },
  {
    title: 'Tarta Limón y Merengue',
    description:
      'Base crujiente con curd de limón ácido y merengue italiano tostado. Refrescante y ligera.',
    image:
      'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 23.0,
    category: 'Cítricos'
  }
]
