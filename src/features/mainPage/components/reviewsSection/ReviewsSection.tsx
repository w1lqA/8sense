import Image from "next/image"
import StarsIcon from '@/features/mainPage/assets/reviewsSection/reviews-stars.svg'
import { Button } from "@/shared/ui/Button"
import { ReviewsSlider } from "./ReviewsSlider"
export const ReviewsSection = () => {
  return (
    <section className="flex flex-col items-stretch font-jetbrains">
        <h2 className="text-center text-mobile-h4 text-black-600 my-4">
            <span>ОТЗЫВЫ О НАС —</span> <br />
            <span className="text-black-500">ГАРАНТИЯ НАДЕЖНОСТИ СЕРВИСА</span>
        </h2>
        <div className="flex flex-col items-stretch bg-black-600 rounded-2xl p-2 mb-6 mx-4">
            <div className="flex flex-row items-center justify-center gap-4 my-3">
                <p className="font-jetbrains text-3xl leading-10 text-white-500 font-bold">4.9</p>
                <div className="flex flex-col items-start w-full max-w-40">
                    <Image src={StarsIcon} alt="Rating"/>
                    <p className="text-mobile-text-description text-black-200">Рейтинг на основе
                    более 550 оценок</p>
                </div>
            </div>
            <Button icon="r" title="Написать отзыв" variant="secondary-l" className="text-center justify-center self-center w-full py-2"/>
        </div>
        <ReviewsSlider/>
    </section>
  )
}
