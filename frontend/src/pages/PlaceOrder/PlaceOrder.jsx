// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const totalCartAmount = getTotalCartAmount() || 0;

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Zip code" />
        <input type="text" placeholder="Phone" />
      </div>
      
      <div className='place-order-right'>
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{totalCartAmount} Kr</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>{totalCartAmount === 0 ? 0 : 20} Kr</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>{totalCartAmount === 0 ? 0 : totalCartAmount + 20} Kr</b>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
