import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const SingleProduct = ({data}) => {
  const {addToCart, cartItems} = useContext(ShopContext)
    const {id, productName, price, productImage }=data
    const cartItemAmount = cartItems[id];
    
  return (
    <div className='product' >
        <div className='img-div'>

        <img style={{height:"130px" , width:"140px"}} src={productImage} alt="" />
        </div>
        <div className="description">
            <p>
               <b>{productName}</b> 
            </p>
            <p>${price}</p>
        </div>
        <div className='card-btn-div'>

        <button  className='addToCartBttn' onClick={()=>addToCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>
    </div>
  )
}

export default SingleProduct