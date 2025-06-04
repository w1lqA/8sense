export const Tab = ({className, title, isActive, onClick}: {className?: string, title: string, isActive?: boolean, onClick: () => void}) => {
  return (
    <button onClick={onClick} className={`${className} py-1 border-black-600 text-black-600 text-mobile-text-medium ${isActive ? 'border-b' : 'border-none'}`}>
      {title}
    </button>
  )
}
