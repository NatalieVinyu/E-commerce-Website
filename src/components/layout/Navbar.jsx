import React from 'react'
import { IoCart } from "react-icons/io5";


function Navbar({ onSearch, cartCount, onCartClick }) {
  const [query, setQuery] = React.useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <div className='flex flex-col sm:flex-row sm:items-center jsutify-between w-full px-4 md:px-8 gap-4'>
      {/* SEARCH BAR */}
      <div className='w-full max-w-full sm:max-w-xl'>
        <label className='block text-sm font-medium mb-1'>Search Item</label>
        <input type="text" value={query} onChange={handleChange} placeholder='Apple Watch, Samsung S21, Macbook Pro, ...' className='w-full shadow-lg rounded-lg px-4 py-3 focus:outline-none bg-white' />
      </div>

      <div className='absolute right-2 top-1/2 transform -translate-y-1/2 sm:hidden'>
        <IoCart className='w-6 h-6 cursor-pointer' />
        {cartCount > 0 && (
          <span className='absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
            {cartCount}
          </span>
        )}
      </div>
    </div>
  )
}

export default Navbar
