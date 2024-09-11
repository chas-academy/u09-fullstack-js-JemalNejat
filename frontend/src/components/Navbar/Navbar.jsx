/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets as adminAssets } from '../../assets/admin_assets/assets'
import { assets as frontendAssets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'




// eslint-disable-next-line react/prop-types
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("menu");
    const {getTotalCartAmount} = useContext(StoreContext);
    

  return (
    <div className='navbar'>
        <Link to={'/'}><img src={frontendAssets.logo} alt="" className='logo' /></Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobil-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className='navbar-right'>
            <img src={frontendAssets.search_icon} alt="" />
            <div className='navbar-search-icon'>
              <Link to={'/cart'}><img src={frontendAssets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}>

                </div>

            </div>
            <div>
                <button onClick={()=>setShowLogin(true)}>sign in</button>
                
            </div>
        </div>
        
    </div>
  )
}

export default Navbar
