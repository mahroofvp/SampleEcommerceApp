import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './singleproduct.scss';

const SingleProduct = ({ data }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { id, productName, price, productImage } = data;
  const cartItemAmount = cartItems[id];

  return (
    <div className='product-card'>
      <div className='image-container'>
        <img className='product-image' src={productImage} alt={productName} />
      </div>
      <div className="product-info">
        <h3 className='product-name'>{productName}</h3>
        <p className='product-price'>${price}</p>
      </div>
      <div className='button-container'>
        <button className='add-to-cart-btn' onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && `(${cartItemAmount})`}
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
