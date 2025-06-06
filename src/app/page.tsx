import { MainPage } from "@/features/mainPage/MainPage";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto max-w-mobile bg-background">
      <Header classNameNav={'bg-black-200'}/>
      
      <MainPage/>

      <Footer/>
    </div>
  );
}
