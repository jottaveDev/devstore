'use client'

import { ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../contexts/cart-context'
import CartModal from './cart-modal'

const CartWidget = () => {
  const { items } = useCart()
  const [modal, setModal] = useState(false)

  function handleModal() {
    setModal(!modal)
  }

  return (
    <div className="relative flex items-center">
      <button className="flex items-center gap-2" onClick={handleModal}>
        <ShoppingBag className="h-4 w-4" />
        <span className="text-sm">Cart ({items.length})</span>
      </button>

      {modal && <CartModal items={items} handleModal={handleModal} />}
    </div>
  )
}

export default CartWidget
