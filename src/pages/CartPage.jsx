import React from 'react'
import { IoStar, IoStarHalf } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";


function CartPage({ cartItems, onBack, onClearCart, onUpdateQuantity }) {
  return (
    <div className='p-4'>

      <div className='flex justify-between items-center mb-6'>
        <button onClick={onBack} className='flex items-center gap-4 cursor-pointer'>
          <IoIosArrowBack /> Back to Products
        </button>

        <button onClick={onClearCart} className='bg-black text-white rounded-xl p-2'>Clear Cart</button>
      </div>

      <div className='text-center pb-10'>
        <h1 className='text-4xl font-thin'>Check your Bag Items</h1>
      </div>

      {cartItems.length === 0 ? (
        <p className='text-center text-gray-500'>Your cart is empty!</p>
      ) : (
      <div className='flex flex-col gap-4'>
        {cartItems.map((item, index) => (
          <div key={index} className='flex gap-6 bg-white rounded-xl p-6 mr-6'>
            <img src={item.image || ""} alt={item.name} className='h-40 w-40' />

            <div>
              <div className='text-2xl pb-2 font-thin'>{item.name}</div>
              <div className='text-gray-400'>{item.model || "default color"}</div>
              <div className='pt-2'>{item.shortDescription}</div>

              {/* STAR RATINGS */}
              <div className='flex items-center gap-2 py-4'>
                <IoStar className='text-green-600' />
                <IoStar className='text-green-600' />
                <IoStar className='text-green-600' />
                <IoStar className='text-green-600' />
                <IoStarHalf className='text-green-600' />
                <p className='text-green-600 font-thin'>4.5/5</p>
              </div>

              <div className='flex justify-between items-center mt-4'>
                <div className='text-lg'>${item.price}</div>
                <div className='flex items-center gap-4'>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className='w-8 h-8 text-red-500'>
                      -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className='w-8 h-8 text-green-500'>
                      +
                  </button>
                </div>
              </div>
          
            </div>
          </div>
        ))}
        
        
      </div>
      )}
      
    </div>
  )
}

export default CartPage
