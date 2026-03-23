import React from 'react'
import { useNavigate } from 'react-router-dom'

function CartSummary({ setView }) {

  return (
    <div>
      <h1 className='text-center text-4xl font-sm pt-8'>Bag</h1>
      <button
        onClick={() => setView("cart")}
        className='flex items-center rounded-xl bg-gray-400 px-4 py-2 cursor-pointer'>View Cart</button>
    </div>
  )
}

export default CartSummary
