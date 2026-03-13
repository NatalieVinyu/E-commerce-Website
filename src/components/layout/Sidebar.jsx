import React from 'react'
import { NavLink } from "react-router-dom"
import Logo from '../../assets/Logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { BsShop } from "react-icons/bs";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";


function Sidebar() {
  const linkStyle = ({ isActive }) =>
    isActive ? "bg-gray-700 text-black font-semibold" : "text-gray-600 hover:bg-gray-100";

  return (
    <div>
      <aside className='h-sreen w-64 bg-blue-700 border-r flex flex-col'>
       <div>
        
        {/* LOGO */}
        <div className='p-6'>
          <NavLink to="/">
            <img src={ Logo } alt="Logo" className='h-10' />
          </NavLink>
        </div>

        {/* NAVIGATION */}
        <nav className='flex flex-col gap-2 px-4'>
          <NavLink 
            to="/"
            className={({ isActive }) => `px-4 py-2 rounded ${linkStyle({ isActive })}`
            }>
            <RxHamburgerMenu /> 
          </NavLink>

          <NavLink 
            to="/"
            className={({ isActive }) => `px-4 py-2 rounded ${linkStyle({ isActive })}`
            }>
            <BsShop /> 
          </NavLink>

          <NavLink 
            to="/"
            className={({ isActive }) => `px-4 py-2 rounded ${linkStyle({ isActive })}`
            }>
            <RiShoppingBag4Fill /> 
          </NavLink>

          <NavLink 
            to="/"
            className={({ isActive }) => `px-4 py-2 rounded ${linkStyle({ isActive })}`
            }>
            <IoLogOut /> 
          </NavLink>
        </nav>
       </div>
      </aside>
      
    </div>
  )
}

export default Sidebar
