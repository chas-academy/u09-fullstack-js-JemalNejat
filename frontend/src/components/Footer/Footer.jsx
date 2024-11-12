// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2>FoodJet</h2>
          <img src={assets.mylogo_192x192} alt="" />

          <p>Delivering happiness to your doorstep, one bite at a time!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+462 555 777 888</li>
            <li>contact_us@se.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copy-right">© 2024 Nejat. All rights reserved.</p>
    </div>
  );
};

export default Footer;
