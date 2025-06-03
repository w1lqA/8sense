'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

export const Tab = (
    {className, title, icon, description, isActive, onClick}: 
    {className?: string; title: string; icon: StaticImageData; description?: string; isActive: boolean; onClick: () => void}
) => {
  return (
    <button onClick={onClick} className={`flex flex-row backdrop-blur-[10px] items-center transition-colors gap-3 p-2 pr-5 rounded-full ${
        isActive ? 'bg-black-400' : 'bg-transparent'
      } ${className}`}>
        <Image className="rounded-full max-w-10" src={icon} alt=""/>
        <p className="flex flex-col items-start whitespace-nowrap text-start w-full">
            <span className="text-white-500 text-mobile-h4 ">{title}</span>  
            {description && 
                <span className="text-white-200 text-mobile-text-small max-w-24 overflow-hidden text-ellipsis">{description}234234</span>
            }
        </p>
    </button>
  )
}
