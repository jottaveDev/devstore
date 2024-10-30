import { convertPriceToBRL } from '@/app/utils/convertPrice'
import Image from 'next/image'
import SelectedSize from './components/selected-size'
import { ProductViewProps } from './product.types'

export default function ProductView({ product }: ProductViewProps) {
  return (
    <div className="relative grid max-h=[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {convertPriceToBRL(product.price)}
          </span>
          <span className="text-sm text-zinc-400">
            Em até 12x sem juros de{' '}
            {(product.price / 12).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>
          <SelectedSize product={product} />
        </div>
      </div>
    </div>
  )
}
