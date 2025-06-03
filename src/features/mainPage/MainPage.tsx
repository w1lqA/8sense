import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { MainHero } from './components/MainHero'
import { MainPageToggler } from '../../shared/ui/toggler/MainPageToggler'
import { ShoesSection } from './components/shoesSection/ShoesSection'
import { RecomendedSection } from '@/shared/components/recomendedSection/RecomendedSection'
import { ClothesSection } from './components/clothesSection/ClothesSection'
import { AccessoriesSection } from './components/accessoriesSection/AccessoriesSection'
import { CollectionsSection } from './components/collectionsSection/CollectionsSection'
import { ReviewsSection } from './components/reviewsSection/ReviewsSection'
import { LoginOffer } from './components/LoginOffer'

export const MainPage = () => {

  return (
    <div className="flex flex-col items-center justify-start min-h-screen mx-auto max-w-[375px] bg-background relative">
        <Header/>

        <main className='mt-24 flex flex-col'>
          <MainHero/>
          <MainPageToggler/>
          <ShoesSection/>
          <RecomendedSection/>
          <ClothesSection/>
          <RecomendedSection/>
          <AccessoriesSection/>
          <RecomendedSection/>
          <CollectionsSection/>

          <LoginOffer/>
          <ReviewsSection/>
        </main>

        <Footer/>
    </div>
  )
}
