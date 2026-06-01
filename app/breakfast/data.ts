export interface BaseOption {
  id: string
  name: string
  description: string
  image: string
}

export interface Drink {
  name: string
  detail?: string
}

export interface Extra {
  name: string
  price: number
}

export const baseOptions: BaseOption[] = [
  {
    id: 'tostadas',
    name: 'Tostadas Artesanas',
    description: 'Pan de chapata o mollete integral con tomate natural',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80'
  },
  {
    id: 'croissant',
    name: 'Croissant a la Plancha',
    description: 'Acompañado de mantequilla y mermelada (o con chocolate)',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80'
  },
  {
    id: 'bollería',
    name: 'Bollería',
    description: 'Croissant de mantequilla, napolitana o croissant integral',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80'
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
  { name: 'Jamón Serrano', price: 1.50 },
  { name: 'Jamón de Pavo', price: 1.00 },
  { name: 'Jamón York', price: 1.00 },
  { name: 'Queso Feta', price: 1.90 },
  { name: 'Queso de Cabra', price: 2.10 },
  { name: 'Aguacate', price: 3.50 },
  { name: 'Atún', price: 2.00 }
]

export const extraImages: string[] = [
  'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400&q=80',
  'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=400&q=80',
]
