import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { MainHero } from './components/MainHero'
import { Toggler } from './components/Toggler'
import { ShoesSection } from './components/shoesSection/ShoesSection'
import { RecomendedSection } from '@/shared/components/recomendedSection/RecomendedSection'
import { ClothesSection } from './components/clothesSection/ClothesSection'
import { AccessoriesSection } from './components/accessoriesSection/AccessoriesSection'

export const MainPage = () => {

  return (
    <div className="flex flex-col items-center justify-start min-h-screen mx-auto max-w-[375px] bg-background relative">
        <Header/>

        <main className='mt-24 flex flex-col'>
          <MainHero/>
          <Toggler/>
          <ShoesSection/>
          <RecomendedSection/>
          <ClothesSection/>
          <RecomendedSection/>
          <AccessoriesSection/>
          <RecomendedSection/>
        </main>

        <Footer/>
    </div>
  )
}
