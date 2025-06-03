"use client"; 

import TogglerIconMen from "@/shared/assets/images/tab-image-men.png"
import TogglerIconWomen from "@/features/mainPage/assets/reviewsSection/reviews-card-image-small.png"
import { TogglerButton } from "./TogglerButton"
import { useState } from "react"

export const MainPageToggler = () => {
  const [currentActive, setCurrentActive] = useState<'men' | 'women'>('men')

  return (
    <div className='m-4 rounded-2xl bg-black-200 p-2 gap-2 inline-flex justify-between font-jetbrains'>
      <TogglerButton 
        icon={TogglerIconMen} 
        isActive={currentActive === 'men'}
        onClick={() => setCurrentActive('men')}
        title='Мужчинам'
        description="Nike,puma,Ad,с"
      />
      <TogglerButton 
        icon={TogglerIconWomen}
        isActive={currentActive === 'women'}
        onClick={() => setCurrentActive('women')}
        title='Женщинам'
        description="Miu Miu,coach,с"
      />
    </div>
  )
}
