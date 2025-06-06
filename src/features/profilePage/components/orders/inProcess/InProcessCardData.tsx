import { DeliveryIcon } from "@/shared/assets/icons/DeliveryIcon"
import Image from "next/image"
import OrderImage from '@/shared/assets/images/sneakers.png'

export const InProcessCardData = () => {
  return (
    <div className='flex flex-row items-center justify-between gap-4'>
        <Image src={OrderImage} alt='' className='p-2 w-full max-w-28 rounded-xl bg-white-600'/>
        <div className='flex flex-col items-start gap-2 text-black-500'>
            <h5 className='text-mobile-text-medium text-black-600'>Nike Air Force 1 White and Black</h5>
            <p className='text-mobile-text-small'>РАЗМЕР 42 EUR</p>
            <div className='inline-flex justify-between w-full'>
                <p className='font-inter inline-flex gap-1 text-mobile-text-description'>
                    <DeliveryIcon className='text-black-400'/>
                    25-30 дней
                </p>
                <p className='font-jetbrains text-mobile-text-description'>17 680₽</p>
            </div>
        </div>
    </div>
  )
}
