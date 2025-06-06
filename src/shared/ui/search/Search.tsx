'use client'
import { SearchIcon } from '@/shared/assets/icons/SearchIcon'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowIcon } from '@/shared/assets/icons/ArrowIcon'
import { SearchInput } from './SearchInput'

const searchData = [
  "Кроссовки",
  "Футболка",
  "Очки",
  "Куртка",
  "Сумка",
  "Шарф",
  "Брюки",
  "Платье"
]

export const Search = ({
  query,
  onQueryChange,
}: {
  query: string
  onQueryChange: (value: string) => void
}) => {
  const [results, setResults] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    onQueryChange(value)

    if (value.trim() === "") {
      setResults([])
    } else {
      const filtered = searchData.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      )
      setResults(filtered)
    }
  }

  return (
    <div className='flex flex-col items-stretch w-full font-jetbrains'>
      <SearchInput query={query} handleChange={handleChange}/>
      <ul className="mt-2 space-y-1">
        {results.map((item, index) => (
          <li key={index} className="p-2 inline-flex w-full items-center justify-between gap-1">
            <SearchIcon className="text-black-400 w-full max-w-6" />
            <Link href={'/'} className='w-full inline-flex text-black-600 text-mobile-text-medium items-center justify-between'>
              {item}
              <ArrowIcon className="text-black-400 justify-self-end" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
