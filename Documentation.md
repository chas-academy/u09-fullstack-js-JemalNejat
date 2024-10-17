
# Foodify - Food Delivery App Full Documentation

## Table of Contents
1. [UX](#ux)
    - [User Study](#user-study)
    - [Personas](#personas)
    - [Site Map](#site-map)
    - [Prototype](#prototype)
2. [Frontend](#frontend)
    - [Setup with React (JSX) and CSS](#setup-with-react-jsx-and-css)
    - [Key Frontend Features](#key-frontend-features)
3. [Backend](#backend)
    - [Setup with Node.js, Express, and JavaScript](#setup-with-nodejs-express-and-javascript)
    - [Key Backend Features](#key-backend-features)
4. [API](#api)
    - [MongoDB](#mongodb)
    - [Stripe Payment Integration](#stripe-payment-integration)
    - [API Testing with Insomnia](#api-testing-with-insomnia)

---

## UX

### User Study

Before developing the app, I conducted user research to understand my target audience’s preferences and behavior regarding online food ordering. This research informed the app's design and functionality.

#### Questions to Me:
- **What do I already know?**
  I know that I want to create a food delivery app that offers users a seamless way to browse categorized menus and process payments easily.
  
- **What do I want to gain from this study?**
  I want to understand how users interact with food menus and how they prioritize ease of navigation, security, and payment methods.

- **Steps for conducting this study:**
  I created a survey to gather user insights, followed up with in-depth interviews, and analyzed the data to inform design decisions.

#### Questions to Users (Stage 1):
- How often do you order food online?
- Do you prefer to browse by food categories (e.g., appetizers, desserts) or by popularity?
- What do you find frustrating about food delivery apps?
- What payment method do you prefer (card, PayPal, digital wallets)?
- How important is fast checkout?

**Form Link**: [Survey for Food Delivery App](https://docs.google.com/forms/d/e/1FAIpQLSfcc9V5T1mcPncbmr7d7s4eUb2hqN-jC3qZnaXMIWIMHaSmNg/viewform?usp=sf_link)

#### Analysis (Stage 2):
Based on the responses, the target audience is:
- **Age**: 18-35 (Millennials and Gen Z).
- **Preferences**: Fast, easy-to-use menu browsing, with a preference for category filtering and fast checkout processes.
- **Pain Points**: Complicated navigation and slow checkout.

Based on this data, I created personas, a site map, and a prototype to guide the project.

### Personas

**Persona Link**: [Link to Personas](#)

### Site Map

**Site Map Link**: [Link to Sitemap](<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/design/DWj7GBRr2xNqY4eesxl07q/U09-Site-map?node-id=0-1&embed-host=share" allowfullscreen></iframe>)

### Prototype

**Lo-Fi Prototype Link**: [Link to Prototype](#)

---

## Frontend

### Setup with React (JSX) and CSS

For the frontend, I used **React** with **JSX** and **CSS** to design a clean, responsive, and user-friendly interface. Below are the steps I followed to set up the frontend:

1. **Install React with Vite**:
    ```bash
    npm create vite@latest foodify --template react
    ```
    Chose **React (JavaScript)** for the project.
   
2. **CSS for Styling**:
   - I used **CSS** to style the components for flexibility and full control over the design.
   - CSS files are linked directly to each React component for modular and maintainable styling.

3. **Frontend Tools**:
    - React (JSX)
    - CSS for custom styling
    - React Router for page navigation

#### Key Frontend Features

1. **Category-Based Menu**:
   - Users can browse food items organized into categories such as **Appetizers**, **Main Courses**, **Desserts**, and **Drinks**.

2. **Cart Management**:
   - Users can add items to their cart, adjust quantities, and proceed to checkout.

3. **User Authentication**:
   - User sign-up and login features are implemented with JWT-based authentication to ensure secure sessions.

4. **Stripe Integration for Payment**:
   - Stripe is integrated into the checkout page for secure online payments, ensuring smooth transactions.

5. **Responsive Design**:
   - The app is responsive, optimized for mobile, tablet, and desktop using media queries in **CSS**.

---

## Backend

### Setup with Node.js, Express, and JavaScript

For the backend, I used **Node.js** and **Express** with **JavaScript**. Below are the steps to set up the backend:

1. **Initialize Node.js and Express**:
    ```bash
    npm init -y
    npm install express dotenv
    ```
   This sets up the basic Node.js environment with Express as the web server.

2. **CORS Setup**:
    ```bash
    npm install cors
    ```
   Configured CORS to allow requests from the frontend.

3. **Backend Tools**:
    - Node.js
    - Express for server-side handling
    - MongoDB for database management
    - Stripe API for handling payments

4. **File Structure**:
   - **app.js**: Handles Express routes and middleware.
   - **server.js**: Runs the server on a specified port.
   - **routes**: Manages different routes for authentication, menu, and orders.

#### Key Backend Features

1. **User Authentication**:
   - JWT-based user authentication (register, login, and logout).

2. **Menu Management**:
   - API routes to get food items based on their categories.

3. **Order Management**:
   - Orders are placed and stored in MongoDB, including order status and delivery details.

4. **Stripe Payment Integration**:
   - Stripe API is used to process payments securely. Backend routes are created to initiate and confirm payments.

---

## API

### MongoDB

For the database, I used **MongoDB** to store user details, food items, and order information.

1. **MongoDB Connection**:
    - I used **Mongoose** to connect to MongoDB and define schema models.
    ```bash
    npm install mongoose
    ```

2. **Schema Models**:
    - **User**: Stores user credentials, order history, and personal details.
    - **Menu Item**: Stores food items categorized by type.
    - **Order**: Stores the order information, including the user, items ordered, payment status, and delivery address.

### Stripe Payment Integration

Stripe is integrated for processing payments.

1. **Install Stripe SDK**:
    ```bash
    npm install stripe
    ```

2. **Payment Process**:
   - Users can pay using Stripe, with backend routes handling the payment initiation and confirmation.
   - Webhooks are used to listen for payment events from Stripe, ensuring payments are completed securely.

### API Testing with Insomnia

To test the API, I used **Insomnia** to simulate HTTP requests and validate the API functionality.

1. **GET /menu**: Test fetching food items by category.
2. **POST /orders**: Test placing an order and confirming payment.
3. **POST /payments**: Test initiating and confirming Stripe payments.

