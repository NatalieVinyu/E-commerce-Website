import React from 'react'
import { useNavigate } from 'react-router-dom'

function CartSummary({ setView, cartItems }) {

  return (
    <div className='p-4'>
      <h1 className='text-center text-4xl font-sm pt-8'>Bag</h1>

      <div className='flex gap-4 pt-8'>
        {cartItems.length === 0 ? (
          <p className='text-gray-400'>No items yet</p>
        ) : (
          cartItems.map((item, idx) => (
            <div key={idx} className='flex items-center gap-3 '>
              <img src={item.image} alt={item.name} className='h-28 object-cover bg-white rounded-xl'/>
            </div>
          ))
        )}
      </div>
      
      <div className='flex justify-center mt-4'>
        <button
          onClick={() => setView("cart")}
          className='bg-black text-white px-4 py-2 rounded-xl cursor-pointer'
          >
          View Cart
      </button>
      </div>
      
    </div>
  )
}

export default CartSummary
