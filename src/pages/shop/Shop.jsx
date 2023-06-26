import React, { useState } from 'react'
import { PRODUCTS } from '../../products'
import {BiSearch} from "react-icons/bi"
import SingleProduct from '../../components/product/SingleProduct'
import './shop.css'




const Shop = () => {
const [searchInput, setSearchInput] = useState("")
  const handleChange = (e)=>{
    setSearchInput(e.target.value)
  }
  console.log(searchInput);
  
  return (
    <div className="shop">
        <div className="shopTitle">
          <input type="text" placeholder='Search' onChange={handleChange} />
          <BiSearch className='search-icon' size={25} />
        </div>
        <div className="products" >
            {PRODUCTS.filter((val)=>val.productName.toLowerCase().includes(searchInput.toLowerCase())).map((data)=>(
                <SingleProduct data={data} key={data.id}/>
            ) 
            )}
            </div>
           
    </div>
  )
}

export default Shop