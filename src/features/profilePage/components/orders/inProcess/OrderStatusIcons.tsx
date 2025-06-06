import { CheckIcon } from '@/shared/assets/icons/CheckIcon'
import { PackageCheckIcon } from '@/shared/assets/icons/PackageCheckIcon'
import { MarkerIcon } from '@/shared/assets/icons/MarkerIcon'
import { DeliveryIcon } from '@/shared/assets/icons/DeliveryIcon'

export const OrderStatusIcons = ({className}: {className?: string}) => {
  return (
    <div className={`${className} flex flex-row items-center justify-between`}>
        <div className='bg-white-600 rounded-full p-3'>
            <CheckIcon className='text-black-600'/>
        </div>
        <hr className='border-t-2 border-black-300 w-full max-w-8 mx-2'/>
        
        <div className='bg-black-200 rounded-full p-3'>
            <PackageCheckIcon className='text-black-400'/>
        </div>
        <hr className='border-t-2 border-black-300 w-full max-w-8 mx-2'/>

        <div className='bg-black-200 rounded-full p-3'>
            <DeliveryIcon className='text-black-400'/>
        </div>
        <hr className='border-t-2 border-black-300 w-full max-w-8 mx-2'/>

        <div className='bg-black-200 rounded-full p-3'>
            <MarkerIcon className='text-black-400'/>
        </div>
    </div>
  )
}
