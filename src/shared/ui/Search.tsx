'use client'
import { useState } from 'react'
import { SearchIcon } from '../assets/icons/SearchIcon'
import Link from 'next/link'
import { ArrowIcon } from '../assets/icons/ArrowIcon'

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

export const Search = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)

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
        <div className="inline-flex items-center gap-2 border-2 w-full border-black-300 justify p-3 rounded-xl">
            <SearchIcon className="text-black-400"/>
            <input
                type="text"
                placeholder="Поиск"
                value={query}
                onChange={handleChange}
                className=" placeholder:text-black-600 outline-0 text-mobile-text-medium w-full"
            />
        </div>
        <ul className="mt-2 space-y-1">
            {results.map((item, index) => (
                <li key={index} className="p-2 inline-flex w-full items-center justify-between gap-1">
                    <SearchIcon className="text-black-400 w-full max-w-6"/>
                    <Link href={'/'} className='w-full inline-flex text-black-600 text-mobile-text-medium items-center justify-between'>
                        {item}
                        <ArrowIcon className="text-black-400 justify-self-end"/>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
