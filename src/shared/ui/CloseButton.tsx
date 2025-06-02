import { MouseEventHandler } from "react";
import { CrossIcon } from "../assets/icons/CrossIcon"

export const CloseButton = ( {className, onClick}: {className: string; onClick: MouseEventHandler<HTMLButtonElement>} ) => {
  return (
    <button onClick={onClick} className={`${className}`}>
        <CrossIcon className="text-black-200"/>
    </button>
  )
}
