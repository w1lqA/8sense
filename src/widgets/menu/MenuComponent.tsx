'use client'
import { Tab } from "./Tab"
import { useState } from "react"
import { DropDownMenu } from "./DropDownMenu"
import { Button } from "@/shared/ui/Button"
import { Search } from "@/shared/ui/Search"

export const MenuComponent = () => {
  const [currentActive, setCurrentActive] = useState('w')
  
  const dropDownMenuData = {
    'Обувь': ['Все товары', 'Кроссовки и кеды', 'Спортивная обувь', 'Тапки', 'Сапоги'],
    'Одежда': [
      'Все товары',
      'Футболки',
      'Толстовки и худи',
      'Свитеры',
      'Брюки и джинсы',
      'Куртки и пальто',
    ],
    'Аксессуары': [
      'Все товары',
      'Сумки и рюкзаки',
      'Головные уборы',
      'Очки',
      'Часы',
      'Украшения',
      'Кошельки и обложки',
      'Ремни',
    ]
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen mx-auto pt-24 relative">
      <div className="flex flex-col max-w-mobile-content w-full">
        <Search/>
        <div className="flex flex-col font-jetbrains mb-6">
          <div className="inline-flex mt-4 border-b border-black-300 items-center justify-start gap-4">
            <Tab onClick={() => setCurrentActive('w')} isActive={currentActive === 'w'} title="ЖЕНЩИНАМ"/>
            <Tab onClick={() => setCurrentActive('m')} isActive={currentActive === 'm'} title="МУЖЧИНАМ"/>
          </div>
          {Object.entries(dropDownMenuData).map(([title, items]) => (
            <DropDownMenu key={title} title={title} data={items}/>
          ))}
        </div>
        <Button title="Войти в аккаунт" icon="r" variant="primary-m" className="self-start mb-4"/>
      </div>
    </div>
  )
}


