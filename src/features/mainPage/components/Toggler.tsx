export const Toggler = () => {
  return (
    <div className='m-4 rounded-2xl bg-black-200 p-4 inline-flex justify-between'>
        <label className='flex flex-col'>
        <span>Мужчинам</span>
        <input type="radio"/>
        </label>
        <label className='flex flex-col'>
        <span>Женщинам</span>
        <input type="radio"/>
        </label>
    </div>
  )
}
