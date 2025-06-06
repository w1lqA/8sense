import { Header } from "@/widgets/Header";
import { MenuPage } from "@/features/menuPage/MenuPage"

export default function Menu () {
  return (
    <div className="min-h-screen mx-auto max-w-mobile bg-background ">
      <Header/>
      <MenuPage/>
    </div>
  );
}
