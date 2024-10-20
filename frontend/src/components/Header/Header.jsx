import React from 'react';
import './Header.css';
import { assets as frontendAssets } from '../../assets/frontend_assets/assets'; 

const Header = () => {
  return (
    <div
      className="header"
      style={{ '--header-background': `url(${frontendAssets.header_2})` }} 
    >
      <div className="header-contents">
        <h2>Crave, Click, Enjoy!</h2>
        <p>
          Delicious meals are just a tap away! Explore a variety of cuisines and have your favorite dishes delivered to your doorstep. Quick, easy, and satisfying—order now!
        </p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
