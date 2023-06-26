import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import './navbar.css'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { PRODUCTS } from '../../products'


const Navbar = () => {
const {cartItems}= useContext(ShopContext)

let total = Object.values(cartItems).reduce((acc,val)=> acc+val,0)

return (
    <div className="navbar">
      <div><Link to="/" style={{textDecoration:"none", opacity:"80%"}}><h1 >Gadget Gallery</h1></Link></div>
        <div className="links">
           
            <Link to="/" > Shop </Link>
            <Link to="/cart" >
              
           {total>0?<div className='badge'> {total}</div>:null }
            <BsCart3 className='cart-icon' size={32}/>
             
             </Link>
            
        </div>
    </div>
  )
}


export default Navbar