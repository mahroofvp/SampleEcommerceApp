import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import { RxAvatar } from "react-icons/rx"
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { PRODUCTS } from '../../products'
import logo from '../../../public/Logo.png'
import './navbar.scss'


const Navbar = () => {
const {cartItems}= useContext(ShopContext)
const navigate = useNavigate();
const isSigninRoute = window.location.pathname === "/signin"
const isLoginRoute = window.location.pathname === "/login"
const isHomeRoute = window.location.pathname === '/'
let total = Object.values(cartItems).reduce((acc,val)=> acc+val,0)

return (
    <div className="navbar">
      <div ><Link to="/" style={{textDecoration:"none", opacity:"80%" ,marginLeft:"15px"}}> <img style={{height:"40px", width:"80px"}} src={logo} alt="" /></Link></div>
        <div className="links">
          {!isSigninRoute && !isLoginRoute ? <div className='avatar-div' ><Link to={"/signin"}><div style={{display:"flex", flexDirection:"row", alignItems:"center"}}><RxAvatar color='white' className='avatar-icon' /><h4>Sign in</h4></div></Link></div>:""} 
           
          { !isHomeRoute ? <Link to="/" className='shop-link'> Shop </Link>:
            <Link to="/cart" >
           {
            
           total>0?<div className='badge'> {total}</div>:null 
           }
             <BsCart3 style={{height:"25px", width:"25px"}} className='cart-icon' size={32}/>
             
             </Link>}
            
        </div>
    </div>
  )
}


export default Navbar