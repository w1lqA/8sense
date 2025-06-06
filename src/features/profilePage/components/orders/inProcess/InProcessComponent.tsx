import { ArrowLeftIcon } from '@/shared/assets/icons/ArrowLeftIcon'
import React from 'react'
import Link from 'next/link'
import { InProcessCard } from './InProcessCard'

export const InProcessComponent = () => {
  return (
    <div className="flex flex-col items-start gap-2 mx-auto max-w-mobile-content mt-4">
      <Link href={'/profile/orders'} className='inline-flex items-center gap-2 pl-4 mb-4'>
        <ArrowLeftIcon className='text-black-600 max-w-6'/>
        <h1 className="text-black-600 text-mobile-text-cost-medium">В доставке</h1>
      </Link>
      <div className='flex flex-col gap-4 w-full'>
        <InProcessCard orderId={'62381-12'}/>
      </div>
    </div>
  )
}
