import React from 'react'
import { PRODUCTS } from '../../products'
import Product from '../../components/product/Product'
import './shop.css'
const Shop = () => {
  return (
    <div className="shop">
        <div className="shopTitle">
            <h1>Gadget Gallery</h1>
        </div>
        <div className="products" >
            {PRODUCTS.map((data)=>(
                <Product data={data} key={data.id}/>
            ) 
            )}
            </div>
    </div>
  )
}

export default Shop