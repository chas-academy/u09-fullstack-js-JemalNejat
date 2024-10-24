/* eslint-disable no-unused-vars */
/* import './AdminDashboard.css';
import Users from '../../components/Users/Users.jsx';

const AdminDashboard = () => {
  // TODO: send token to server
  // TODO: remove debug logs
  // TODO: add other admin features from admin module

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Users />
    </div>
  )
}

export default AdminDashboard */

/* eslint-disable no-unused-vars */
import React from 'react';
import './AdminDashboard.css'; // Updated CSS file

import { assets } from '../../assets/admin_assets/assets';

import { NavLink } from 'react-router-dom';

// Navbar Component
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.mylogo} alt="" />
      <h2>Admin Panel</h2>
      <img className='profile' src={assets.nejat} alt="" />
      
    </div>
  );
}

      

// Sidebar Component
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-options'>
        <NavLink to='/add' className='sidebar-option'>
          <img src={assets.add_icon} alt="" />
          <p>Add Item</p>
        </NavLink>

        <NavLink to='/list' className='sidebar-option'>
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>

        <NavLink to='/orders' className='sidebar-option'>
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>

        <NavLink to='/users' className='sidebar-option'>
          <img src={assets.profile_icon} alt="" />
          <p>Users</p>
        </NavLink>
      </div>
    </div>
  );
}



export default AdminDashboard;

