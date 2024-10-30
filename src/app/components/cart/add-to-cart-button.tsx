'use client'

import { useCart } from '@/app/contexts/cart-context'
import { Product } from '@/data/types/product'
import { Bounce, toast } from 'react-toastify'

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
      toast(`${props.product.title} adicionado ao carrinho :)`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
        type: 'success',
      })
    } else {
      toast('Por favor, selecione um tamanho antes de adicionar ao carrinho.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
        type: 'error',
      })
    }
  }

  return (
    <>
      <button
        type="button"
        className="w-full mt-8 flex justify-center items-center h-12 rounded-full bg-emerald-600 font-semibold text-white"
        onClick={handleAddToCart}
      >
        Adicionar ao carrinho
      </button>
    </>
  )
}

export default AddToCartButton
