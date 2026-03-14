import React from 'react'
import products from '../../data/products'
import ProductCard from './ProductCard'

function ProductList() {
  return (
    <div className='pt-12'>
      <div className='flex flex-wrap gap-6'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  )
}

export default ProductList
