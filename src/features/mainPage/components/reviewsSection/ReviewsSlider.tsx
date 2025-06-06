import { Button } from "@/shared/ui/Button"
import { ReviewsSliderItem } from "./ReviewsSliderItem"

export const ReviewsSlider = () => {
  return (
    <div className="flex flex-col items-stretch pl-4 max-w-mobile">
        <div className='flex flex-row items-center justify-start gap-4 overflow-x-scroll text-white-500'>
          <ReviewsSliderItem/>
          <ReviewsSliderItem/>
          <ReviewsSliderItem/>
        </div>
        <div className="flex flex-col w-full max-w-mobile self-center pr-4">
          <Button variant='secondary-l' title='СМОТРЕТЬ ВCЕ' className='my-4 py-4 justify-center w-full uppercase'/>
        </div>
    </div>
  )
}
