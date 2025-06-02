import MainImage from '@/shared/assets/images/main-page-dress.png'
import MainImageBg from '@/shared/assets/images/main-page-dress-bg.png'
import Image from 'next/image'
import { Button } from '@/shared/ui/Button'
import buttonIcons from '@/shared/assets/icons/main-button-icons.svg'
import heroGradient from '@/features/mainPage/assets/hero-gradient.svg'

export const MainHero = () => {
  return (
    <section className='flex flex-col items-center relative object-cover rounded-b-2xl pb-4'>
        <h1 className='max-w-64 text-center text-mobile-h4 font-jetbrains'>Покупайте из 150+ платформ
        в одном месте</h1>
        <div className='flex flex-col items-center relative'>
        <Image src={MainImageBg} alt="" className='p-6' />
        <Image src={MainImage} alt="" className='absolute w-full mx-auto max-w-56'/>
        </div>
        <Button variant='secondary-l' customIcon={buttonIcons} title={`ВЕЧЕРНИЕ ПЛАТЬЯ`} className='w-full z-10 py-2 justify-between mx-4 max-w-[343px]' icon='r'/>
        <Image src={heroGradient} alt="" className='absolute bottom-0 rounded-b-2xl'/>
    </section>
  )
}
