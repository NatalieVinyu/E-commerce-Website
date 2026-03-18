import React from 'react'
import { BsBagPlusFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";

function ProductDetail({ product, onBack }) {

  //FALLBACK MESSAGE WHEN NO PRODUCT IS SELECTED
  if (!product) {
    return <p>Product not found</p>
  }

  return (
    <div>

      {/* BACK BUTTON RETURNS TO PRODUCTLIST.JSX */}
      <div onClick={onBack} className='flex items-center gap-4 cursor-pointer'>
        <IoIosArrowBack /> back
      </div>

      <div className='flex gap-8 mt-6'>
        {/* PRODUCT IMAGE */}
        <img src={product.image} alt={product.name} className='object-contain h-60 bg-white rounded-xl' />

        <div>
          <div>
            <h1 className='text-5xl'>{product.name}</h1>
            <h3 className='text-2xl'>{product.model}</h3>
            <h4 className='text-2xl'>{product.price}</h4>
            <p>{product.shortDescription}</p>
          </div>

          {/* ADD TO CART BUTTON */}
          <div className='flex justify-end mt-4'>
            <button 
              className='flex bg-black text-white rounded-lg p-2 items-center gap-2'

              //ADD PRODUCT TO CART
              onClick={() => onAddToCart?.(product)}>
              <BsBagPlusFill /> Add to bag
            </button>
          </div>
          
        </div>

      </div>

      {/* DIVIDER */}
      <hr className='border-gray-300 border-t-4 my-8'/>

      {/* FULL DESCRIPTION SECTION */}
      <div>
        <h1 className='text-4xl mb-4'>Description</h1>
        <p className='text-gray-600'>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductDetail
