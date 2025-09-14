import Building from '@/components/Building'
import ProductCatalog from '@/components/ProductCatalog'

const productData = [
  {
    title: 'Butter Croissant',
    description:
      'Classic French croissant with a flaky texture and delicious buttery flavor.',
    image:
      'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: {
      gluten: true,
      lactose: true,
      egg: false,
      nuts: false
    },
    price: 1.5,
    category: 'Pastries'
  },
  {
    title: 'Espresso Coffee',
    description: 'An intense and aromatic coffee made with selected beans.',
    image:
      'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: {
      gluten: false,
      lactose: false,
      egg: false,
      nuts: false
    },
    price: 1.2,
    category: 'Beverages'
  },
  {
    title: 'Cheesecake',
    description: 'Creamy cheesecake with a biscuit base and a hint of vanilla.',
    image:
      'https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: {
      gluten: true,
      lactose: true,
      egg: true,
      nuts: false
    },
    price: 3.8,
    category: 'Bakery'
  },
  {
    title: 'Artisan Baguette',
    description: 'Rustic bread with a crunchy crust and soft crumb.',
    image:
      'https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: {
      gluten: true,
      lactose: false,
      egg: false,
      nuts: false
    },
    price: 1.8,
    category: 'Bakery'
  },
  {
    title: 'Latte Macchiato',
    description: 'Coffee with steamed milk and a delicate layer of foam.',
    image:
      'https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: {
      gluten: false,
      lactose: true,
      egg: false,
      nuts: false
    },
    price: 2.5,
    category: 'Beverages'
  },
  {
    title: 'Chocolate Brownie',
    description: 'Delicious brownie with a moist interior and walnut pieces.',
    image:
      'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: {
      gluten: true,
      lactose: true,
      egg: true,
      nuts: true
    },
    price: 3.0,
    category: 'Bakery'
  },
  {
    title: 'Toast with Tomato',
    description:
      'Rustic toasted bread with grated tomato and a touch of extra virgin olive oil.',
    image:
      'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: {
      gluten: true,
      lactose: false,
      egg: false,
      nuts: false
    },
    price: 2.0,
    category: 'Breakfast'
  },
  {
    title: 'Blueberry Muffin',
    description: 'Fluffy muffin with fresh blueberries and a hint of vanilla.',
    image:
      'https://images.pexels.com/photos/4686819/pexels-photo-4686819.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: {
      gluten: true,
      lactose: true,
      egg: true,
      nuts: false
    },
    price: 2.8,
    category: 'Pastries'
  },
  {
    title: 'Green Tea',
    description:
      'Green tea infusion with fresh notes and natural antioxidants.',
    image:
      'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: {
      gluten: false,
      lactose: false,
      egg: false,
      nuts: false
    },
    price: 1.5,
    category: 'Beverages'
  },
  {
    title: 'Almond Cookies',
    description:
      'Crunchy cookies made with ground almonds and a touch of honey.',
    image:
      'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800',
    allergens: {
      gluten: true,
      lactose: false,
      egg: false,
      nuts: true
    },
    price: 2.2,
    category: 'Sweets'
  }
]

export default function Coffee() {
  return (
    <main>
      <ProductCatalog products={productData} />
    </main>
  )
}
