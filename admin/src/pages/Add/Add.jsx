/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {
  const [image,setImage] = useState(false);
  const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))

  }
  //just to test
 // useEffect(()=>{
   // console.log(data);
  //},[data])
  
  return (
    <div className='add'>
      <form className='flex-col'>
        <div className='add-image-upload flex-col'>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt=""/>
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type='file' id="image" hidden required />
        </div>
        <div className='add-product-name flex-col'>
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} type='text' id="name" placeholder='Type here' />
        </div>
        <div className='add-product-description flex-col'>
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder='Write content here'></textarea>
        </div>
        <div className='add-category-price'>
          <div className='add-category flex-col'>
            <p>Product category</p>
            <select onChange={onChangeHandler} value={data.category} name="category">
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
            <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='Kr20' />
          </div>

        </div>
        <button type='submit' className='add-btn'>ADD</button>

      </form>
      
    </div>
  )
}

export default Add
