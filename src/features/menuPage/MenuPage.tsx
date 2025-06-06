'use client'
import { Tab } from "@/features/menuPage/components/Tab"
import { useState } from "react"
import { DropDownMenu } from "@/features/menuPage/components/DropDownMenu"
import { Button } from "@/shared/ui/Button"
import { Search } from "@/shared/ui/search/Search"
import { Login } from "@/features/menuPage/components/login/Login"
import { ArrowIcon } from "@/shared/assets/icons/ArrowIcon"
import Link from "next/link"
import { ProfileTitle } from "@/features/profilePage/components/ProfileTitle"

export const MenuPage = () => {
  const [currentActive, setCurrentActive] = useState('w')
  const [searchQuery, setSearchQuery] = useState("")
  const [loginState, setLoginState] = useState<'phoneInput' | 'codeInput' | 'codeInputError' | 'success'>('phoneInput');

  const dropDownMenuData = {
    'Обувь': [
      'Все товары',
      'Кроссовки и кеды',
      'Спортивная обувь', 
      'Тапки', 
      'Сапоги'
    ],
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
  const dropDownMenuData2 = {
    'Клиентам': [
      'Оплата',
      'Доставка',
      'Помощь',
      'Как выбрать размер',
      'Гарантия'
    ],
    'О нас': [
      'Наша история',
      'Контакты',
    ]
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen mx-auto pt-24 relative">
      <div className="flex flex-col max-w-mobile-content w-full">
        <Search query={searchQuery} onQueryChange={setSearchQuery} />
        {loginState === 'success' && 
          <Link href={'/profile'} className="flex flex-row mt-4 items-center justify-between">
            <ProfileTitle/>
            <ArrowIcon className="w-full max-w-6 text-black-400"/>
          </Link>
        }
        {!searchQuery && 
          <div className="flex flex-col font-jetbrains mb-6">
            <div className="inline-flex mt-4 border-b border-black-300 items-center justify-start gap-4">
              <Tab onClick={() => setCurrentActive('w')} isActive={currentActive === 'w'} title="ЖЕНЩИНАМ"/>
              <Tab onClick={() => setCurrentActive('m')} isActive={currentActive === 'm'} title="МУЖЧИНАМ"/>
            </div>
            {Object.entries(dropDownMenuData).map(([title, items]) => (
              <DropDownMenu key={title} title={title} data={items}/>
            ))}
            <Button onClick={() => setLoginState('success')} title="Войти в аккаунт" icon="r" variant="primary-m" className="self-start mt-6 mb-2"/>
            <div className="flex flex-col font-jetbrains mb-6">
            {Object.entries(dropDownMenuData2).map(([title, items]) => (
                <DropDownMenu key={title} title={title} data={items}/>
              ))}
            </div>
          </div>
        }
      </div>
      {searchQuery && 
        <Login loginState={loginState} setLoginState={setLoginState}/>
      }
    </div>
  )
}


