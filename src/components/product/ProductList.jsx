import React from 'react'
import products from '../../data/products'
import ProductCard from '../product/ProductCard'

function ProductList({ products, onSelectProduct, onAddToCart }) {
  return (
    <div className='pt-12'>
      <div className='flex flex-wrap gap-6'>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onSelectProduct={onSelectProduct}
            onAddToCart={onAddToCart} />
        ))}
      </div>
      
    </div>
  )
}

export default ProductList
