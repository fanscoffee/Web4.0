import { Product } from '@/components/ProductCatalog/types'

export const coffeeProducts: Product[] = [
  {
    title: 'Espresso',
    description:
      'Café italiano intenso y aromático. La base de todas las bebidas de café.',
    image:
      'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&q=80',
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 1.2,
    category: 'Café'
  },
  {
    title: 'Americano',
    description:
      'Espresso alargado con agua caliente. Sabor suave pero con carácter.',
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 1.4,
    category: 'Café'
  },
  {
    title: 'Cappuccino',
    description:
      'Espresso con leche vaporizada y espuma cremosa. Clásico italiano.',
    image:
      'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80',
    allergens: { gluten: false, lactose: true, egg: false, nuts: false },
    price: 2.2,
    category: 'Café con Leche'
  },
  {
    title: 'Latte Macchiato',
    description: 'Leche caliente con capas de espresso. Visual y delicioso.',
    image:
      'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=800&q=80',
    allergens: { gluten: false, lactose: true, egg: false, nuts: false },
    price: 2.5,
    category: 'Café con Leche'
  },
  {
    title: 'Flat White',
    description: 'Doble espresso con microespuma. Más intenso que un latte.',
    image:
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80',
    allergens: { gluten: false, lactose: true, egg: false, nuts: false },
    price: 2.7,
    category: 'Café con Leche'
  },
  {
    title: 'Café Mocha',
    description: 'Espresso con chocolate, leche y crema batida. Para golosos.',
    image:
      'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=800&q=80',
    allergens: { gluten: false, lactose: true, egg: false, nuts: false },
    price: 3.0,
    category: 'Especial'
  },
  {
    title: 'Carajillo',
    description: 'Espresso con brandy o licor. Tradición española.',
    image:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 2.8,
    category: 'Con Licor'
  },
  {
    title: 'Café Turco',
    description:
      'Café molido muy fino hervido con azúcar. Sabor intenso y único.',
    image:
      'https://images.unsplash.com/photo-1518057111178-44a106bad636?w=800&q=80',
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 1.8,
    category: 'Especial'
  },
  {
    title: 'Affogato',
    description:
      'Espresso sobre bola de helado de vainilla. Postre y café en uno.',
    image:
      'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=800&q=80',
    allergens: { gluten: false, lactose: true, egg: true, nuts: false },
    price: 3.5,
    category: 'Postre'
  }
]
