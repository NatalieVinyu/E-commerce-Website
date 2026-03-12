import React from 'react'
import { NavLink } from "react-router-dom"
//import Logo from 'src/assets/Type=Transparent.png'

function Sidebar() {
  return (
    <div>
      <div>
        <nav>
          {/* LOGO 
          <NavLink to="/">
            { Logo }
          </NavLink>*/}

          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Cart</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
