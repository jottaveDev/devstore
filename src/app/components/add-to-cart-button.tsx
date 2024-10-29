'use client'

import { useCart } from '@/app/contexts/cart-context'
import { Product } from '@/data/types/product'

interface AddToCartButtonProps {
  product: Product
  selectedSize: string
  setSelectedSize: (size: string) => void
}

const AddToCartButton = (props: AddToCartButtonProps) => {
  const { addToCart } = useCart()

  function handleAddToCart() {
    if (props.selectedSize) {
      addToCart(props.product, props.selectedSize)
      props.setSelectedSize('')
      alert(`${props.product.title} adicionado ao carrinho :)`)
    } else {
      alert('Por favor, selecione um tamanho antes de adicionar ao carrinho.')
    }
  }

  return (
    <button
      type="button"
      className="w-full mt-8 flex justify-center items-center h-12 rounded-full bg-emerald-600 font-semibold text-white"
      onClick={handleAddToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}

export default AddToCartButton
