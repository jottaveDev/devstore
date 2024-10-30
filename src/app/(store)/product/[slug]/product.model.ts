import { api } from '@/data/api'
import { Product } from '@/data/types/product'

export async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`)
  const product = await response.json()
  return product
}
