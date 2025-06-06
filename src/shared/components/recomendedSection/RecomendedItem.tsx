

import { HeartOutlineIcon } from '@/shared/assets/icons/HeartOutlineIcon'
import { HeartSolidIcon } from '@/shared/assets/icons/HeartSolidIcon'
import SneakersImg from '@/shared/assets/images/sneakers.png'
import Image from 'next/image'
import Link from 'next/link'

export const RecomendedItem = ({isLiked = false}: {isLiked?: boolean}) => {
  return (
    <Link href={'/'} className='flex flex-col gap-2 max-w-44 relative'>
        {isLiked 
        ? <HeartSolidIcon className='absolute left-0 top-0'/>
        : <HeartOutlineIcon className='absolute left-0 top-0'/>
        }
        
        <Image src={SneakersImg} alt='Кроссовки' className='w-full'/>
        <div className='flex flex-col gap-1'>
            <p className='inline-flex items-end'>
                <span className='text-mobile-text-cost-medium'>17 689</span>
                <span className='text-mobile-text-cost-small'>₽</span>
            </p>
            <p className='text-mobile-text-cost-small'>
                <span className=' bg-black-600 text-white-600 p-1 rounded-sm font-jetbrains'>8 844<span className='text-xs'>₽</span> x 2</span>
                <span className='text-mobile-text-small font-inter'> в сплит</span>
            </p>
        </div>
        <h3 className='text-mobile-text-medium font-jetbrains mt-1'>Nike Air Force 1 <br />&quot;White and Black&quot;</h3>
        <p className='font-inter font-bold text-xs text-black-500 inline-flex items-center gap-1'>
            <span>24 дня • </span>
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8L5.08333 1V5.66667H8L3.91667 12.6667V8H1Z" stroke="#A7A7A7" strokeLinejoin="round"/>
            </svg>
            <span>16 дней</span>
        </p>
    </Link> 
  )
}
