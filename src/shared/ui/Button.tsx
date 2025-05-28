import { ArrowIcon } from "@/shared/assets/ArrowIcon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary-m' | 'primary-l'| 'secondary-m' | 'secondary-l';
    title?: string;
    icon?: string;
}
  
export const Button = ({ variant = 'primary-m', className, title, icon, ...props }: ButtonProps) => {
    const iconOrder = icon === 'l' ? '-order-1' : 'order-1';
    const iconColor = variant.includes('primary') ? 'text-black-400' : 'text-black-500';
    
    return(
        <button
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
        {icon && 
            <ArrowIcon className={`${iconOrder} ${iconColor}`}/>
        }
        {title}
    </button>  
    )
 
};