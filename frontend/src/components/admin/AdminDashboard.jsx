/* eslint-disable no-unused-vars */
import React from 'react';
import './AdminDashboard.css';
import { assets } from '../../assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom';

// Navbar Component
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.mylogo} alt="Logo" />
      <h2>Admin Panel</h2>
      <img className='profile' src={assets.nejat} alt="Profile" />
    </div>
  );
};

// Sidebar Component
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-options'>
        <NavLink to='/add' className='sidebar-option'>
          <img src={assets.add_icon} alt="Add Item" />
          <p>Add Item</p>
        </NavLink>

        <NavLink to='/list' className='sidebar-option'>
          <img src={assets.order_icon} alt="List Items" />
          <p>List Items</p>
        </NavLink>

        <NavLink to='/orders' className='sidebar-option'>
          <img src={assets.order_icon} alt="Orders" />
          <p>Orders</p>
        </NavLink>

        <NavLink to='/users' className='sidebar-option'>
          <img src={assets.profile_icon} alt="Users" />
          <p>Users</p>
        </NavLink>
      </div>
    </div>
  );
};

// Export both components
export { Navbar, Sidebar };
