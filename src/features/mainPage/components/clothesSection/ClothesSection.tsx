import { BaseHero } from "@/features/mainPage/components/BaseHero"
import ClothesImg from '@/features/mainPage/assets/clothes-main-img.png'
import { ClothesCategories } from "./ClothesCategories"

export const ClothesSection = () => {
  return (
    <section className="flex flex-col font-jetbrains">
      <BaseHero title="Одежда" bgImage={ClothesImg.src}/>
      <ClothesCategories/>
    </section>
  )
}
