import React from 'react';
import './AdminDashboard.css'; // Updated CSS file

import { assets } from '../../assets/admin_assets/assets';
import { NavLink } from 'react-router-dom';

// Navbar Component
const Navbar = () => {
  return (
    <div className='navbar'>
      
      <h2>Admin Panel</h2>
     
    </div>
  );
};

// Sidebar Component
export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-options'>
        <NavLink to='/add' className='sidebar-option'>
          <img src={assets.add_icon} alt="Add Icon" />
          <p>Add Item</p>
        </NavLink>

        <NavLink to='/list' className='sidebar-option'>
          <img src={assets.order_icon} alt="List Icon" />
          <p>List Items</p>
        </NavLink>

        <NavLink to='/orders' className='sidebar-option'>
          <img src={assets.order_icon} alt="Orders Icon" />
          <p>Orders</p>
        </NavLink>

        <NavLink to='/users' className='sidebar-option'>
          <img src={assets.profile_icon} alt="Users Icon" />
          <p>Users</p>
        </NavLink>
      </div>
    </div>
  );
};

// AdminDashboard Component
const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Navbar />
      <hr/>
      <div className="dashboard-content">
        <Sidebar />
        
        <div className="app-content">
          
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
