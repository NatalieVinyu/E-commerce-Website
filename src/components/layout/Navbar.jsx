import React from 'react'
import { useState } from 'react'

function Navbar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <div className='flex flex-col items-center'>
      {/* SEARCH BAR */}
      <div>
        <label className='block text-sm font-medium mb-1'>Search Item</label>
        <input type="text" value={query} onChange={handleChange} placeholder='Apple Watch, Samsung S21, Macbook Pro, ...' className='w-96 shadow-lg rounded-lg px-4 py-3 focus:outline-none bg-white' />
      </div>
    </div>
  )
}

export default Navbar
