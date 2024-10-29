import { Product } from '@/data/types/product'

export interface SizeItem {
  size: string
  quantity: number
}

export interface CartItem {
  product: Product
  sizes: { size: string; quantity: number }[]
  price: number
}
