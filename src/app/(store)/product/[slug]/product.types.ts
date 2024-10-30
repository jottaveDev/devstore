import { Product } from '@/data/types/product'

export interface ProductParamsProps {
  params: Promise<{
    slug: string
  }>
}

export interface ProductViewProps {
  product: Product
}
