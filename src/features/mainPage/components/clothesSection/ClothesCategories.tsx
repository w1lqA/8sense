import { BaseCategories } from "@/shared/components/BaseCategories"

import Img1 from '@/features/mainPage/assets/clothesSection/image_category.png'
import Img2 from '@/features/mainPage/assets/clothesSection/image_category-1.png'
import Img3 from '@/features/mainPage/assets/clothesSection/image_category-2.png'
import Img4 from '@/features/mainPage/assets/clothesSection/image_category-3.png'
import Img5 from '@/features/mainPage/assets/clothesSection/image_category-4.png'
import Img6 from '@/features/mainPage/assets/clothesSection/image_category-5.png'

export const ClothesCategories = () => {
    const clothesCategoriesData = [ 
        {
            href: "/category/upper-clothes",
            title: "Верхняя\nодежда", 
            imageSrc: Img1.src, 
            colSpan: 3, 
        },
        {
            href: "/category/t-shirts",
            title: "Футболки",
            imageSrc: Img2.src,
            colSpan: 2, 
        },
        {
            href: "/category/sweatshirts",
            title: "Свитшоты",
            imageSrc: Img3.src,
            colSpan: 2, 
        },
        {
            href: "/category/hoodies",
            title: "Худи",
            imageSrc: Img4.src,
            colSpan: 3, 
        },
        {
            href: "/category/caps-hats",
            title: "Кепки\nи шапки",
            imageSrc: Img5.src,
            colSpan: 3, 
        },
        {
            href: "/category/pants",
            title: "Штаны",
            imageSrc: Img6.src,
            colSpan: 2, 
        },
    ];
  return (
        <BaseCategories categoriesData={clothesCategoriesData}/>
  )
}
