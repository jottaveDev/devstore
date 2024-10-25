'use client'

import { useCart } from '@/app/contexts/cart-context'

const AddToCartButton = ({ productId }: { productId: number }) => {
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      className="mt-8 flex justify-center items-center h-12 rounded-full bg-emerald-600 font-semibold text-white"
      onClick={handleAddToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}

export default AddToCartButton
