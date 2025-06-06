export const LoginInput = ({
    value,
    onChange
  }: {
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  }) => {
  return (
    <div className="inline-flex items-center gap-2 border-2 w-full border-black-300 justify p-3 rounded-lg">
        <input
            type="tel"
            placeholder="+7 (999) 999 99 99"
            className=" placeholder:text-black-500 text-black-600 outline-0 text-mobile-text-medium w-full"
            value={value}
            onChange={onChange}
        />
    </div>
  )
}
