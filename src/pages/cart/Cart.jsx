import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import { CartItem } from '../../components/cartItem/CartItem'
import './cart.css'


const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  return (
    <div className='cart'>
      <div>
        <h1> Your Cart Items </h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((data)=>{
          if(cartItems[data.id] !== 0){
            return  <CartItem  data={data} key={data.id} />    
          }
        })}
      </div>

      <div className="checkout">
        <p> Subtotal: {getTotalCartAmount()}</p>
        <div className='cart-black-btns'>

        <button > Continue Shopping</button>
        <button> Cheakout </button>
        </div>
      </div>

    </div>
  )
}

export default Cart