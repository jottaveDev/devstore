import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devStore
        </Link>
        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="w-5 h-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          <span className="text-sm">Cart (0)</span>
        </div>
        <div className="w-px h-4 bg-zinc-700" />
        <Link href="/">
          <Image
            src="https://github.com/jottavedev.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt="Foto usuário"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header