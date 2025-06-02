"use client"; 
import BgImage from "@/features/mainPage/assets/login-offer-image.png"
import { Button } from "@/shared/ui/Button";
import { CloseButton } from "@/shared/ui/CloseButton";
import { useState } from "react";

export const LoginOffer = () => {
    const [isOpen, setIsOpen] = useState(true)
  return (
    <li className={`${isOpen ? 'flex' : 'hidden'} relative flex-col mt-4 items-stretch rounded-2xl font-jetbrains object-cover overflow-clip p-6 mx-auto max-w-mobile-content text-white-500 bg-black-600 bg-cover bg-center w-full`}
        style={{ backgroundImage: `url('${BgImage.src}')` }}>
        <div className="absolute top-0 left-0 h-full bg-linear-0 from-transparent to-black opacity-60 w-full"></div>
        <div className=" flex flex-col items-stretch z-10 text-center">
            <CloseButton onClick={() => setIsOpen(false)} className="self-end"/>
            <h2 className="text-mobile-h1 mb-2">АВТОРИЗИРУЙСЯ
            И ПОЛУЧИ КЕШБЕК 10%</h2>
            <p className="text-sm leading-4 font-normal mb-56">Оплачивай баллами или накапливай 
            их при каждой покупке</p>
            <Button title="ВОЙТИ В ЛИЧНЫЙ КАБИНЕТ" variant="secondary-l" className="w-full justify-center py-4 mb-2"/>
            <p className="text-mobile-text-description font-inter">Ознакомиться в условиями акции возможно в чате поддержки или в публичной оферте</p>
        </div>
    </li>
  )
}
