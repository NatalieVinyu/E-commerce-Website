import React from 'react'

function ProductCard({ product, onSelectProduct }) {
  return (
    <div onClick={() => onSelectProduct(product)}>
      
          <img src={product.image} alt={product.name} className='h-50 w-50 object-cover bg-white rounded-xl mb-4 p-4' />
          <h3>{product.name}</h3>
          <h4 className='text-gray-400'>{product.model}</h4>
          <p>$ {product.price}</p>
      
    </div>
  )
}

export default ProductCard;
