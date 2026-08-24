export interface BaseOption {
  id: string
  name: string
  description: string
  image: string
  kind: 'photo' | 'cutout'
  category: 'toast' | 'bakery'
  allowsExtras: boolean
}

export interface Drink {
  name: string
  detail?: string
}

export interface Extra {
  name: string
  price: number
}

export interface GalleryImage {
  src: string
  title: string
  description: string
  alt: string
}

export type DrinkCategory = 'normal' | 'special'

export const breakfastPrices = {
  toast: {
    normal: 3.3,
    special: 3.5
  },
  bakery: {
    normal: 2.9,
    special: 3.1
  }
} as const

export const breakfastHero = {
  src: '/desayuno/croissant-fondo.webp',
  alt: 'Croissant recién horneado servido sobre una mesa de madera'
}

export const baseOptions: BaseOption[] = [
  {
    id: 'tostada-normal',
    name: 'Tostada de pan normal',
    description: 'Pan tostado con tomate natural para empezar con lo clásico',
    image: '/desayuno/desayuno-pan-normal.webp',
    kind: 'photo',
    category: 'toast',
    allowsExtras: true
  },
  {
    id: 'tostada-integral',
    name: 'Tostada integral',
    description: 'Pan integral con semillas, tomate natural y mucho sabor',
    image: '/desayuno/desayuno-pan-integral.webp',
    kind: 'photo',
    category: 'toast',
    allowsExtras: true
  },
  {
    id: 'croissant-mermelada',
    name: 'Croissant con mermelada',
    description: 'Croissant dorado servido con mermelada para untar',
    image: '/desayuno/croissant-mermelada.webp',
    kind: 'photo',
    category: 'toast',
    allowsExtras: false
  },
  {
    id: 'croissant',
    name: 'Croissant a la plancha',
    description:
      'Hojaldre de mantequilla, dorado y listo para acompañar tu café',
    image: '/desayuno/croissant.webp',
    kind: 'cutout',
    category: 'bakery',
    allowsExtras: false
  },
  {
    id: 'croissant-semillas',
    name: 'Croissant de semillas',
    description: 'Una versión crujiente con mezcla de semillas por encima',
    image: '/desayuno/croissant-semillas.webp',
    kind: 'cutout',
    category: 'bakery',
    allowsExtras: false
  },
  {
    id: 'napolitana-chocolate',
    name: 'Napolitana de chocolate',
    description: 'Hojaldre dorado con un centro de chocolate',
    image: '/desayuno/napolitana-chocolate.webp',
    kind: 'cutout',
    category: 'bakery',
    allowsExtras: false
  },
  {
    id: 'napolitana-crema',
    name: 'Napolitana de crema',
    description: 'Capas de hojaldre rellenas de crema suave',
    image: '/desayuno/napolitana-crema.webp',
    kind: 'cutout',
    category: 'bakery',
    allowsExtras: false
  }
]

export const normalDrinks: Drink[] = [
  { name: 'Té', detail: 'Rojo, verde o negro' },
  { name: 'Infusión', detail: 'Poleo menta, manzanilla o tila' },
  { name: 'Café con leche mediano' },
  { name: 'Cortado' },
  { name: 'Espresso' },
  { name: 'Colacao' },
  { name: 'Vaso con leche' }
]

export const specialDrinks: Drink[] = [
  { name: 'Té de la carta' },
  { name: 'Café con leche grande (Latte XL)' },
  { name: 'Cortado, Expreso o Americano doble' },
  { name: 'Té con leche' },
  { name: 'Bombón' },
  { name: 'Cappuccino' }
]

export const extras: Extra[] = [
  { name: 'Jamón Serrano', price: 2.0 },
  { name: 'Jamón de Pavo', price: 1.5 },
  { name: 'Jamón York', price: 1.5 },
  { name: 'Queso Feta', price: 1.9 },
  { name: 'Aguacate', price: 2.0 },
  { name: 'Atún', price: 2.0 }
]

export const galleryImages: GalleryImage[] = [
  {
    src: '/desayuno/croissant-semillas-fondo.webp',
    title: 'Croissant de semillas',
    description: 'Crujiente, dorado y recién salido del horno.',
    alt: 'Croissant de semillas servido en un plato sobre una mesa de madera'
  },
  {
    src: '/desayuno/napolitana-chocolate-fondo.webp',
    title: 'Napolitana de chocolate',
    description: 'Capas de hojaldre para los más chocolateros.',
    alt: 'Napolitana de chocolate servida en un plato sobre una mesa de madera'
  },
  {
    src: '/desayuno/napolitana-crema-fondo.webp',
    title: 'Napolitana de crema',
    description: 'El bocado suave que pide otro sorbo de café.',
    alt: 'Napolitana de crema servida en un plato sobre una mesa de madera'
  }
]
