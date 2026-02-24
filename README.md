
# 🍲 Recipe App

A modern **Recipe Application** built with **React** (frontend) and **Node.js + Express + MongoDB** (backend).  
Users can **signup, login, add recipes, view all recipes, and view their own recipes**.  

The app uses **JWT authentication**, **protected routes**, and **Bootstrap 5** for a clean, responsive UI.  

---

## 🚀 Features

- **User Authentication**
  - Signup and login using username & password
  - Passwords hashed using `bcryptjs`
  - JWT tokens used for authentication

- **Recipe Management**
  - Add new recipes (protected route)
  - View all recipes (public route)
  - View my recipes (protected route)

- **Modern React Features**
  - Functional components
  - `useState` & `useEffect` hooks
  - `react-router-dom` v6 for navigation
  - Protected routes using `Navigate`

- **Modern Backend**
  - Node.js + Express server
  - MongoDB for storing users & recipes
  - Controllers + Routes + Middleware structure
  - JWT-based authentication middleware

- **Bootstrap 5**
  - Modern, responsive UI
  - Cards for recipes
  - Buttons and forms styled
  - Responsive navbar

---

* Features:

  * Signup and login page with Bootstrap forms
  * Navbar with links:

    * All Recipes
    * Add Recipe
    * My Recipes
    * Login/Signup or Logout depending on auth state
  * Recipe cards with title, description, and username

---

## 🛡️ Authentication Flow

1. User signs up → password is hashed → saved in MongoDB
2. User logs in → receives **JWT token** → stored in `localStorage`
3. Token sent in headers for protected routes (AddRecipe / MyRecipes)
4. Logout → token removed → protected routes redirect to login

---

## 💻 Technologies Used

* **Frontend**

  * React 18
  * Bootstrap 5
  * Axios
  * React Router v6
* **Backend**

  * Node.js
  * Express.js
  * MongoDB + Mongoose
  * bcryptjs (password hashing)
  * jsonwebtoken (JWT authentication)
  * dotenv (environment variables)
  * cors (Cross-Origin Resource Sharing)

---

## 🖼️ UI Overview

* **Navbar** – shows links based on login state
* **All Recipes** – public page with all recipes
* **Add Recipe** – protected form to add recipes
* **My Recipes** – protected page showing user’s recipes
* **Signup/Login** – modern Bootstrap forms

---

demo video:

https://github.com/user-attachments/assets/03461ae8-21e2-4b26-894f-30252c2d6826




