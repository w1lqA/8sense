import React from 'react'
import HeroImage from '@/features/mainPage/assets/collectionsSection/collections-main-img.png'
import { CollectionsCollection } from './CollectionsCollection'
import { TabSlider } from '@/shared/ui/tabs/TabSlider'

export const CollectionsSection = () => {
  return (
    <section className='flex flex-col items-stretch max-w-mobile'>
        <h2 className='pb-4 bg-background text-mobile-h4 uppercase font-jetbrains text-center text-black-600'>Авторские подборки</h2>
        <div className=" bg-white-600 p-4 rounded-2xl relative bg-cover bg-center">
            <div 
                className="absolute inset-0 z-0 brightness-90 bg-cover bg-center"
                style={{ backgroundImage: `url('${HeroImage.src}')` }}
            ></div>
            <div className='flex flex-col *:z-10'>
              <div className="inline-flex justify-between text-white-500 text-mobile-text-small mb-16">
                  <p>138,2К подписчиков</p>
                  <p>12 товаров</p>
              </div>
              <div className='text-start flex flex-col text-white-500 mt-48 mb-2'>
                  <p className='text-mobile-text-description'>Инфлюенсер • Селебрети</p>                
                  <h2 className="text-mobile-h1">Диана Пожарская</h2>
              </div>
              <TabSlider variant="collections"/>
            </div>
        </div>
        <CollectionsCollection/>
    </section>
  )
}
