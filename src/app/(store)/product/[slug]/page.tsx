import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { Metadata } from 'next'
import { getProduct } from './product.model'
import { ProductParamsProps } from './product.types'
import ProductView from './product.view'

export async function generateMetadata({
  params,
}: ProductParamsProps): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug)

  return {
    title: product.title,
  }
}

export async function generateStaticParams() {
  const response = await api('/products/featured')
  const products: Product[] = await response.json()
  return products.map((product) => {
    return { slug: product.slug }
  })
}

const ProductPage = async ({ params }: ProductParamsProps) => {
  const { slug } = await params
  const product = await getProduct(slug)
  return <ProductView product={product} />
}

export default ProductPage
