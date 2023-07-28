
export const Filters = () => {
  return (
    <div className='flex flex-col mt-2 gap-2 md:flex-row md:justify-center lg:w-2/4 lg:justify-start lg:gap-6'>
      <label htmlFor="">By pages</label>
      <input className="" type="range" min={0} max={20}/>
      <div className="flex gap-2 items-center">
        <label htmlFor="">By category</label>
        <select className='bg-gray-700 p-1' name="" id="">
          <option value="todas">All</option>
          <option value="terror">Terror</option>
          <option value="fantasia">Fantasy</option>
        </select>
      </div>
    </div>
  )
}
