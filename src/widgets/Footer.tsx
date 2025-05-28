import { LogoIcon } from '@/shared/assets/icons/LogoIcon'
import Link from 'next/link'
import React from 'react'
import { SocialIcons } from '@/shared/assets/icons/SocialIcons'


export const Footer = () => {
  return (
    <footer className='flex flex-col bg-black-600 w-full text-gray-400 font-jetbrains rounded-t-2xl mt-auto'>
        <div className='p-6 w-full pb-0'>
            <div className="flex flex-col items-start mb-4 ">
                <Link href='#' className="hover:opacity-90 transition mb-4">
                    <LogoIcon variant='small' className="text-white h-4"/>
                </Link>
                <h2 className="text-mobile-h4">
                    <span className='text-white-500'>Любимый сервис </span>
                    <span className='text-white-200 '>доставки <br /> товаров из-за рубежа</span>
                </h2>
            </div>

            <div className="flex flex-col gap-4">
                <hr className='border-t-[.5px] border-black-300'/>
                <details>
                    <summary className="text-white font-medium uppercase cursor-pointer">КЛИЕНТАМ</summary>
                    <div className="ml-2 flex flex-col text-mobile-text-small gap-1">
                        <Link href="#">Оплата</Link>
                        <Link href="#">Доставка</Link>
                        <Link href="#">Помощь</Link>
                        <Link href="#">Как выбрать размер</Link>
                        <Link href="#">Гарантия</Link>
                    </div>
                </details>
                <hr className='border-t-[.5px] border-black-300'/>

                <details>
                    <summary className="text-white font-medium uppercase cursor-pointer">О НАС</summary>
                    <div className="ml-2 flex flex-col text-mobile-text-small gap-1">
                        <Link href="#">Наша история</Link>
                        <Link href="#">Контакты</Link>
                    </div>
                </details>

                <hr className='border-t-[.5px] border-black-300'/>

                <details>
                    <summary className="text-white font-medium uppercase cursor-pointer">КАТАЛОГ</summary>
                    <div className="ml-2 mt-2 flex flex-col text-mobile-text-small gap-1">
                        <Link href="#">Категория 1</Link>
                        <Link href="#">Категория 2</Link>
                    </div>
                </details>

                <hr className='border-t-[.5px] border-black-300'/>

                <details>
                    <summary className="text-white font-medium uppercase cursor-pointer">БРЕНДЫ</summary>
                    <div className="ml-2 mt-2 flex flex-col text-mobile-text-small">
                        <Link href="#">Бренд A</Link>
                        <Link href="#">Бренд B</Link>
                    </div>
                </details>

                <hr className='border-t-[.5px] border-black-300'/>
            </div>

            <div className="flex gap-4 my-6 *:transition">
                <Link href="#" className="w-8 h-8 bg-black-300 rounded-full flex items-center justify-center text-black-600 hover:text-white">
                    <SocialIcons variant="instagram" className="w-4 h-4"/>
                </Link>
                <Link href="#" className="w-8 h-8 bg-black-300 rounded-full flex items-center justify-center text-black-600 hover:text-white">
                    <SocialIcons variant="telegram" className="w-4 h-4 translate-x-[-1px]"/>
                </Link>
                <Link href="#" className="w-8 h-8 bg-black-300 rounded-full flex items-center justify-center text-black-600 hover:text-white">
                    <SocialIcons variant="whatsapp" className="w-4 h-4"/>
                </Link>
            </div>

            <div className="flex text-black-200 flex-wrap gap-2 justify-center md:justify-start mb-4 font-inter text-mobile-text-description"> {/* Заменено text-xs на text-mobile-text-small */}
                <Link href="#" className="hover:underline">Карта сайта</Link>
                <Link href="#" className="hover:underline">Публичная оферта</Link>
                <Link href="#" className="hover:underline">Политика приватности</Link>
            </div>

            <div className="text-center md:text-left text-black-300 text-mobile-text-description font-inter">
                © 2025 8Sense Все права защищены
            </div>
        </div>

        <div className='w-full overflow-hidden object-cover'>
            <div className='whitespace-nowrap inline-block animate-marquee translate-y-6'>
                <LogoIcon className='text-white h-24 inline-block'/>
                <LogoIcon className='text-white h-24 inline-block'/>
                <LogoIcon className='text-white h-24 inline-block'/>
            </div>
        </div>

    </footer>
  )
}