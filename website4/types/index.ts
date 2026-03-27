export interface Product {
  id: string
  name: string
  slug: string
  category: string
  description: string
  gsm: string
  size: string
  material: string
  colors: string
  packing: string
  moq: string
  features: string[]
  badge?: string | null
  isFeatured: boolean
}

export type ProductCategory =
  | 'all'
  | 'shop-towels'
  | 'terry-towels'
  | 'industrial'
  | 'hospitality'

