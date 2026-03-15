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
      <div>
        <img src={product.image} alt={product.name} className='object-contain h-80' />

        <div>
          <h1>{product.name}</h1>
          <h3>{product.model}</h3>
          <h4>{product.price}</h4>
          <p>{product.shortDescription}</p>
        </div>

      </div>

      <button>
        <BsBagPlusFill /> Add to bag
      </button>

      <hr />
      <div>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductDetail
