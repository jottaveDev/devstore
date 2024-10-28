import data from '../data.json'

interface ProductParamsProps {
  params: Promise<{
    slug: string
  }>
}

export async function GET(_: Request, { params }: ProductParamsProps) {
  const { slug } = await params

  const product = data.products.find((product) => product.slug === slug)
  if (!product) {
    return Response.json({ message: 'Product not found.' }, { status: 400 })
  }
  return Response.json(product)
}

export const dynamic = 'force-static'
