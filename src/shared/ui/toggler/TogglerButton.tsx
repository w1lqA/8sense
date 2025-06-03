import Image, { StaticImageData } from 'next/image'

export const TogglerButton = (
    {icon, isActive, onClick, title, description}: 
    {icon: StaticImageData; isActive: boolean; onClick: () => void; title: string; description: string}) => {
    return (
        <button onClick={onClick} className={`flex flex-row items-center transition-colors gap-2 p-1 rounded-[10px] ${
            isActive ? 'bg-white-500 drop-shadow-[#7F82A120] drop-shadow-xl' : 'bg-transparent'
          }`}>
            <Image className="rounded-full max-w-10 w-full" src={icon} alt=""/>
            <p className="flex flex-col items-start text-start">
                <span className="text-black-600 text-mobile-h4">{title}</span>  
                <span className="text-black-500 text-mobile-text-small max-w-24 whitespace-nowrap overflow-hidden text-ellipsis">{description}</span>
            </p>
        </button>
    )
}
