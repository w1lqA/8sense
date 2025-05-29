import { BaseHero } from "@/features/mainPage/components/BaseHero"
import AccessoriesImg from '@/features/mainPage/assets/accessories-main-img.png'
import { AccessoriesCategories } from "./AccessoriesCategories"

export const AccessoriesSection = () => {
  return (
    <section className="flex flex-col font-jetbrains">
      <BaseHero title="Аксессуары" bgImage={AccessoriesImg.src}/>
      <AccessoriesCategories/>
    </section>
  )
}
