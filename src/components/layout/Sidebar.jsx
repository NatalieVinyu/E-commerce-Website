import React from 'react'
import { useState } from 'react'
import { NavLink } from "react-router-dom"
import Logo from '../../assets/Logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { BsShop } from "react-icons/bs";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";

function Sidebar({ onCartClick }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const linkStyle = ({ isActive }) =>
    `p-2 rounded-xl ${isActive ? "bg-black text-white" : "text-gray-400 hover:bg-gray-100 hover:text-black" }`

  return (
    <div className='fixed z-50'>

      {/* HAMBURGER FOR SMALLER DEVICES */}
      <div className='md:hidden flex items-center p-4 bg-white '>
        <RxHamburgerMenu className='w-6 h-6 cursor-pointer' onClick={() => setIsCollapsed(!isCollapsed)}/>
      </div>

    {/* SIDEBAR */}
    <aside className={`bg-white min-h-screen md:relative z-50 rounded-xl flex flex-col py-4 p-2 md:ml-2 transition-transform duration-300 ${isCollapsed ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 `}>
      
      {/* LOGO */}
      <NavLink to="/" className='hidden mb-8 sm:flex items-center justify-center'>
        <img src={Logo} alt="Logo" className='h-10' />
      </NavLink>

      {/* NAVIGATION LINKS */}
      <div className='flex flex-col items-center gap-6 flex-1'>
        <NavLink 
          className={linkStyle}
          to="/"
        >
          <RxHamburgerMenu className='hidden sm:flex h-6 w-6'/>
        </NavLink>

        <NavLink 
          to="/product"
          className={linkStyle}
        >
          <BsShop className='h-5 w-5'/> 
        </NavLink>

        <NavLink 
          to="/cartpage"
          className="p-2 rounded-xl text-gray-400 hover:bg-gray-100 hover:text-black transition-colors cursor-pointer"
        >
          <RiShoppingBag4Fill className='h-5 w-5'/> 
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
    </div>
  )
}

export default Sidebar