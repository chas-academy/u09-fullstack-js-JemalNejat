
# FoodJET - Food Delivery App

## Introduction
FoodJET is an online food delivery application that allows users to order meals from a curated, categorized menu with secure payments through **Stripe**. Built with **React** (frontend), **Node.js** and **Express** (backend), and a **MongoDB** database, this app offers both user-friendly ordering and an admin dashboard for efficient management.

---

## Features

### User Functionality
1. **User Onboarding**: Registration and login functionality.
2. **Category-Based Menu**: 
   - Organized food items by category, with filter and search options.
3. **Food Ordering**: 
   - Add items from multiple categories to a cart and place orders in one transaction.
4. **Secure Payment**: 
   - Stripe integration supports secure payments with credit cards, Apple Pay, Google Pay, and more.
5. **Order History**: 
   - Review past meals conveniently.
   
**Admin Dashboard**

- **Menu & Order Management**:
  - CRUD functionality for managing food items and categories.
  - Order tracking and status updates.
  - full CRUD User account management.

### Additional Features
- **Order Tracking**: Real-time status updates for ongoing orders.

---

## Development Roadmap

### Step-by-Step Plan
1. **User Authentication**: Implement JWT for secure registration and login.
2. **Menu & Categories**: Develop browsing and filtering for food categories.
3. **Ordering Process**: Enable multi-category selection, cart, and checkout.
4. **Stripe Payment Integration**:
   - Secure, multi-method payment options for payment.
5. **Admin Dashboard**: Simple management for menu, and orders, users.

---

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Stripe
- **Authentication**: JWT
- **Deployment**: Render

---
## API & Design Specifications

- **API Testing**: Tested using **Thunder Client**.
- **Responsiveness**: Optimized for mobile, tablet, and desktop screens.
- **Security**: Implements CORS and HTTP for secure communication.
  
---

## User-Centered Design Approach

- **User Research**: Conduct interviews to understand food-ordering preferences.
- **Personas & User Stories**: Create personas and stories to drive feature design.
- **Prototyping**: Low-fidelity designs and app flow prototypes in **Figma**.

---

## Development Standards

- **Languages**: JavaScript across backend and frontend.
- **Styling**: Consistent style guide across CSS and JS.

---


**PWA**

Configured a PWA using `vite-plugin-pwa` to enable offline access and faster loading.

First, I installed the plugin with `npm install vite-plugin-pwa`, then set up the PWA configuration in [`vite.config.js`](./Fronts/vite.config.js). Finally, I defined the app metadata in [`manifest.json`](./Fronts/public/manifest.json).

---
## Tools & Resources

- **Design**: Figma for UI/UX.
- **Feedback**: Google Forms for user surveys and feedback collection.


