import { BoxIcon } from "@/shared/assets/icons/BoxIcon"
import { CoinsIcon } from "@/shared/assets/icons/CoinsIcon"
import { HeartOutlineIcon } from "@/shared/assets/icons/HeartOutlineIcon"
import { OutIcon } from "@/shared/assets/icons/OutIcon"
import Link from "next/link"

export const ProfileTabs = () => {
    const profileTabs = [
        {title: 'МОИ ЗАКАЗЫ', icon: (<BoxIcon className="text-black-400"/>)},
        {title: 'БАЛЛЫ', icon: (<CoinsIcon className="text-black-400"/>)},
        {title: 'МОИ ИЗБРАННЫЕ', icon: (<HeartOutlineIcon className="text-black-400"/>)},
        {title: 'ВЫЙТИ', icon: (<OutIcon className="text-black-400"/>)},
    ]
  return (
    <ul className="flex flex-col">
        {profileTabs.map((tab, index) => (
            <li key={index}>
                <Link href={'/profile/orders'} className="mt-3 mb-3 font-jetbrains inline-flex items-center gap-2 uppercase text-black-600 text-mobile-h4">
                    {tab.icon}
                    {tab.title}
                </Link>
                <hr className='border-t-[.5px] border-black-300'/>
            </li>
        ))}
    </ul>
  )
}
