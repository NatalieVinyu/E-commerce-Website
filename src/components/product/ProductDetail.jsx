import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../../data/products'
import { BsBagPlusFill } from "react-icons/bs";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found</p>
  }

  return (
    <div>
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
    </div>
  )
}

export default ProductDetail
