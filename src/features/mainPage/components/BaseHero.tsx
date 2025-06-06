"use client"; 
import { SearchInput } from "@/features/mainPage/components/SearchInput"
import { TabSlider } from "@/shared/ui/tabs/TabSlider"
import Link from "next/link"

export const BaseHero = ({bgImage, title} : {bgImage: string, title: string}) => {
    return (
        <div className="flex flex-col p-4 rounded-2xl relative overflow-hidden max-w-mobile">
            <div 
                className="absolute inset-0 z-0 brightness-90 bg-cover bg-center"
                style={{ backgroundImage: `url('${bgImage}')` }}
            ></div>
            <div className="flex flex-col z-10">
                <div className="inline-flex justify-between text-white-500 text-mobile-text-small mb-16">
                    <p>90+ брендов</p>
                    <p>1205 товаров</p>
                </div>
                <SearchInput title={'Начать поиск'} className={'mb-6'}/>
                <h2 className="text-mobile-h1 text-white-500 text-center mb-2">{title}</h2>
                <Link href={'/'} className="mb-24 text-mobile-text-inter text-white-500 text-center underline">Купить</Link>
                <TabSlider variant="clothes"/>
            </div>
        </div>
    )
}