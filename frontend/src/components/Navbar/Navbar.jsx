/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Navbar.css'
import { assets as adminAssets } from '../../assets/admin_assets/assets'
import { assets as frontendAssets } from '../../assets/frontend_assets/assets'




const Navbar = () => {
    const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
        <img src={adminAssets.logo} alt="" className='logo' />
        <ul className='navbar-menu'>
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
            <li onClick={()=>setMenu("mobil-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
        </ul>
        <div className='navbar-right'>
            <img src={frontendAssets.search_icon} alt="" />
            <div className='navbar-search-icon'>
                <img src={frontendAssets.basket_icon} alt="" />
                <div className='dot'>

                </div>

            </div>
            <div>
                <button>sign in</button>
                
            </div>
        </div>
        
    </div>
  )
}

export default Navbar
