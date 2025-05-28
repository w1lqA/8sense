import Image from "next/image"
import Link from "next/link"
import MenuIcon from "@/shared/assets/icons/icon-menu.svg"
import SearchIcon from "@/shared/assets/icons/icon-search.svg"
import UserIcon from "@/shared/assets/icons/icon-user.svg"
import BagIcon from "@/shared/assets/icons/icon-bag.svg"
import { LogoIcon } from "@/shared/assets/icons/LogoIcon"


interface HeaderProps {
    className?: string
}

export const Header = ({className}: HeaderProps) => {
  return (
    <header className={` ${className}
        flex flex-row items-center px-3 py-4 justify-between bg-black-200 w-full rounded-lg fixed max-w-[343px] m-4
    `}>
        <div className="flex items-center gap-1">
            <Link 
                href="/menu" 
                className="p-1 hover:bg-black-300 rounded-lg transition-colors"
            >
                <Image 
                    src={MenuIcon} 
                    alt="Menu" 
                    className="max-w-12 w-full text-black-600"
                />
            </Link>
            <Link 
                href="/search" 
                className="p-1 hover:bg-black-300 rounded-lg transition-colors"
            >
                <Image 
                    src={SearchIcon} 
                    alt="Search"
                    className="w-5 h-5"
                />
            </Link>
        </div>
            <Link href='#' className="hover:opacity-90 transition">
                <LogoIcon className="text-black-600 h-4"/>
            </Link>
        <div className="flex items-center gap-1">
            <Link 
                href="/profile" 
                className="p-1 hover:bg-black-300 rounded-lg transition-colors"
            >
                <Image 
                    src={UserIcon} 
                    alt="Profile"
                    className="w-5 h-5"
                />
            </Link>
            <Link 
                href="/cart" 
                className="p-1 hover:bg-black-300 rounded-lg transition-colors"
            >
                <Image 
                    src={BagIcon} 
                    alt="Cart"
                    className="w-5 h-5"
                />
            </Link>
        </div>
    </header>
  )
}
