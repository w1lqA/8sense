import { CardTemplate } from "@/shared/ui/CardTemplate"
import { OrderStatusIcons } from "../OrderStatusIcons"
import { Button } from "@/shared/ui/Button"
import { InProcessCardData } from "../InProcessCardData"

export const OrderDetails = () => {
  return (
    <div className="max-w-mobile-content font-jetbrains mx-auto flex flex-col gap-4">
        <CardTemplate>
            <h1 className="text-mobile-h4 text-black-600 mb-6">ЗАКАЗ №62381-12</h1>
            <OrderStatusIcons className="mb-4"/>
            <p className="text-mobile-h4 text-center text-black-600 mb-1">Доставим ~06 мая</p>
            <p className="text-mobile-text-small text-center text-black-500">Заказ оплачен и отправлен на закупку</p>
        </CardTemplate>
        <CardTemplate>
            <h2 className="text-mobile-h3 text-black-600">8 840₽</h2>
            <p className="text-mobile-text-category flex flex-col font-normal text-start text-black-600 gap-1 my-2">
                Следующий платеж ~1 мая <br />
                <span className="text-black-500">когда приедет в Москву</span>
            </p>
            <Button variant="primary-l" className="justify-center py-4 my-4" title="Оплатить сейчас"/>
            <p className="text-mobile-text-category inline-flex justify-between font-normal text-black-600 gap-1 my-2">
                <span>Оплачено</span>
                <span>8 840₽</span>
            </p>
            <p className="text-mobile-text-category inline-flex justify-between font-semibold text-black-600 gap-1 mt-2">
                <span>Осталось оплатить</span>
                <span>17 680₽</span>
            </p>
        </CardTemplate>
        <CardTemplate>
            <InProcessCardData/>
            <Button buttonType='link' href={`/profile/orders/inprocess/`} variant='secondary-l' title='ПОКАЗАТЬ ВСЕ' className='uppercase mt-4 bg-white-600 justify-center'/>
        </CardTemplate>
        <CardTemplate>
            <p className="text-mobile-text-category inline-flex justify-between font-semibold text-black-600 gap-1 mt-2">
                <span>3 товара</span>
                <span>17 680₽</span>
            </p>
            <p className="text-mobile-text-category inline-flex justify-between font-normal text-black-600 gap-1 my-2">
                <span>Доставка <span className="text-black-500">(при получении)</span></span>
                <span>~400₽</span>
            </p>
            <hr className='border-t-[.5px] border-black-300 my-1'/>
            <p className="text-mobile-text-inter inline-flex justify-between font-bold text-black-600 gap-1 mt-2">
                <span>Итого</span>
                <span>17 680₽</span>
            </p>
        </CardTemplate>
    </div>
  )
}
