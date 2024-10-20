/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({ url, existingItem }) => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Salad',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    formData.append('image', image);

    // Check if we're editing or adding a new item
    const apiEndpoint = existingItem ? `${url}/api/food/edit` : `${url}/api/food/add`;
    if (existingItem) {
      formData.append('id', existingItem._id); // Append ID if editing
    }

    const response = await axios.post(apiEndpoint, formData);
    if (response.data.success) {
      // Reset the form
      setData({
        name: '',
        description: '',
        price: '',
        category: 'Salad',
      });
      setImage(null);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  // Load existing item data if available
  useEffect(() => {
    if (existingItem) {
      setData({
        name: existingItem.name,
        description: existingItem.description,
        price: existingItem.price,
        category: existingItem.category,
      });
      setImage(existingItem.image); // Assuming existingItem contains the image URL
    }
  }, [existingItem]);

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-image-upload flex-col'>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type='file' id="image" hidden required />
        </div>
        <div className='add-product-name flex-col'>
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type here' required />
        </div>
        <div className='add-product-description flex-col'>
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder='Write content here' required></textarea>
        </div>
        <div className='add-category-price'>
          <div className='add-category flex-col'>
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category" value={data.category}>
              <option>Salad</option>
              <option>Rolls</option>
              <option>Deserts</option>
              <option>Sandwich</option>
              <option>Cake</option>
              <option>Pure Veg</option>
              <option>Pasta</option>
              <option>Noodles</option>
            </select>
          </div>
          <div className='add-price flex-col'>
            <p>Product price</p>
            <input onChange={onChangeHandler} value={data.price} type='number' name='price' placeholder='Kr20' required />
          </div>
        </div>
        <button type='submit' className='add-btn'>{existingItem ? 'Update' : 'ADD'}</button>
      </form>
    </div>
  );
};

export default Add;
