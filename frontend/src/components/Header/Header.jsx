/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Header.css'
import { assets as frontendAssets } from '../../assets/frontend_assets/assets'






const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
                style={{ 
        backgroundImage: `url(${frontendAssets.header_2})`, 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', // Cover the entire container
        backgroundPosition: 'center' // Center the image
      }}

            <h2>Crave, Click, Enjoy!</h2>
            <p>Delicious meals are just a tap away! Explore a variety of cuisines and have your favorite dishes delivered to your doorstep. Quick, easy, and satisfying—order now!</p>
       
       <a href="#explore-menu">
              <button>View Menu</button>
            </a>
       
        </div>
      
    </div>
  )
}

export default Header





