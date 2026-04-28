import { Product } from './types'

export const sampleProducts: Product[] = [
  {
    title: 'Butter Croissant',
    description:
      'Classic French croissant with a flaky texture and delicious buttery flavor.',
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: false, nuts: false },
    price: 1.5,
    category: 'Pastries'
  },
  {
    title: 'Espresso Coffee',
    description: 'An intense and aromatic coffee made with selected beans.',
    image:
      'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&q=80',
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 1.2,
    category: 'Beverages'
  },
  {
    title: 'Cheesecake',
    description: 'Creamy cheesecake with a biscuit base and a hint of vanilla.',
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 3.8,
    category: 'Bakery'
  },
  {
    title: 'Artisan Baguette',
    description: 'Rustic bread with a crunchy crust and soft crumb.',
    image:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80',
    allergens: { gluten: true, lactose: false, egg: false, nuts: false },
    price: 1.8,
    category: 'Bakery'
  },
  {
    title: 'Latte Macchiato',
    description: 'Coffee with steamed milk and a delicate layer of foam.',
    image:
      'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=800&q=80',
    allergens: { gluten: false, lactose: true, egg: false, nuts: false },
    price: 2.5,
    category: 'Beverages'
  },
  {
    title: 'Chocolate Brownie',
    description: 'Delicious brownie with a moist interior and walnut pieces.',
    image:
      'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: true },
    price: 3.0,
    category: 'Bakery'
  },
  {
    title: 'Toast with Tomato',
    description:
      'Rustic toasted bread with grated tomato and a touch of extra virgin olive oil.',
    image:
      'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800&q=80',
    allergens: { gluten: true, lactose: false, egg: false, nuts: false },
    price: 2.0,
    category: 'Breakfast'
  },
  {
    title: 'Blueberry Muffin',
    description: 'Fluffy muffin with fresh blueberries and a hint of vanilla.',
    image:
      'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 2.8,
    category: 'Pastries'
  },
  {
    title: 'Green Tea',
    description:
      'Green tea infusion with fresh notes and natural antioxidants.',
    image:
      'https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&q=80',
    allergens: { gluten: false, lactose: false, egg: false, nuts: false },
    price: 1.5,
    category: 'Beverages'
  },
  {
    title: 'Almond Cookies',
    description:
      'Crunchy cookies made with ground almonds and a touch of honey.',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80',
    allergens: { gluten: true, lactose: false, egg: false, nuts: true },
    price: 2.2,
    category: 'Sweets'
  }
]
