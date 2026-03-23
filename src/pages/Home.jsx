import React from 'react'
import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import ProductList from '../components/product/ProductList'
import ProductDetail from '../pages/ProductDetail'
import productsData from '../data/products'
import CartSummary from '../components/cart/CartSummary'
import CartPage from './CartPage'



function Home() {
  //TRACKS THE CURRENT SELECTED PRODUCT
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('')
  const [view, setView] = useState("list")
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product])
  }

  //FILTERING PRODUCTS BY NAME
  const filteredProducts = productsData.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    // SIDEBAR + CONTENT
    <div className='flex bg-gray-200'>
      {/* SIDEBAR NAVIGATION */}
        <Sidebar />

      {/* MAIN CONTENT */}
      <main className='flex flex-1 p-4 pl-32'>
        <div className='flex-1 pt-8'>
          
          {view === "list" &&
          <Navbar onSearch={setSearchQuery} />}

          {/* IF NO PRODUCT IS SELECTED -> SHOWS PRODUCTLIST.JSX
              IF A PRODUCT IS SELECTED -> SHOWS PRODUCTDETAILS.JSX */}
          {view === "list" && (
          <ProductList 
            onSelectProduct={(product) => {
              setSelectedProduct(product)
              setView("detail")
            }}
            products={filteredProducts} 
          />
          )} 

          {view === "detail" && (
          <ProductDetail 
            product={selectedProduct} 
            onBack={() => setView("list")} 
            onAddToCart={handleAddToCart}
          />
           )}

        {view === "cart" && (
          <CartPage 
            cartItems={cartItems}
            onBack={() => setView("list")} 
          />
        )}

        </div>
        

        <div className='hidden md:block w-1 bg-gray-300 self-stretch mx-2'></div>

        {view !== "cart" && (
        <div className='hidden md:block w-90'>
          <CartSummary setView={setView} cartItems={cartItems} />
        </div>
        )}

      </main>

    </div>
  )
}

export default Home
