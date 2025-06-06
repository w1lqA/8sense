'use client'
import { Button } from "@/shared/ui/Button"
import { LoginInput } from "./LoginInput"
import Link from "next/link"
import { SocialIcons } from "@/shared/assets/icons/SocialIcons"
import { CodeInput } from "./CodeInput"

export const Login = ({loginState, setLoginState}: {loginState: string, setLoginState: (value: 'phoneInput' | 'codeInput' | 'codeInputError' | 'success') => void}) => {
    // const handleSubmit = (e: React.Fo    rmEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    // }

    return (
    <div className="flex flex-col w-full p-4 bg-white-600 rounded-t-3xl mt-auto pb-8">
        {loginState === 'phoneInput'
        ?
            <div className="flex flex-col w-full gap-4">
                <h1 className="text-mobile-text-cost-medium text-black-600">Войти в аккаунт</h1>
                <LoginInput/>
                <Button type="button" onClick={() => setLoginState('codeInput')} title="Войти" variant="primary-l" className="justify-center text-center py-4"/> 
                <p className="inline-flex items-center text-mobile-text-category gap-2 self-center">
                    <span className="text-black-500">или</span>
                    <Link href={'/'} className="text-black-600 inline-flex items-center gap-2">
                        <SocialIcons variant="telegram" className="w-4 h-4"/>
                        Войти через Telegram
                    </Link>
                </p>
            </div> 
        : 
            <div className="flex flex-col w-full gap-4">
                <h1 className="text-mobile-text-cost-medium text-black-600">Подтвердите телефон</h1>
                <p className="text-mobile-text-category text-black-500 text-start">
                    <span>
                        Отправили смс на номер <span className="text-black-600">+7 999 999 99 99</span>
                    </span> <br />
                    <span>
                        Введите код, чтобы войти в аккаунт
                    </span>
                </p>
                <CodeInput loginState={loginState}/>
                <Button type="button" onClick={() => setLoginState('success')} title="Войти" variant="primary-l" className="justify-center text-center py-4"/> 
                <button onClick={() => setLoginState('phoneInput')} className="underline text-mobile-text-description font-inter text-start text-black-500">Вернуться назад</button>
            </div> 
         }
    </div>
  )
}
