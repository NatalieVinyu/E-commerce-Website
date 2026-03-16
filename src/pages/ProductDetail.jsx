import React from 'react'
import { BsBagPlusFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";

function ProductDetail({ product, onBack }) {

  if (!product) {
    return <p>Product not found</p>
  }

  return (
    <div>
      <div onClick={onBack} className='flex items-center gap-4 cursor-pointer'>
        <IoIosArrowBack /> back
      </div>

      <div className='flex gap-8 mt-6'>
        <img src={product.image} alt={product.name} className='object-contain h-60 bg-white rounded-xl' />

        <div>
          <div>
            <h1 className='text-5xl'>{product.name}</h1>
            <h3 className='text-2xl'>{product.model}</h3>
            <h4 className='text-2xl'>{product.price}</h4>
            <p>{product.shortDescription}</p>
          </div>

          <button className='flex rounded bg-black text-white p-2 items-center gap-2'>
            <BsBagPlusFill /> Add to bag
          </button>
        </div>

      </div>

      <hr className='border-gray-300 border-t-4 my-8'/>

      <div className=''>
        <h1 className='text-4xl mb-4'>Description</h1>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductDetail
