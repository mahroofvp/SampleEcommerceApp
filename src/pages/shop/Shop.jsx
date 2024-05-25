import React, { useState } from 'react'
import { PRODUCTS } from '../../products'
import {BiSearch} from "react-icons/bi"
import SingleProduct from '../../components/product/SingleProduct'
import Carousel from '../../components/carousel/Carousel'
import Slider from '../../components/banksSlider/Slider'
import banner from '../../../public/banner.png'
import './shop.scss'




const Shop = () => {
const [searchInput, setSearchInput] = useState("")
  const handleChange = (e)=>{
    setSearchInput(e.target.value)
  }
 
  
  return (
    <div className="shop">
        <div className="shopTitle">

          <div className='banner-img-div'>
            
          <div className="banner-input-div">
          <input type="text" placeholder='Search' onChange={handleChange} />
          <BiSearch className='search-icon'  size={25} />
          </div>
          <img className='banner-img' src={banner} alt="" />


          </div>

        </div>

        <Slider/>
        <div className="products" >
            {PRODUCTS.filter((val)=>val.productName.toLowerCase().includes(searchInput.toLowerCase())).map((data)=>(
                <SingleProduct data={data} key={data.id}/>
            ) 
            )}
            </div>
            <Carousel/>
           
    </div>
  )
}

export default Shop