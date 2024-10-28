/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  // Add state for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the menu list based on search query
  const filteredMenu = menu_list.filter((item) =>
    item.menu_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>

      <p className="explore-menu-text">
        Explore our menu and discover your next favorite meal! From savory
        classics to fresh new flavors, we have got something for every craving.
        Dive in and order now!
      </p>

      {/* Search bar for filtering categories */}
      <input
        type="text"
        placeholder="Search for a category..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      <div className="explore-menu-list">
        {/* Render the filtered menu list */}
        {filteredMenu.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
            className="explore-menu-list-item"
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
