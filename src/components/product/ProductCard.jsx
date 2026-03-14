import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div>
      <Link>
        <img src={product.image} alt={product.name} className='object-cover bg-white rounded-xl mb-4' />
        <h3>{product.name}</h3>
        <h4 className='text-gray-400'>{product.model}</h4>
        <p>R {product.price}</p>
      </Link>
      
    </div>
  )
}

export default ProductCard;
