

# FoodJet - Food Delivery App 

## Table of Contents
1. [UX](#ux)
    - [User Study](#user-study)
    - [Personas](#personas)
    - [Site Map](#site-map)
    - [Prototype](#prototype)
2. [Frontend](#frontend)
    - [Setup with React and Tailwind](#setup-with-react-and-tailwind)
    - [Key Frontend Features](#key-frontend-features)
3. [Backend](#backend)
    - [Setup with Node.js, Express, and TypeScript](#setup-with-nodejs-express-and-typescript)
    - [Key Backend Features](#key-backend-features)
4. [API](#api)
    - [MongoDB](#mongodb)
    - [Stripe Payment Integration](#stripe-payment-integration)
    - [API Testing with Insomnia](#api-testing-with-insomnia)

---

## UX

### User Study

Before creating the project, I conducted user research to understand my target audience's preferences, needs, and behaviors when ordering food online. This research helped shape the design and functionality of the app.

#### Questions to Me:
- **What do I already know?**
  I know that I want to create a food delivery app that offers users a simple and seamless way to browse menus categorized by food type and make payments easily.
  
- **What do I want to gain from this study?**
  I want to understand how users interact with online food menus, what they prioritize in their ordering experience, and their preferred payment methods.

- **Steps for conducting this study:**
  I created a user survey to gather insights, followed up with some users for more in-depth interviews, and analyzed the data to inform my app’s design.

#### Questions to Users (Stage 1):
- How old are you?
- How often do you order food online?
- How do you prefer to browse food menus: by category (e.g., desserts, drinks) or by popularity?
- What frustrates you the most about current food delivery apps?
- Which payment methods do you prefer: card, PayPal, or digital wallets (e.g., Apple Pay)?
- What are your expectations when ordering food online?
  
**Form Link**: [Survey for Food Delivery App](#)

#### Analysis (Stage 2):
Based on the responses, I gathered the following insights:
- **Audience**: Millennials and Gen Z, aged 18-35, both genders.
- **Priorities**: Easy navigation, fast checkout, and secure payment options.
- **Needs**: Users want to browse categories easily and pay with minimal friction.

Based on this information, I created a persona, site map, and low-fidelity prototype to guide the project.

### Personas

**Persona Link**: [Link to Personas](#)

### Site Map

**Site Map Link**: [Link to Sitemap](#)

### Prototype

**Lo-Fi Prototype Link**: [Link to Prototype](#)

---

## Frontend

### Setup with React and CSS

For the frontend, I chose **React** with **CSS** to create a responsive and dynamic interface. Below are the steps I followed to set up the frontend:

1. **Install React with Vite**:
    ```bash
    npm create vite@latest react .
    ```
    I chose React with JavaScript for this project.
   

2. **Frontend Tools**:
    - React (JavaScript)
    - CSS for styling
    - React Router for page navigation

#### Key Frontend Features

1. **Category-Based Menu**:
   - Users can browse food items organized into categories such as **Appetizers**, **Main Courses**, **Desserts**, and **Drinks**.

2. **Cart Management**:
   - Users can add items to the cart and adjust quantities before proceeding to checkout.

3. **User Authentication**:
   - User sign-up and login functionality using JWT tokens for secure authentication.

4. **Stripe Integration for Payment**:
   - Stripe is integrated into the checkout process to handle secure payments.

5. **Responsive Design**:
   - The app is responsive and works across all screen sizes (mobile, tablet, desktop).

---

## Backend

### Setup with Node.js, Express, and JavaScript

For the backend, I used **Node.js** and **Express** with **JavaScript** for better type safety. The following steps were taken to set up the backend:

1. **Initialize Node.js and Express**:
    ```bash
    npm init -y
    npm install express dotenv
    ```
   
2. **Install TypeScript**:
    ```bash
    npm install -D typescript @types/node @types/express
    npx tsc --init
    ```

3. **Setup for Development**:
    ```bash
    npm install -D nodemon ts-node
    ```
    Configured **nodemon** for live updates during development and **ts-node** to run TypeScript files directly.

4. **Create Server Files**:
   - `app.ts`: Handles Express routes and middleware.
   - `server.ts`: Starts the server on the specified port.

5. **CORS Setup**:
    ```bash
    npm install cors
    ```
   I configured CORS to allow cross-origin requests from the frontend.

#### Key Backend Features

1. **User Authentication**:
   - JWT-based user registration and login.

2. **Menu Management**:
   - API endpoints to retrieve menu items based on categories.
   
3. **Order Management**:
   - Backend handles placing orders, storing them in MongoDB, and updating order statuses.

4. **Stripe Payment Integration**:
   - Backend routes for initiating and confirming payments via Stripe’s API.

---

## API

### MongoDB

For the database, I used **MongoDB** to store user information, menu items, categories, and order details.

1. **MongoDB Connection**:
    - I used the **mongoose** library to connect and interact with the MongoDB database.
    ```bash
    npm install mongoose
    ```
2. **Data Models**:
    - **User**: Stores user details, including name, email, and order history.
    - **Menu Item**: Stores food items categorized by type (e.g., Appetizer, Dessert).
    - **Order**: Stores user orders, payment status, and delivery details.

### Stripe Payment Integration

Stripe is integrated for secure payment processing.

1. **Install Stripe SDK**:
    ```bash
    npm install stripe
    ```
   
2. **Stripe Configuration**:
   - Backend routes handle payment initiation and confirmation.
   - Webhooks are used to listen for payment status updates from Stripe.

### API Testing with Insomnia

To test the API, I used **Insomnia** for simulating requests and ensuring everything works as expected.

1. **GET Menu Items**: Test retrieving all menu items by category.
2. **POST Order**: Test placing an order with selected menu items and initiating Stripe payment.
3. **POST Payment Confirmation**: Ensure Stripe webhook confirms payment status.

---

This documentation should guide you through the entire process of developing your food delivery app, from UX research to frontend and backend development, and API integration.