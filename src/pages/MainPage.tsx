import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen mx-auto max-w-[375px] bg-background relative">
        <Header/>

        <Footer/>
    </div>
  )
}
