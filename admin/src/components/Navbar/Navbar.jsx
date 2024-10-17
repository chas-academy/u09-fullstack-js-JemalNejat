/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'> 
    
    <img className='logo' src={assets.mylogo} alt=""/> <h2>Admin Panel</h2>
    <img className='profile' src={assets.nejat} alt=""/>
      
    </div>
  )
}

export default Navbar
