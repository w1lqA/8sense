import { ArrowIcon } from "@/shared/assets/icons/ArrowIcon";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: 'primary-m' | 'primary-l'| 'secondary-m' | 'secondary-l';
    title?: string;
    icon?: string;
    customIcon?: string;
}
  
export const Button = ({ variant = 'primary-m', className, title, icon, customIcon, ...props }: ButtonProps) => {
    const iconOrder = icon === 'l' ? '-order-1' : 'order-1';
    const iconColor = variant.includes('primary') ? 'text-black-400' : 'text-black-500';
    
    return(
        <Link href={'/'}
        className={`${icon === 'l' 
            ? 'pl-3 pr-4' : icon === 'r' 
            ? 'pl-4 pr-3' : 'px-4' } py-2 rounded-xl transition inline-flex items-center gap-2 font-jetbrains text-sm font-normal
        ${variant === 'primary-m' ? 'bg-black-600 text-white-500 hover:opacity-90' : ''}
        ${variant === 'primary-l' ? 'bg-black-600 text-white-500 hover:opacity-90' : ''}
        ${variant === 'secondary-m' ? 'bg-white-500 text-black-600 hover:opacity-90' : ''}
        ${variant === 'secondary-l' ? 'bg-white-500 text-black-600 hover:opacity-90' : ''}
        ${className || ''}
        `}
        {...props}
    >
        {customIcon && 
            <Image src={customIcon} alt=""/>
        }
        {icon && 
            <ArrowIcon className={`${iconOrder} ${iconColor}`}/>
        }
        {title}
    </Link>  
    )
 
};