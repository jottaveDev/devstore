import { redirect } from 'next/navigation'
import { searchProducts } from './search.model'
import { SearchProps } from './search.types'
import SearchView from './search.view'

const Search = async ({ searchParams }: SearchProps) => {
  const { q: query } = await searchParams
  if (!query) redirect('/')
  const products = await searchProducts(query)
  return <SearchView products={products} query={query} />
}

export default Search
