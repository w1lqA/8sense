import { RecomendedItem } from './RecomendedItem'

export const ReccomendedSlider = () => {
  return (
    <div className='flex flex-row items-center justify-start gap-6 overflow-x-scroll'>
        <RecomendedItem />
        <RecomendedItem isLiked/>
        <RecomendedItem />
        <RecomendedItem />
        <RecomendedItem isLiked/>
    </div>
  )
}
