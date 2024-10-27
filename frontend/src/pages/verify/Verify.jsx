/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
 
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        // Construct the request URL correctly
        const requestUrl = `${url}/api/order/verify`; 
        const response = await axios.post(requestUrl, { success, orderId });

        if (response.data.success) {
            navigate("/myorders"); // Navigate to My Orders if payment is successful
        } else {
            navigate("/"); // Navigate to Home if payment failed
        }
    };

    useEffect(() => {
        verifyPayment(); // Call the verifyPayment function when the component mounts
    }, []);

    return (
        <div className='verify'>
            <div className='spinner'></div>
        </div>
    );
};

export default Verify;
