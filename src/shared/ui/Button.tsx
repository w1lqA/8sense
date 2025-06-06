import { ArrowIcon } from "@/shared/assets/icons/ArrowIcon";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary-m" | "primary-l" | "secondary-m" | "secondary-l";
  title?: string;
  icon?: "l" | "r";
  customIcon?: string;
  buttonType?: "button" | "link";
  href?: string;
}

export const Button = ({
  variant = "primary-m",
  className = "",
  title,
  icon,
  customIcon,
  buttonType = "button",
  href = "/",
  ...props
}: ButtonProps) => {
  const iconOrder = icon === "l" ? "-order-1" : "order-1";
  const iconColor = variant.includes("primary")
    ? "text-black-400"
    : "text-black-500";

  const baseClasses = `${icon === "l" ? "pl-3 pr-4" : icon === "r" ? "pl-4 pr-3" : "px-4"} 
    rounded-xl transition inline-flex items-center gap-2 leading-4 font-jetbrains text-sm font-normal
    ${
      variant === "primary-m"
        ? "bg-black-600 py-2 text-white-500 hover:opacity-90"
        : ""
    }
    ${
      variant === "primary-l"
        ? "bg-black-600 py-3 text-white-500 hover:opacity-90"
        : ""
    }
    ${
      variant === "secondary-m"
        ? "bg-white-500 py-2 text-black-600 hover:opacity-90"
        : ""
    }
    ${
      variant === "secondary-l"
        ? "bg-white-500 py-3 text-black-600 hover:opacity-90"
        : ""
    }
    ${className}`;

  const content = (
    <>
      {customIcon && <Image src={customIcon} alt="" />}
      {icon && <ArrowIcon className={`${iconOrder} ${iconColor}`} />}
      {title}
    </>
  );

  if (buttonType === "link") {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
};
