import { ShoesCategories } from "./ShoesCategories"
import { BaseHero } from "../BaseHero"
import ShoesImg from '@/features/mainPage/assets/shoes-main-img.png'

export const ShoesSection = () => {
  return (
    <section className="flex flex-col font-jetbrains">
      <BaseHero title="Обувь" bgImage={ShoesImg.src}/>
      <ShoesCategories/>
    </section>
  )
}
