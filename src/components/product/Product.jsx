import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const Product = ({data}) => {
  const {addToCart, cartItems} = useContext(ShopContext)
    const {id, productName, price, productImage }=data
    const cartItemAmount = cartItems[id];
  return (
    <div className='product' >
        <div className='img-div'>

        <img  src={productImage} alt="" />
        </div>
        <div className="description">
            <p>
               <b>{productName}</b> 
            </p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
  )
}

export default Product