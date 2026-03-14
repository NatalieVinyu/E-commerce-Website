import React from 'react'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import ProductList from '../components/product/ProductList'


function Home() {
  return (
    <div className='h-screen flex'>
      <div className='pl-4 py-4'>
        <Sidebar />
      </div>

      <main className='flex-1 p-8'>
        <Navbar />
        <ProductList/>

      </main>
    </div>
  )
}

export default Home
