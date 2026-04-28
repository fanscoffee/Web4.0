import { Product } from '@/components/ProductCatalog/types'

export const pastryProducts: Product[] = [
  {
    title: 'Croissant de Mantequilla',
    description:
      'Croissant francés artesanal con capas crujientes y sabor a mantequilla.',
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 1.5,
    category: 'Bollería'
  },
  {
    title: 'Tarta de Queso',
    description:
      'Cheesecake cremosa con base de galleta y mermelada de frutos rojos.',
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 4.5,
    category: 'Tartas'
  },
  {
    title: 'Brownie de Chocolate',
    description:
      'Brownie húmedo con trozos de nuez y corazón de chocolate fundido.',
    image:
      'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: true },
    price: 3.0,
    category: 'Chocolate'
  },
  {
    title: 'Tarta Red Velvet',
    description: 'Bizcocho de terciopelo rojo con frosting de queso crema.',
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 4.8,
    category: 'Tartas'
  },
  {
    title: 'Muffin de Arándanos',
    description: 'Muffin esponjoso con arándanos frescos y topping crujiente.',
    image:
      'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 2.8,
    category: 'Bollería'
  },
  {
    title: 'Palmera de Hojaldre',
    description: 'Hojaldre crujiente caramelizado. Dulzura simple y deliciosa.',
    image:
      'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: false, nuts: false },
    price: 1.2,
    category: 'Hojaldre'
  },
  {
    title: 'Macarron de Frambuesa',
    description:
      'Macarrón francés con relleno de frambuesa. Delicado y elegante.',
    image:
      'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&q=80',
    allergens: { gluten: true, lactose: false, egg: true, nuts: true },
    price: 2.2,
    category: 'Francés'
  },
  {
    title: 'Tarta de Zanahoria',
    description:
      'Bizcocho húmedo de zanahoria con nueces y frosting de queso crema.',
    image:
      'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: true },
    price: 4.2,
    category: 'Tartas'
  },
  {
    title: 'Cuerno de Chocolate',
    description: 'Hojaldre relleno de crema de chocolate belga. Irresistible.',
    image:
      'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 2.0,
    category: 'Hojaldre'
  },
  {
    title: 'Cookie de Avena',
    description:
      'Galleta artesanal con avena, pasas y canela. Crujiente por fuera, blanda por dentro.',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 1.8,
    category: 'Galletas'
  }
]
