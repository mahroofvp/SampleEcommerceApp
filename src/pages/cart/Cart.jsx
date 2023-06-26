import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import { CartItem } from '../../components/cartItem/CartItem'
import './cart.css'
import emptyCart from '../../assets/bgimg/EmptyCart.png'
import {useNavigate} from 'react-router-dom'


const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        {/* <h1> Your Cart Items </h1>  */}
      </div>
      <div className="cartItems">
        {PRODUCTS.map((data)=>{
          if(cartItems[data.id] !== 0){
            return  <CartItem  data={data} key={data.id} />    
          }
        })}
      </div>

      {totalAmount>0 ?<div className="checkout">
        <p> Subtotal: ${totalAmount}</p>
        <div className='cart-black-btns'>

        <button onClick={()=> navigate('/')} > Continue Shopping</button>
        </div>
      </div>: <div className='empty-cart-img'><img src={emptyCart} alt="" /></div> }

    </div>
  )
}

export default Cart