import CardIcon from '@/features/profilePage/assets/orders-order-card-icon.png'
import Image from 'next/image'
import Link from 'next/link'

export const OrderTypeCard = ({title, description}: {title: string, description: string}) => {
  return (
    <Link href={'/profile/orders/inprocess'} className="flex flex-col p-3 w-full max-w-36 rounded-lg bg-white-600">
        <Image src={CardIcon} alt='' className='max-w-16 mb-3'/>
        <h3 className='text-mobile-text-category text-black-600 mb-1'>{title}</h3>
        <p className='text-mobile-text-small text-black-500'>{description}</p>
    </Link>
  )
}
