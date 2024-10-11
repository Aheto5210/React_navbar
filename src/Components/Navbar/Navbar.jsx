import React, { useState } from 'react';
import './Navbar.css'
import payconwhite from '../../assets/paycon.png'
import payconblack from '../../assets/paycon black.png'
import searchicon from '../../assets/search-icon3.png'
import searchiconwhite from '../../assets/search-icon4.png'
import togglewhite from '../../assets/toggle-white.png'
import toggleblack from '../../assets/toggle-black.png'
import HamburgerIcon from '../../assets/hamburger-icon.svg';

const Navbar = ({theme, setTheme}) => {
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <img src={theme === 'light' ? payconblack : payconwhite} alt="" className='logo'/>
      {/* Toggle hamburger menu for mobile view */}
      

      {/* Navigation Menu */}
      <ul className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
        <li>Home</li>
        <li>Product</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      <div className="Searchbox">
        <input type="text" placeholder='Search...' />
        <img src={theme === 'light' ? searchicon : searchiconwhite} alt="" />
      </div>

      <img onClick={toggle_mode} src={theme === 'light' ? toggleblack : togglewhite} alt="" className='toggle-icon' />

      <img 
        src={HamburgerIcon} 
        alt="Hamburger Menu" 
        className="hamburger-icon" 
        onClick={toggleMenu}
      />

    </div>

    
  )
}

export default Navbar;
