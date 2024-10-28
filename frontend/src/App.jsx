/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
// eslint-disable-next-line no-unused-vars
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Add from "./components/Add/Add";
import List from "./components/List/List";
import Orders from "./components/Orders/Orders";
import Users from "./components/Users/Users";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const url = "https://u09-fullstack-js-jemalnejat-backend.onrender.com";

  return (
    <>
      <div>
        <ToastContainer />
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
        <div className="app">
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/add" element={<Add url={url} />} />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/orders" element={<Orders url={url} />} />
            <Route path="/users" element={<Users url={url} />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
