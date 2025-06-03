import { Button } from "@/shared/ui/Button"
import { ReviewsSliderItem } from "./ReviewsSliderItem"

export const ReviewsSlider = () => {
  return (
    <div className="flex flex-col items-stretch pl-4 max-w-[375px]">
        <div className='flex flex-row items-center justify-start gap-4 overflow-x-scroll text-white-500'>
          <ReviewsSliderItem/>
          <ReviewsSliderItem/>
          <ReviewsSliderItem/>
        </div>
        <Button variant='secondary-l' title='СМОТРЕТЬ ВСЕ' className='my-4 py-4 justify-center w-full uppercase self-stretch max-w-[343px]'/>
    </div>
  )
}
