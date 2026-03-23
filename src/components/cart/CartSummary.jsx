import React from 'react'
import { useNavigate } from 'react-router-dom'

function CartSummary({ setView, cartItems, view }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className='h-screen p-4'>
      <h1 className='text-center text-4xl font-sm pt-8'>Bag</h1>

      <div className='flex flex-wrap gap-2 pt-8'>
        {cartItems.length === 0 ? (
          <p className='text-gray-400'>No items yet</p>
        ) : (
          cartItems.map((item, idx) => (
            <div key={idx} className='p-2'>
              <img src={item.image} alt={item.name} className='h-24 w-24 object-cover p-2 bg-white rounded-xl'/>
            </div>
          ))
        )}
      </div>

      <div className='flex justify-center mt-4'>
        {view === "cart" ? (
          <div className='w-full'>
            <div className='flex justify-between'>
              <span className='font-medium'>Total</span>
              <span className='font-medium'>${total.toFixed(2)}</span>
            </div>
            <button className='bg-black text-white mt-6 px-4 py-2 rounded-xl cursor-pointer'>
              Checkout
            </button>
          </div>
        ) : (
          <button onClick={() => setView("cart")} className='bg-black text-white px-4 py-2 rounded-xl cursor-pointer'>
            View Cart
          </button>
        )}
      </div>
      
    </div>
  )
}

export default CartSummary
