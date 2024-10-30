import { api } from '@/data/api'
import { Product } from '@/data/types/product'

export async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60, // 1h
    },
  })
  const products = await response.json()
  return products
}
