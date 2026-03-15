import React from 'react'
import { NavLink } from "react-router-dom"
import Logo from '../../assets/Logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { BsShop } from "react-icons/bs";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";


function Sidebar() {
  const linkStyle = ({ isActive }) =>
    isActive ? "text-gray-700 font-semibold" : "text-gray-600 hover:bg-gray-100";

  return (
    <div>
      <aside className='w-24 h-screen bg-white rounded-xl flex flex-col items-center text-center'>
       <div>
        
        {/* LOGO */}
        <div className='p-6'>
          <NavLink to="/">
            <img src={ Logo } alt="Logo" className='h-10' />
          </NavLink>
        </div>

        {/* NAVIGATION */}
        <nav className='flex flex-col gap-2 mt-6'>
          <NavLink 
            to="/"
            className={({ isActive }) => `px-4 py-2 ${linkStyle({ isActive })}`
            }>
            <RxHamburgerMenu className='h-6 w-6'/> 
          </NavLink>

          <NavLink 
            to='/products'
            className={({ isActive }) => `px-4 py-2 ${linkStyle({ isActive })}`
            }>
            <BsShop className='h-6 w-6'/> 
          </NavLink>

          <NavLink 
            to="/"
            className={({ isActive }) => `px-4 py-2 ${linkStyle({ isActive })}`
            }>
            <RiShoppingBag4Fill className='h-6 w-6'/> 
          </NavLink>


          <div className='mt-auto mb-6'>
            <NavLink 
              to="/"
              className={linkStyle}
              >
              <IoLogOut className='h-6 w-6'/> 
            </NavLink>
          </div>
          
        </nav>
       </div>
      </aside>
      
    </div>
  )
}

export default Sidebar
