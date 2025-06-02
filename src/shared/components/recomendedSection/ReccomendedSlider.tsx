import { RecomendedItem } from './RecomendedItem'

export const ReccomendedSlider = () => {
  return (
    <ul className='flex flex-row items-center justify-start gap-4 overflow-x-scroll'>
        <RecomendedItem />
        <RecomendedItem isLiked/>
        <RecomendedItem />
        <RecomendedItem />
        <RecomendedItem isLiked/>
    </ul>
  )
}
