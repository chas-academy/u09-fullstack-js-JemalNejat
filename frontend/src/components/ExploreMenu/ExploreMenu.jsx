// eslint-disable-next-line no-unused-vars
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

// eslint-disable-next-line react/prop-types, no-unused-vars
const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu'  id='explore-menu'>
        <h1>Explore our menu</h1>
        
        <p className='explore-menu-text'>Explore our menu and discover your next favorite meal! From savory classics to fresh new flavors, we have got something for every craving. Dive in and order now!</p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return(
               <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
                </div> 
            )
        })}

      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
