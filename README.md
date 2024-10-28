

# FoodJet - Food Delivery App

## Introduction

FoodiJET is an online food delivery application that allows users to order meals from a curated menu, categorized into various food types. Users can browse and select food items from different categories and make secure payments through **Stripe**. This app is built using **React** for the frontend, **Express** and **Node.js** for the backend, and a **MongoDB** database.

## Design

### Features

1. **User Onboarding**: 
   - User Registration and Login functionality.
   - Social media login (Optional).

2. **Category-Based Menu**:
   - Users can browse through food items categorized by type.
   - Each category will have a list of items users can choose from.
   - Filter options to narrow down choices by food type.

3. **Food Ordering**:
   - Users can select food items from various categories and add them to the cart.
   - The app allows ordering multiple items from different categories in a single transaction.

4. **Secure Payment with Stripe**:
   - Users can pay for their orders using **Stripe**, ensuring secure and seamless payment processing.
   - Stripe integration supports multiple payment methods like credit cards, Apple Pay, Google Pay, etc.

5. **Favorites**:
   - Users can save their favorite food items or categories for quick access in future orders.

6. **Order History**:
   - Users can view previous orders and reorder their favorite meals with ease.

7. **Admin Dashboard**:
   - Admin can manage the menu and food categories via a CRUD interface.
   - Admin can add, update, or remove food items and categories from the menu.

### Extra Features


1. **Order Tracking**:
   - Users can track the status of their orders in real-time.

2. **Notifications**:
   - Push notifications to update users on order status or promotions in specific categories.

### Admin Dashboard

- **CRUD Operations**: Admin can create, read, update, and delete food items and categories.
- **Category Management**: Admin can manage food categories (e.g., create new categories, update existing ones, or delete obsolete ones).
- **Email Notifications**: Admin can send promotional emails or notifications to users (Optional).

## Iteration Plan and Steps to Follow

1. **Step 1: User Authentication**:
   - Implement registration, login, and authentication features using JWT.

2. **Step 2: Menu and Categories**:
   - Develop the interface for users to browse food items categorized by type.

3. **Step 3: Food Ordering**:
   - Implement the ability for users to select food from different categories, add it to the cart, and place an order.

4. **Step 4: Stripe Payment Integration**:
   - Integrate **Stripe** to handle payments securely.
   - Ensure the checkout process supports multiple payment methods like credit/debit cards, Apple Pay, and Google Pay.
   - Set up webhooks to handle successful or failed payment notifications.

5. **Step 5: Admin Dashboard**:
   - Set up a simple admin panel for menu and category management.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Stripe for secure payment processing
- **Authentication**: JWT for user authentication
- **Deployment**: Node.js hosting platform, e.g., Heroku or DigitalOcean

## RESTful API Requirements

- **Cross-Browser Support**: The app will work across all modern browsers.
- **Responsiveness**: The design must be fully responsive and work across all screen sizes (mobile, tablet, desktop).

## Design Requirements

- **User Study**: A minimum of 5 user interviews to understand their food ordering and payment habits.
- **Personas**: Based on user studies, create personas to guide the design process.
- **User Stories**: Develop user stories around key personas for better feature design.
- **Prototype**: Create a low-fidelity prototype for the app flow (using Figma).

## More Technical Details

- **CORS & HTTPS**: Ensure proper handling of CORS for API requests and HTTPS for secure communication.
- **MongoDB Database**: Use MongoDB to store user data, menu items, categories, and orders.
- **PWA (Progressive Web App)**: Optimize the app for PWA functionality for offline use.
- **Stripe Integration**: Ensure the app is fully integrated with Stripe for secure payment processing.
- **API Documentation**: Document the API endpoints using tools like Insomnia or Postman for easy reference.

## Code Standard

- **Languages**: JavaScript (JS) for both backend and frontend.
- **Styling**: Follow a consistent CSS/JS style guide to ensure code quality.

## Tools and Resources

- **Figma**: For UI/UX design and prototyping.
- **FigJam**: For brainstorming and wireframing.
- **Google Forms**: To collect user feedback and conduct surveys.

