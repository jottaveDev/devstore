import { useEffect, useRef } from 'react'
import { CartItem } from '../../types/cart'
import CartItems from './cart-items'

interface CartModalProps {
  items: CartItem[]
  handleModal: () => void
}

const CartModal = ({ items, handleModal }: CartModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleModal()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div
      ref={modalRef}
      className="absolute right-0 top-10 bg-zinc-100 w-[400px] h-[850px] z-50 rounded-lg flex flex-col"
    >
      <div className="flex items-center justify-between p-4">
        <p className="text-2xl font-bold text-zinc-900">Meu Carrinho</p>
        <button className="text-black p-2 font-bold" onClick={handleModal}>
          X
        </button>
      </div>

      <CartItems items={items} />
    </div>
  )
}

export default CartModal
