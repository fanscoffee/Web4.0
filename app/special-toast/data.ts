import { Product } from '@/components/ProductCatalog/types'

export const toastProducts: Product[] = [
  {
    title: 'Tostada de Jamón Serrano',
    description:
      'Pan de pueblo tostado con tomate rallado, aceite de oliva virgen extra y finas lonchas de jamón serrano curado.',
    image:
      'https://images.pexels.com/photos/6004791/pexels-photo-6004791.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: { gluten: true, lactose: false, egg: false, nuts: false },
    price: 4.5,
    category: 'Clásica'
  },
  {
    title: 'Tostada de Salmón',
    description:
      'Pan de centeno con salmón ahumado, queso crema untuoso, alcaparras y un toque de eneldo fresco.',
    image:
      'https://images.pexels.com/photos/3838628/pexels-photo-3838628.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: { gluten: true, lactose: true, egg: false, nuts: false },
    price: 5.5,
    category: 'Premium'
  },
  {
    title: 'Tostada de Tomate Seco',
    description:
      'Pan rústico tostado con tomates secos marinados en aceite de oliva, ajo confitado y albahaca fresca.',
    image:
      'https://images.pexels.com/photos/5273696/pexels-photo-5273696.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: { gluten: true, lactose: false, egg: false, nuts: false },
    price: 3.5,
    category: 'Vegetariana'
  },
  {
    title: 'Tostada de Huevo Duro',
    description:
      'Pan tostado con huevo duro picado, mayonesa casera, cebollino fresco y un toque de pimentón.',
    image:
      'https://images.pexels.com/photos/806457/pexels-photo-806457.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: { gluten: true, lactose: false, egg: true, nuts: false },
    price: 3.0,
    category: 'Proteína'
  },
  {
    title: 'Tostada de Queso Mozzarella',
    description:
      'Pan ciabatta tostado con mozzarella fundida, rodajas de tomate fresco, rúcula y reducción de balsámico.',
    image:
      'https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: { gluten: true, lactose: true, egg: false, nuts: false },
    price: 4.0,
    category: 'Italiana'
  }
]
