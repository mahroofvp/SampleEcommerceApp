import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import { CartItem } from '../../components/cartItem/CartItem'
import emptyCart from '../../assets/bgimg/EmptyCart.png'
import {useNavigate} from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';
import './cart.scss'


const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()

  const stripeKey =import.meta.env.VITE_STRIPE_KEY;

  const makePayment = token => {
    const body = {
      token,
      PRODUCTS
    }
    const headers = {
      "Content-Type": "appliation/json"
    }
     return fetch('https://loclhost:7000/payment',{
      method:"POST",
      headers,
      body: JSON.stringify(body)
     }).then(response => {
      console.log("RESPONSE ", response)
      const {status} = response;
      console.log("STATUS", status);
     })
     .catch(error => console.log(error))
    
  }
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
        <div>

      <StripeCheckout
        token={makePayment}
        stripeKey={stripeKey}
        amount={totalAmount * 100}
      >
        <button className='button'>💲Pay</button>
      </StripeCheckout>
        </div>
        <div className='cart-black-btns'>

        <button onClick={()=> navigate('/')} >Continue Shopping</button>
        </div>
      </div>: <div className='empty-cart-img'><img src={emptyCart} alt="" /></div> }


    </div>
  )
}

export default Cart