import Link from 'next/link'
import React from 'react'
import { ArrowRightIcon } from '@/shared/assets/icons/ArrowRightIcon'

import { ReccomendedSlider } from './ReccomendedSlider'

export const RecomendedSection = ( {className}: {className?: string} ) => {
  return (
    <div className={`flex flex-col text-black-600 bg-white-600 p-4 max-w-[375px] mb-8 ${className}`}>
        <div className="inline-flex items-center justify-between mb-4">
            <h2 className="text-mobile-h2">Для вас</h2>
            <Link href={'/'} className="inline-flex gap-1 items-center text-mobile-text-small bg-background rounded-2xl py-2 px-3">
                <span>Все</span>
                <ArrowRightIcon/>
            </Link>
        </div>
        <ReccomendedSlider/>
    </div>
  )
}
