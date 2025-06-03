import CardImage from "@/features/mainPage/assets/reviewsSection/review-card-image.png"
import StarIcon from "@/features/mainPage/assets/reviewsSection/reviews-star.svg"
import CardImageSmall from "@/features/mainPage/assets/reviewsSection/reviews-card-image-small.png"
import { ArrowIcon } from "@/shared/assets/icons/ArrowIcon";
import Image from "next/image";
import Link from "next/link";

export const ReviewsSliderItem = () => {
  return (
    <Link href={'/'} className="relative flex flex-col items-stretch rounded-2xl p-2 bg-black-600 bg-cover bg-center w-full max-w-[200px]"
        style={{ backgroundImage: `url('${CardImage.src}')` }}>
        <div className="inline-flex gap-1 items-center text-mobile-text-cost-small text-white-500 self-end mb-44">
            <Image src={StarIcon} alt=""/>
            <p>5</p>
        </div>
        <div className="inline-flex items-center">
        <Image src={CardImageSmall} alt="" className="rounded-lg mr-3 max-w-10"/>
        <p className=" flex flex-col items-start">
            <span className="text-white-500 text-mobile-h4">12 634 ₽</span>
            <span className="text-white-200 text-mobile-text-small text-nowrap">сумка с коро...</span>
        </p>
        <ArrowIcon className={`text-white-500`}/>
        </div>
    </Link>
  )
}
