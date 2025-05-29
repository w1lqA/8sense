import { BaseCategories } from "@/shared/components/BaseCategories"

import Img1 from '@/features/mainPage/assets/accessoriesSection/image_category.png'
import Img2 from '@/features/mainPage/assets/accessoriesSection/image_category-1.png'
import Img3 from '@/features/mainPage/assets/accessoriesSection/image_category-2.png'
import Img4 from '@/features/mainPage/assets/accessoriesSection/image_category-3.png'
import Img5 from '@/features/mainPage/assets/accessoriesSection/image_category-4.png'

export const AccessoriesCategories = () => {
    const accessoriesCategoriesData = [
        {
            href: "/category/krossi-kedi",
            title: "Сумки\nи рюкзаки", 
            imageSrc: Img1.src, 
            colSpan: 3, 
        },
        {
            href: "/category/botinki",
            title: "Карточницы",
            imageSrc: Img2.src,
            colSpan: 2, 
        },
        {
            href: "/category/custom-krossi",
            title: "Очки",
            imageSrc: Img3.src,
            colSpan: 2, 
        },
        {
            href: "/category/sport-shoes",
            title: "Кошельки",
            imageSrc: Img4.src,
            colSpan: 3, 
        },
        {
            href: "/category/sandalii",
            title: "Часы",
            imageSrc: Img5.src,
            colSpan: 5, 
        },

    ];
  return (
        <BaseCategories categoriesData={accessoriesCategoriesData}/>
  )
}
