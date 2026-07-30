import { Product } from '@/components/ProductCatalog/types'

export const cakesProducts: Product[] = [
  {
    title: 'Tarta Kinder',
    description:
      'Bizcocho de chocolate con crema de avellana y cobertura de chocolate con leche.',
    image:
      '/tartas-enteras/kinder_bueno.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: true },
    price: 40.0,
    category: 'Chocolate'
  },
  {
    title: 'Tarta Sacher',
    description:
      'Clásica tarta austríaca de chocolate con mermelada de albaricoque y glaseado oscuro.',
    image:
      '/tartas-enteras/Tarta_sacher.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 40.0,
    category: 'Chocolate'
  },
  {
    title: 'Tarta Lotus',
    description:
      'Bizcocho con crema de galleta Lotus y cobertura crujiente de caramelizada.',
    image:
      '/tartas-enteras/Tarta_Lotus.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 40.0,
    category: 'Especial'
  },
  {
    title: 'Tarta Selva Negra',
    description:
      'Bizcocho de chocolate con capas de nata y cerezas. Cubierta de chocolate negro y virutas.',
    image:
      '/tartas-enteras/Tarta_chocolate.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 40.0,
    category: 'Chocolate'
  },
  {
    title: 'Tarta Red Velvet',
    description:
      'Suave bizcocho rojo con frosting de queso crema. Decorada con migas de tarta y frutos rojos.',
    image:
      '/tartas-enteras/Tarta_red_velvet.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 40.0,
    category: 'Especial'
  },
  {
    title: 'Tarta Chocolate',
    description:
      'Intenso bizcocho de chocolate negro con ganache y decoración artesanal.',
    image:
      '/tartas-enteras/Tarta_de_chocolate.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 40.0,
    category: 'Chocolate'
  },
  {
    title: 'Tarta de Piña',
    description:
      'Bizcocho esponjoso con crema de piña natural y cobertura tropical.',
    image:
      '/tartas-enteras/Tarta_de_piña.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 35.0,
    category: 'Frutas'
  },
  {
    title: 'Pequeña Lotus',
    description:
      'Porción individual con crema de galleta Lotus y base crujiente.',
    image:
      '/tartas-enteras/Tarta_lotus.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 28.0,
    category: 'Especial'
  },
  {
    title: 'Pequeña Kinder',
    description:
      'Porción individual con crema de avellana y cobertura de chocolate con leche.',
    image:
      '/tartas-enteras/kinder_bueno.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: true },
    price: 28.0,
    category: 'Chocolate'
  },
  {
    title: 'Pie Limón S',
    description:
      'Base crujiente con curd de limón ácido y merengue italiano tostado.',
    image:
      '/tartas-enteras/Pie_de_limón.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 12.0,
    category: 'Cítricos'
  },
  {
    title: 'Pie Limón L',
    description:
      'Base crujiente con curd de limón ácido y merengue italiano tostado. Refrescante y ligera.',
    image:
      '/tartas-enteras/Pie_de_limón.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 30.0,
    category: 'Cítricos'
  },
  {
    title: 'Quesillo',
    description:
      'Flan cremoso de queso con caramelo casero. Textura suave y sedosa.',
    image:
      '/tartas-enteras/Quesillo.webp',
    allergens: { gluten: false, lactose: true, egg: true, nuts: false },
    price: 35.0,
    category: 'Clásica'
  },
  {
    title: 'Tarta de Queso L',
    description:
      'Clásica tarta de queso al estilo vasco, cremosa por dentro y ligeramente caramelizada por fuera.',
    image:
      '/tartas-enteras/Tarta_de_queso.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 40.0,
    category: 'Clásica'
  },
  {
    title: 'Tarta de Queso M',
    description:
      'Clásica tarta de queso al estilo vasco, cremosa por dentro y ligeramente caramelizada por fuera.',
    image:
      '/tartas-enteras/Tarta_de_queso.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 28.0,
    category: 'Clásica'
  },
  {
    title: 'Tarta de Queso S',
    description:
      'Clásica tarta de queso al estilo vasco, cremosa por dentro y ligeramente caramelizada por fuera.',
    image:
      '/tartas-enteras/Tarta_de_queso.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 15.0,
    category: 'Clásica'
  },
  {
    title: 'Tarta Tres Leches L',
    description:
      'Bizcocho esponjoso bañado con leche condensada, evaporada y nata.',
    image:
      '/tartas-enteras/tresleches_G.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 47.0,
    category: 'Leche'
  },
  {
    title: 'Tarta Tres Leches M',
    description:
      'Bizcocho esponjoso bañado con leche condensada, evaporada y nata.',
    image:
      '/tartas-enteras/tres_leches_M.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 35.0,
    category: 'Leche'
  },
  {
    title: 'Tarta Tres Leches S',
    description:
      'Bizcocho esponjoso bañado con leche condensada, evaporada y nata.',
    image:
      '/tartas-enteras/tres_leches_P.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 15.0,
    category: 'Leche'
  },
  {
    title: 'Tarta Zanahoria L',
    description:
      'Carrot cake con especias, nueces y frosting de queso crema.',
    image:
      '/tartas-enteras/Tarta_zanahoria.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: true },
    price: 40.0,
    category: 'Especial'
  },
  {
    title: 'Tarta Zanahoria S',
    description:
      'Carrot cake con especias, nueces y frosting de queso crema.',
    image:
      '/tartas-enteras/Tarta_zanahoria.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: true },
    price: 28.0,
    category: 'Especial'
  },
  {
    title: 'Pie Maracuyá S',
    description:
      'Base crujiente con crema de maracuyá tropical y merengue tostado.',
    image:
      '/tartas-enteras/Pie_maracuyá.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 12.0,
    category: 'Cítricos'
  },
  {
    title: 'Pie Maracuyá L',
    description:
      'Base crujiente con crema de maracuyá tropical y merengue tostado. Refrescante y aromática.',
    image:
      '/tartas-enteras/Pie_maracuyá.webp',
    allergens: { gluten: true, lactose: true, egg: true, nuts: false },
    price: 30.0,
    category: 'Cítricos'
  }
]
