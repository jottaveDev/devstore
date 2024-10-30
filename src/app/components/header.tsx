import Image from 'next/image'
import Link from 'next/link'
import CartWidget from './cart/cartWidget'
import { SearchForm } from './search-form'

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devStore
        </Link>
        <SearchForm />
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />
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
