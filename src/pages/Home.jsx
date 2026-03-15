import React from 'react'
import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import ProductList from '../components/product/ProductList'
import ProductDetail from '../pages/ProductDetail'


function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className='h-screen flex bg-gray-200'>
        <Sidebar />

      <main className='flex-1 p-8'>
        <Navbar />

        {!selectedProduct ? (
          <ProductList onSelectProduct={setSelectedProduct} />
        ) : (
          <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />
        )}

      </main>
    </div>
  )
}

export default Home
