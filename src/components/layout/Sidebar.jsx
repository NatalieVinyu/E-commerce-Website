import React from 'react'
import { NavLink } from "react-router-dom"
import Logo from '../../assets/Logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { BsShop } from "react-icons/bs";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";

function Sidebar() {
  const linkStyle = ({ isActive }) =>
    isActive ? "bg-black text-white font-semibold rounded" : "bg-black text-white rounded-xl";

  return (
    <aside className='w-24 ml-4 mt-2 mb-2 h-screen bg-white rounded-xl flex flex-col items-center py-6'>
      
      {/* LOGO */}
      <NavLink to="/" className='mb-8'>
        <img src={Logo} alt="Logo" className='h-10' />
      </NavLink>

      {/* NAVIGATION LINKS */}
      <div className='flex flex-col items-center gap-6 flex-1'>
        <NavLink 
          to="/"
        >
          <RxHamburgerMenu className='h-6 w-6'/> 
        </NavLink>

        <NavLink 
          to="/products"
          className={({ isActive }) => `px-4 py-2 ${linkStyle({ isActive })}`}
        >
          <BsShop className='h-6 w-6'/> 
        </NavLink>

        <NavLink 
          to="/cart"
          className={({ isActive }) => `px-4 py-2 ${linkStyle({ isActive })}`}
        >
          <RiShoppingBag4Fill className='h-6 w-6'/> 
        </NavLink>

        {/* LOGOUT */}
        <div className='mt-auto mb-6'>
          <NavLink 
            to="/logout"
          >
            <IoLogOut className='h-10 w-10 text-white bg-red-500 rounded-lg'/> 
          </NavLink>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar