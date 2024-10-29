'use client'

import { Product } from '@/data/types/product'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { CartItem } from '../types/cart'

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product, size: string) => void
  deleteToCart: (product: Product) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems')
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  const updateItemQuantity = (item: CartItem, size: string) => {
    return {
      ...item,
      sizes: item.sizes.map((s) =>
        s.size === size ? { ...s, quantity: s.quantity + 1 } : s,
      ),
      price: item.price + item.product.price, // Atualiza o preço total
    }
  }

  const addToCart = (product: Product, size: string) => {
    setCartItems((prevItems) => {
      const productInCart = prevItems.find(
        (item) => item.product.id === product.id,
      )

      if (productInCart) {
        const sizeInCart = productInCart.sizes.find((s) => s.size === size)

        if (sizeInCart) {
          // Se o tamanho já existe, incrementa a quantidade corretamente
          return prevItems.map((item) =>
            item.product.id === product.id
              ? updateItemQuantity(item, size)
              : item,
          )
        } else {
          // Se o tamanho não existe, adiciona um novo tamanho
          return prevItems.map((item) =>
            item.product.id === product.id
              ? {
                  ...item,
                  sizes: [...item.sizes, { size, quantity: 1 }],
                  price: item.price + product.price, // Atualiza o preço total
                }
              : item,
          )
        }
      }

      // Se o produto não está no carrinho, adiciona com o tamanho selecionado
      return [
        ...prevItems,
        { product, sizes: [{ size, quantity: 1 }], price: product.price },
      ]
    })
  }

  const deleteToCart = (product: Product) => {
    const productsFilter = cartItems.filter(
      (item) => item.product.id !== product.id,
    )
    setCartItems(productsFilter)
    localStorage.setItem('cartItems', JSON.stringify(productsFilter))
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart, deleteToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
