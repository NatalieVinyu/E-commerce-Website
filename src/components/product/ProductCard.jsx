import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div >
      <div >
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} className='h-50 w-50 object-cover bg-white rounded-xl mb-4 p-4' />
          <h3>{product.name}</h3>
          <h4 className='text-gray-400'>{product.model}</h4>
          <p>$ {product.price}</p>
        </Link>
      </div>
      
      
    </div>
  )
}

export default ProductCard;
