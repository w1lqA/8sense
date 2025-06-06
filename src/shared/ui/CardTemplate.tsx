import { ReactNode } from "react"

export const CardTemplate = ({className, children}: {className?: string, children: ReactNode}) => {
  return (
    <div className={`${className} mx-auto flex flex-col bg-white-500 p-4 font-jetbrains w-full rounded-xl`}>
        {children}
    </div>
  )
}
