/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets as frontendAssets } from "../../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { jwtDecode } from "jwt-decode";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setShowLogin, setSearchQuery }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const [query, setQuery] = useState("");
  const [isAdmin, setAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAdmin(isUserAdmin());
  }, [token]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleSearch = (event) => {
    setQuery(event.target.value);
    setSearchQuery(event.target.value);
  };

  const isUserAdmin = () => {
    if (!token) return "";
    const decoded = jwtDecode(token);
    return decoded.role === "admin";
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={frontendAssets.mylogo_192x192} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobil-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to={"/cart"}>
            <img src={frontendAssets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={frontendAssets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              {isAdmin && (
                <>
                  <li onClick={() => navigate("/dashboard")}>
                    <img src={frontendAssets.selector_icon} alt="" />
                    <p>Dashboard</p>
                  </li>
                  <hr />
                </>
              )}
              <li onClick={() => navigate("/myorders")}>
                <img src={frontendAssets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={frontendAssets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
