'use client'

import AddToCartButton from '@/app/components/add-to-cart-button'
import { Product } from '@/data/types/product'
import { useState } from 'react'

const SelectedSize = ({ product }: { product: Product }) => {
  const sizes = ['P', 'M', 'G', 'GG']
  const [selectedSize, setSelectedSize] = useState('')

  const handleClickSize = (size: string) => {
    setSelectedSize(size)
  }

  return (
    <div>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            className={`flex items-center justify-center h-9 w-14 rounded-full border border-zinc-700 text-sm font-semibold  
            ${selectedSize === size ? 'bg-zinc-600' : 'bg-zinc-800'}`}
            onClick={() => handleClickSize(size)}
          >
            <input type="radio" name="size" value={size} className="hidden" />
            {size}
          </button>
        ))}
      </div>

      <AddToCartButton
        product={product}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    </div>
  )
}

export default SelectedSize
