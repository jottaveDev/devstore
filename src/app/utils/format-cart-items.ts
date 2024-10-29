import { CartItem } from '../types/cart'

export const formatCartItem = (cartItem: CartItem) => {
  return cartItem.sizes
    .map(({ size, quantity }) => `${quantity}${size}`)
    .join(', ')
}
