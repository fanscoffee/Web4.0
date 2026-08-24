import { Product } from '@/components/ProductCatalog/types'

export const saltyToastProducts: Product[] = [
  {
    title: 'Tostada de Salmón',
    description: 'Queso crema, salmón y aguacate.',
    image: '/tostadas-especiales/tostada-salmon-aguacate.webp',
    allergens: { gluten: true, lactose: true, egg: false, nuts: false },
    price: 7.5,
    category: 'Premium'
  },
  {
    title: 'Tostada Tomate Seco',
    description: 'Queso crema, tomate deshidratado y aguacate.',
    image: '/tostadas-especiales/tostada-tomate_seco-aguacate.webp',
    images: [
      '/tostadas-especiales/tostada-tomate_seco-aguacate.webp',
      '/tostadas-especiales/tostada-tomate_seco-aguacate2.webp',
      '/tostadas-especiales/tostada-tomate_seco-aguacate3.webp'
    ],
    allergens: { gluten: true, lactose: true, egg: false, nuts: false },
    price: 5.7,
    category: 'Vegetariana'
  },
  {
    title: 'Tostada Huevo Duro',
    description: 'Huevo duro, guacamole y rúcula.',
    image: '/tostadas-especiales/tostada_huevo.webp',
    images: [
      '/tostadas-especiales/tostada-guacamole-rucula-huevo.webp',
      '/tostadas-especiales/tostada_huevo.webp',
      '/tostadas-especiales/tostada-guacamole-huevos-pesto-rucula.webp'
    ],
    allergens: { gluten: true, lactose: false, egg: true, nuts: false },
    price: 5.7,
    category: 'Proteína'
  },
  {
    title: 'Tostada Queso Mozzarella',
    description: 'Tomate cherry, rúcula, queso mozzarella y pesto.',
    image: '/tostadas-especiales/tostada_tomate_pesto.webp',
    images: [
      '/tostadas-especiales/tostada-tomate_cherry-pesto-burrata.webp',
      '/tostadas-especiales/tostada_tomate_pesto.webp',
      '/tostadas-especiales/tostada-tomate_cherry-burrata-rucula.webp'
    ],
    allergens: { gluten: true, lactose: true, egg: false, nuts: false },
    price: 5.7,
    category: 'Italiana'
  }
]

export const sweetToastProducts: Product[] = [
  {
    title: 'Tostada Nutella + Plátano',
    description: 'Nutella, plátano y nueces.',
    image: '/tostadas-especiales/tostada-nutella-banana-nueces.webp',
    images: [
      '/tostadas-especiales/tostada-nutella-banana-nueces.webp',
      '/tostadas-especiales/tostada-nueces-platano2.webp'
    ],
    allergens: { gluten: true, lactose: true, egg: false, nuts: true },
    price: 4.5,
    category: 'Dulce'
  },
  {
    title: 'Tostada Nutella + Frutos Rojos',
    description: 'Nutella, frutos rojos y nueces.',
    image: '/tostadas-especiales/tostada-nuetella-frutos_rojos.webp',
    images: [
      '/tostadas-especiales/tostada-nuetella-frutos_rojos.webp',
      '/tostadas-especiales/tostada-frutos-del-bosque-nutella.webp'
    ],
    allergens: { gluten: true, lactose: true, egg: false, nuts: true },
    price: 4.5,
    category: 'Dulce'
  }
]
