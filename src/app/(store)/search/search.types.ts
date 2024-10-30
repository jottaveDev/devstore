import { Product } from '@/data/types/product'

export interface SearchProps {
  searchParams: Promise<{
    q: string
  }>
}

export interface SearchViewProps {
  products: Product[]
  query: string
}
