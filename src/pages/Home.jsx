import React from 'react'
import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import ProductList from '../components/product/ProductList'
import ProductDetail from '../pages/ProductDetail'


function Home() {
  //TRACKS THE CURRENT SELECTED PRODUCT
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    // SIDEBAR + CONTENT
    <div className='flex bg-gray-200'>
      {/* SIDEBAR NAVIGATION */}
        <Sidebar />

      {/* MAIN CONTENT */}
      <main className='flex flex-1 p-4 pl-32'>
        <div className='flex-1'>
          <Navbar />

          {/* IF NO PRODUCT IS SELECTED -> SHOWS PRODUCTLIST.JSX
              IF A PRODUCT IS SELECTED -> SHOWS PRODUCTDETAILS.JSX */}
          {!selectedProduct ? (
          <ProductList onSelectProduct={setSelectedProduct} />
          ) : (
          <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />
           )}
        </div>
        

        <div className='hidden md:block w-1 bg-gray-300 self-stretch mx-2'></div>

      </main>

    </div>
  )
}

export default Home
