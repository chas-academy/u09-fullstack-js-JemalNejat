/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Sidebar } from "../../pages/Admin/AdminDashboard";
import { Navbar } from "../../pages/Admin/AdminDashboard";

const List = ({ url }) => {
  //create state varible
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    fetchList();
  });

  return (
    <div className="admin-dashboard">
      <Navbar />
      <hr />
      <div className="app-content">
        <hr />
        <Sidebar />
        <div className="list add flex-col">
          <p>All Foods List</p>
          <div className="list-table">
            <div className="list-table-format title">
              <p>Image</p>
              <p>Name</p>
              <p>Category</p>
              <p>Price</p>
              <p>Action</p>
            </div>
            {list.map((item, index) => {
              return (
                <div key={index} className="list-table-format">
                  <img src={`${url}/images/` + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <p>Kr{item.price}</p>
                  <p onClick={() => removeFood(item._id)} className="cursor">
                    x
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
