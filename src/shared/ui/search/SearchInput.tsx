import { SearchIcon } from '@/shared/assets/icons/SearchIcon'

export const SearchInput = ({query, handleChange}: {query: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
  return (
    <div className="inline-flex items-center gap-2 border-2 w-full border-black-300 justify p-3 rounded-xl">
        <SearchIcon className="text-black-400" />
        <input
          type="text"
          placeholder="Поиск"
          value={query}
          onChange={handleChange}
          className=" placeholder:text-black-600 outline-0 text-mobile-text-medium w-full"
        />
    </div>
  )
}
