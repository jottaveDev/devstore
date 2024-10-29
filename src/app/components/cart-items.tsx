import { CartItem } from '../types/cart'
import { convertPriceToBRL } from '../utils/convertPrice'
import { formatCartItem } from '../utils/format-cart-items'

const CartItems = ({ items }: { items: CartItem[] }) => {
  return (
    <ul className="flex flex-col gap-3 text-zinc-900 px-4 py-2">
      {items.map((item) => {
        return (
          <li
            key={item.product.id}
            className="flex flex-col gap-2 border border-zinc-400 p-4 rounded-lg"
          >
            <p className="text-lg font-semibold">{item.product.title}</p>
            <div className="flex items-center justify-between">
              <span className="inline-block rounded-full bg-violet-500 px-3 py-1.5 font-semibold self-start text-white">
                {convertPriceToBRL(item.price)}
              </span>
              <span>{formatCartItem(item)}</span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default CartItems
