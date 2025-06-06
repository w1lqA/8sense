import { ReccomendedSlider } from "@/shared/components/recomendedSection/ReccomendedSlider"
import { Button } from "@/shared/ui/Button"

export const CollectionsCollection = () => {
  return (
    <div className={`flex flex-col text-black-600 bg-white-600 p-4 max-w-mobile rounded-2xl w-full mx-auto`}>
        <ReccomendedSlider/>
        <Button variant='secondary-l' title='СМОТРЕТЬ ПОДБОРКУ' icon='r' className='mt-4 justify-center w-full self-center max-w-mobile-content'/>
    </div>
  )
}
