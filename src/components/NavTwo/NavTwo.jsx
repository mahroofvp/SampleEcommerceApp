import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navTwo.scss';

const NavTwo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav-two-main-div'>
      <div className='nav-two-header'>
        {isMenuOpen ? (
          <FaTimes className='nav-two-icon' onClick={toggleMenu} />
        ) : (
          <FaBars className='nav-two-icon' onClick={toggleMenu} />
        )}
      </div>
      <ul className={`nav-two-ul ${isMenuOpen ? 'open' : ''}`}>
        <li onClick={toggleMenu}>DEALS</li>
        <li onClick={toggleMenu}>BRANDS</li>
        <li onClick={toggleMenu}>BESTSELLERS</li>
        <li onClick={toggleMenu}>OFFERS</li>
      </ul>
    </div>
  );
}

export default NavTwo;
