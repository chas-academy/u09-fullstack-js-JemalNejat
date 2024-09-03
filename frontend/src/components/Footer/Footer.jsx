// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
              
                <p>Delivering happiness to your doorstep, one bite at a time!</p>
                <div className='footer-social-icons'>
                 
                </div>

            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+462 555 777 888</li>
                    <li>contact_us@se.com</li>
                </ul>

            </div>

        </div>
       <hr/>
       <p>© 2024 Nejat. All rights reserved.</p>

      
    </div>
  )
}

export default Footer
