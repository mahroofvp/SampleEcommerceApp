import React, { useState } from 'react';
import { PRODUCTS } from '../../products';
import { BiSearch, BiFilterAlt } from 'react-icons/bi'; // Import filter icon
import SingleProduct from '../../components/product/SingleProduct';
import Carousel from '../../components/carousel/Carousel';
import Slider from '../../components/banksSlider/Slider';
import banner from '/banner.png';
import './shop.scss';
import Footer from '../../components/footer/Footer';
import NavTwo from '../../components/NavTwo/NavTwo';
import PosterImg from '../../components/posterImg/PosterImg';

const Shop = () => {
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState('all');
  const [filterOpen, setFilterOpen] = useState(false); 


  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };



  const toggleFilter = () => {
    setFilterOpen(!filterOpen);

  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = category === 'all' || product.category === category;
    const matchesSearch = product.productName.toLowerCase().includes(searchInput.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="shop">
      <NavTwo />
      <div className="shopTitle">
        <div className='banner-img-div'>
          <div className="banner-input-div">
            <input type="text" placeholder='Search' onChange={handleChange} />
            <BiSearch className='search-icon' size={25} />
          </div>
          <img className='banner-img' src={banner} alt="Banner" />
        </div>
      </div>

      <div className="shop-content">
        <div className="main-content">
          <Slider />
          
          <div className="products-container">
            <div className="filter-toggle" onClick={toggleFilter}>
          <BiFilterAlt size={30} />
          <span>Filter</span>
        </div>

        {filterOpen && (
          <div className="filter-container">
            <h2>Filter by Category</h2>
            <ul className="filter-list">
              <li onClick={() => {setCategory('all'),toggleFilter()}} className={category === 'all' ? 'active' : ''}>All</li>
              <li onClick={() => {setCategory('smartphones'),toggleFilter()}} className={category === 'smartphones' ? 'active' : ''}>Smartphones</li>
              <li onClick={() => {setCategory('laptops'),toggleFilter()}} className={category === 'laptops' ? 'active' : ''}>Laptops</li>
              <li onClick={() => {setCategory('accessories'),toggleFilter()}} className={category === 'accessories' ? 'active' : ''}>Accessories</li>
            </ul>
          </div>
        )}
            <div className="products">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((data) => (
                  <SingleProduct data={data} key={data.id} />
                ))
              ) : (
                <div className="no-products">
                  <p>No products available in this category.</p>
                </div>
              )}
            </div>
            <PosterImg/>
            <Carousel />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
