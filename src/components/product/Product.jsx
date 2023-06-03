import React from 'react'

const Product = ({data}) => {
    const {id, productName, price, productImage }=data
  return (
    <div className='product'>
        <div className='img-div'>

        <img  src={productImage} alt="" />
        </div>
        <div className="description">
            <p>
               <b>{productName}</b> 
            </p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn'>Add To Cart</button>
    </div>
  )
}

export default Product