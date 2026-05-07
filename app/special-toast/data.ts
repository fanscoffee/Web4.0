import { Product } from '@/components/ProductCatalog/types'

export const saltyToastProducts: Product[] = [
  {
    title: 'Tostada de Jamón Serrano',
    description: 'Tomate, aceite y jamón serrano.',
    image:
      'https://images.pexels.com/photos/6004791/pexels-photo-6004791.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: { gluten: true, lactose: false, egg: false, nuts: false },
    price: 4.30,
    category: 'Clásica'
  },
  {
    title: 'Tostada de Salmón',
    description: 'Queso crema, salmón y aguacate.',
    image:
      'https://images.pexels.com/photos/3838628/pexels-photo-3838628.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: { gluten: true, lactose: true, egg: false, nuts: false },
    price: 7.50,
    category: 'Premium'
  },
  {
    title: 'Tostada Tomate Seco',
    description: 'Queso crema, tomate deshidratado y aguacate.',
    image:
      'https://images.pexels.com/photos/5273696/pexels-photo-5273696.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: { gluten: true, lactose: true, egg: false, nuts: false },
    price: 5.70,
    category: 'Vegetariana'
  },
  {
    title: 'Tostada Huevo Duro',
    description: 'Huevo duro, guacamole y rúcula.',
    image:
      'https://images.pexels.com/photos/806457/pexels-photo-806457.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: { gluten: true, lactose: false, egg: true, nuts: false },
    price: 5.70,
    category: 'Proteína'
  },
  {
    title: 'Tostada Queso Mozzarella',
    description: 'Tomate cherry, rúcula, queso mozzarella y pesto.',
    image:
      'https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: { gluten: true, lactose: true, egg: false, nuts: false },
    price: 5.70,
    category: 'Italiana'
  }
]

export const sweetToastProducts: Product[] = [
  {
    title: 'Tostada Mantequilla de Cacahuete',
    description: 'Mantequilla de cacahuetes, plátano y nueces.',
    image:
      'https://images.pexels.com/photos/5946071/pexels-photo-5946071.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: { gluten: true, lactose: false, egg: false, nuts: true },
    price: 4.50,
    category: 'Dulce'
  },
  {
    title: 'Tostada Nutella + Plátano',
    description: 'Nutella, plátano y nueces.',
    image:
      'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: { gluten: true, lactose: true, egg: false, nuts: true },
    price: 4.50,
    category: 'Dulce'
  },
  {
    title: 'Tostada Nutella + Frutos Rojos',
    description: 'Nutella, frutos rojos y nueces.',
    image:
      'https://images.pexels.com/photos/1470161/pexels-photo-1470161.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: { gluten: true, lactose: true, egg: false, nuts: true },
    price: 4.50,
    category: 'Dulce'
  }
]
