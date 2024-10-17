# Foodify - Food Delivery App

## Introduction

FoodJet is an online food delivery application designed to provide users with an easy and seamless way to browse and order meals from local restaurants. The app focuses on delivering quality food to users while offering a smooth and user-friendly experience. This app is built using **React** for the frontend, **Express** and **Node.js** for the backend, and a **MongoDB** database.

## Design

### Must-Have Features

1. **User Onboarding**: 
   - User Registration and Login functionality.
   - Social media login (Optional).
  
2. **Restaurant Search & Filter**:
   - Users can search for restaurants based on location, cuisine, and popularity.
   - Filter options to narrow down choices by price, ratings, delivery time, etc.

3. **Food Ordering**:
   - Users can view menus from different restaurants.
   - Add food items to the cart and place an order.
  
4. **Favorites**:
   - Users can save their favorite restaurants for easy access.
   
5. **Order History**:
   - Users can view previous orders and reorder with ease.

6. **Admin Dashboard**:
   - Admin can manage restaurants, users, and orders via a CRUD interface.
   - Admin can add or remove restaurants and menu items.

### Extra Features

1. **User-Specific Recommendations**:
   - Recommend restaurants or meals based on past orders and preferences.

2. **Order Tracking**:
   - Users can track the status of their orders in real-time.

3. **Notifications**:
   - Send push notifications for order status updates.

### Admin Dashboard

- **CRUD Operations**: Admin can create, read, update, and delete restaurants, menus, and orders.
- **User Management**: Admin can manage users and their roles (standard users, restaurant owners, etc.).
- **Email Notifications**: Admin can send promotional emails or order updates from the dashboard (Optional).

## Iteration Plan and Steps to Follow

1. **Step 1: User Authentication**:
   - Implement registration, login, and authentication features using JWT.
   
2. **Step 2: Search & Filter**:
   - Develop a search and filter mechanism for restaurants.

3. **Step 3: Order Management**:
   - Allow users to select food, add it to the cart, and place an order.

4. **Step 4: Admin Dashboard**:
   - Set up a simple admin panel for restaurant and order management.

5. **Step 5: Additional Features**:
   - Implement features like recommendations, order tracking, and notifications.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT for user authentication
- **Deployment**: Node.js hosting platform, e.g., Heroku or DigitalOcean

## RESTful API Requirements

- **Cross-Browser Support**: The app will work across all modern browsers.
- **Responsiveness**: The design must be fully responsive and work across all screen sizes (mobile, tablet, desktop).

## Design Requirements

- **User Study**: A minimum of 5 user interviews to understand their food ordering habits.
- **Personas**: Based on user studies, create personas to guide the design process.
- **User Stories**: Develop user stories around key personas for better feature design.
- **Prototype**: Create a low-fidelity prototype for the app flow (using Figma).

## More Technical Details

- **CORS & HTTPS**: Ensure proper handling of CORS for API requests and HTTPS for secure communication.
- **MongoDB Database**: Use MongoDB to store user data, restaurants, menus, and orders.
- **PWA (Progressive Web App)**: Optimize the app for PWA functionality for offline use.
- **API Documentation**: Document the API endpoints using tools like Insomnia or Postman for easy reference.

## Code Standard

- **Languages**: JavaScript (JS) for both backend and frontend.
- **Styling**: Follow a consistent CSS/JS style guide to ensure code quality.

## Tools and Resources

- **Figma**: For UI/UX design and prototyping.
- **FigJam**: For brainstorming and wireframing.
- **Google Forms**: To collect user feedback and conduct surveys.

