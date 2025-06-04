import { Header } from "@/widgets/Header";
import { MenuComponent } from "@/widgets/menu/MenuComponent"

export default function Menu () {
  return (
    <div className="min-h-screen mx-auto max-w-[375px] bg-background ">
      <Header/>
      <MenuComponent/>
    </div>
  );
}
