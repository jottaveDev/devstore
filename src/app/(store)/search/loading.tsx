'use client'

import Skeleton from '@/app/components/skeleton'
import { Suspense } from 'react'
import CurrentSearch from './components/current-search'

const SearchLoading = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <Suspense fallback={null}>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
      </div>
    </div>
  )
}

export default SearchLoading
