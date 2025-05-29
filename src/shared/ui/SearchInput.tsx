import { SearchIcon } from "../assets/icons/SearchIcon"

export const SearchInput = ({ className, title }: {className?: string, title: string}) => {
  return (
    <form className={`inline-flex items-center text-center self-center bg-black-400 text-mobile-text-medium rounded-4xl text-black-200 py-2 px-2 backdrop-blur-[10px] ${className}`}>
        <input type="text" placeholder={title} className='ml-4 outline-0 max-w-32'/>
        <button type="submit" className='rounded-full bg-black-200 p-3'>
            <SearchIcon className='text-black-400'/>
        </button>
    </form>
  )
}
