import React from 'react'
import { useNavigate } from 'react-router-dom'

function CartSummary({ setView }) {

  return (
    <div>
      <h1 className='text-center text-4xl font-sm pt-8'>Bag</h1>
      
      <div className='flex items-center rounded-xl cursor-pointer'>
        <button
          onClick={() => setView("cart")}
          >
          View Cart
      </button>
      </div>
      
    </div>
  )
}

export default CartSummary
