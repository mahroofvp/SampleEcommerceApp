import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="links">
           
            <Link to="/" > Shop </Link>
            <Link to="/cart" > <BsCart3 size={32}/> </Link>
            
        </div>
    </div>
  )
}

export default Navbar