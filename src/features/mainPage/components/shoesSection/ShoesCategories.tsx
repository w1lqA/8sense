import { BaseCategories } from "@/shared/components/BaseCategories"
import BootsImg from '@/features/mainPage/assets/shoesSection/image_category.png'
import CustomSneakersImg from '@/features/mainPage/assets/shoesSection/image_category-1.png'
import SportShoesImg from '@/features/mainPage/assets/shoesSection/image_category-2.png'
import SlippersImg from '@/features/mainPage/assets/shoesSection/image_category-3.png'
import HighBootsImg from '@/features/mainPage/assets/shoesSection/image_category-4.png'

export const ShoesCategories = () => {
    const shoesCategoriesData = [
        {
            href: "/category/krossi-kedi",
            title: "Кроссовки\nи кеды", 
            imageSrc: BootsImg.src, 
            colSpan: 3, 
        },
        {
            href: "/category/botinki",
            title: "Ботинки",
            imageSrc: BootsImg.src,
            colSpan: 2, 
        },
        {
            href: "/category/custom-krossi",
            title: "Кастомные\nкроссовки",
            imageSrc: CustomSneakersImg.src,
            colSpan: 2, 
        },
        {
            href: "/category/sport-shoes",
            title: "Обувь\nдля спорта",
            imageSrc: SportShoesImg.src,
            colSpan: 3, 
        },
        {
            href: "/category/sandalii",
            title: "Сандалии",
            imageSrc: SlippersImg.src,
            colSpan: 3, 
        },
        {
            href: "/category/sapogi",
            title: "Сапоги",
            imageSrc: HighBootsImg.src,
            colSpan: 2, 
        },
    ];
  return (
        <BaseCategories categoriesData={shoesCategoriesData}/>
  )
}
