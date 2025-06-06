import { ArrowLeftIcon } from '@/shared/assets/icons/ArrowLeftIcon'
import React from 'react'
import Link from 'next/link'
import { OrderTypeCard } from './OrderTypeCard'

export const OrdersComponent = () => {
  return (
    <div className="flex flex-col items-start gap-2 max-w-mobile-content mx-8 mt-4">
      <Link href={'/profile'} className='inline-flex items-center gap-2 mb-4'>
        <ArrowLeftIcon className='text-black-600 max-w-6'/>
        <h1 className="text-black-600 text-mobile-text-cost-medium">Мои заказы</h1>
      </Link>
      <div className='flex flex-row justify-between flex-wrap gap-4 w-full'>
        <OrderTypeCard title='В доставке' description='1 заказ'/>
        <OrderTypeCard title='Доставлено' description='5 заказ'/>
      </div>
    </div>
  )
}
