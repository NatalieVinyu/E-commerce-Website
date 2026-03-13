import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-col items-center'>
      {/* SEARCH BAR */}
      <div>
        <label className='block text-sm font-meduim mb-1'>Search Item</label>
        <input type="text" placeholder='Apple Watch, Samsung S21, Macbook Pro, ...' className='w-96 shadow-lg rounded-lg px-4 py-3 focus:outline-none bg-white' />
      </div>
    </div>
  )
}

export default Navbar
