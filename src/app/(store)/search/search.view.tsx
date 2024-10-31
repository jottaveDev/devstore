import { convertPriceToBRL } from '@/app/utils/convertPrice'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import CurrentSearch from './components/current-search'
import { SearchViewProps } from './search.types'

export default function SearchView({ products }: SearchViewProps) {
  return (
    <div className="flex flex-col gap-4">
      <Suspense>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative rounded-lg bg-zinc-900 overflow-hidden"
          >
            <Image
              src={product.image}
              className="group-hover:scale-105 transition-transform duration-500"
              alt={product.title}
              width={480}
              height={480}
              quality={100}
            />

            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {convertPriceToBRL(product.price)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
