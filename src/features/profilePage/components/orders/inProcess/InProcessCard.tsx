import { Button } from '@/shared/ui/Button'
import { OrderStatusIcons } from './OrderStatusIcons'
import { CardTemplate } from '@/shared/ui/CardTemplate'
import { InProcessCardData } from './InProcessCardData'

export const InProcessCard = ({className, orderId}: {className?: string, orderId: string}) => {
    return (
    <CardTemplate className={`max-w-mobile-content gap-6 ${className}`}>
        <div className='flex flex-row items-center justify-between'>
            <h4 className='text-mobile-h4 text-black-600'>ЗАКАЗ №{orderId}</h4>
            <p className='text-mobile-text-medium text-black-500'>Доставим ~06 мая </p>
        </div>
        <OrderStatusIcons/>
        <InProcessCardData/>
        <Button buttonType='link' href={`/profile/orders/inprocess/details`} variant='secondary-l' icon='r' title='ДЕТАЛИ ЗАКАЗА' className='uppercase bg-white-600 justify-center'/>
        {/* href={`/profile/orders/inprocess/details/${orderId}`} - передавать orderId в query и в details отрисовывать нужную дату */}
            
    </CardTemplate>
  )
}
