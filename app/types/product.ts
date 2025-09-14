export interface Product {
  title: string
  description: string
  image: string
  allergens: {
    gluten?: boolean
    lactose?: boolean
    egg?: boolean
    nuts?: boolean
    [key: string]: boolean | undefined
  }
  price: number
  category: string
}