import React from 'react'
import { IoStar, IoStarHalf } from "react-icons/io5";

function CartPage() {
  return (
    <div className='h-screen'>
      <div className='flex flex-col'>
        <div>Image</div>
        <div>
          <div>Dell XPS 13</div>
          <div className='text-gray-400'>White</div>
          <div>description</div>

          {/* STAR RATINGS */}
          <div className='flex gap-2 py-2'>
            <IoStar className='text-green-600' />
            <IoStar className='text-green-600' />
            <IoStar className='text-green-600' />
            <IoStar className='text-green-600' />
            <IoStarHalf className='text-green-600' />
          </div>

          <div className='flex justify-between'>
            <div>$1799.99</div>
            <div>- 1 +</div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CartPage
