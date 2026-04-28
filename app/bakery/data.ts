import { Product } from '@/components/ProductCatalog/types'

export const bakeryProducts: Product[] = [
  {
    title: 'Baguette Artesanal',
    description:
      'Pan francés tradicional con corteza crujiente y miga suave. Horneado diariamente.',
    image:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80',
    allergens: { gluten: true, lactose: false, egg: false, nuts: false },
    price: 1.8,
    category: 'Panadería'
  },
  {
    title: 'Pan de Centeno',
    description:
      'Pan denso y aromático elaborado con harina de centeno integral.',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    allergens: { gluten: true, lactose: false, egg: false, nuts: false },
    price: 2.2,
    category: 'Panadería'
  },
  {
    title: 'Ciabatta',
    description:
      'Pan italiano con alveolos grandes, ideal para bocadillos y tablas de quesos.',
    image:
      'https://images.unsplash.com/photo-1486887396153-fa416526c108?w=800&q=80',
    allergens: { gluten: true, lactose: false, egg: false, nuts: false },
    price: 2.5,
    category: 'Panadería'
  },
  {
    title: 'Pan de Masa Madre',
    description:
      'Fermentación lenta de 48 horas para un sabor intenso y textura única.',
    image:
      'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80',
    allergens: { gluten: true, lactose: false, egg: false, nuts: false },
    price: 3.2,
    category: 'Artesanal'
  },
  {
    title: 'Hogaza Integrale',
    description:
      'Pan integral de trigo completo, rico en fibra y minerales naturales.',
    image:
      'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=800&q=80',
    allergens: { gluten: true, lactose: false, egg: false, nuts: false },
    price: 2.4,
    category: 'Integral'
  },
  {
    title: 'Pan de Espelta',
    description:
      'Variedad antigua de trigo, más digestible y con sabor suave y dulce.',
    image:
      'https://images.unsplash.com/photo-1620921568790-c1cf8984624c?w=800&q=80',
    allergens: { gluten: true, lactose: false, egg: false, nuts: false },
    price: 2.8,
    category: 'Especial'
  },
  {
    title: 'Focaccia Italiana',
    description: 'Pan plano italiano con aceite de oliva, romero y sal gruesa.',
    image:
      'https://images.unsplash.com/photo-1568471173242-461f0a730452?w=800&q=80',
    allergens: { gluten: true, lactose: false, egg: false, nuts: false },
    price: 2.6,
    category: 'Italiana'
  },
  {
    title: 'Pan de Trigo Sarraceno',
    description:
      'Sin gluten, elaborado con harina de trigo sarraceno y semillas.',
    image:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80',
    allergens: { gluten: false, lactose: false, egg: false, nuts: true },
    price: 3.5,
    category: 'Sin Gluten'
  }
]
