import React from 'react'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'


function Home() {
  return (
    <div className='flex'>
      <Sidebar />

      <main className='flex-1 p-8'>
        <Navbar />
      </main>
    </div>
  )
}

export default Home
