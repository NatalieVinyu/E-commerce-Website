import React from 'react'
import products from '../../data/products'
import ProductCard from './ProductCard'

function ProductList() {
  return (
    <div>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  )
}

export default ProductList
