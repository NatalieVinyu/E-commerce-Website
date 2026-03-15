import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetail from './components/product/ProductDetail'
import Home from './pages/Home'

function App() {
  return (
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetail />} />

      </Routes>
    
  )
}

export default App
