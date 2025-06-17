# 🌎 WanderNest — Tour Package Booking Platform

**WanderNest** is a full-featured **MERN Stack-based Tour Booking Web App** where travelers can explore and book guided tour packages, and guides can manage their own listings. This project includes Firebase Authentication, secure JWT authorization, dynamic data from MongoDB, and full CRUD operations.

> 🔐 Fully responsive, recruiter-friendly, secure, and production-ready.

---

## 🌐 Live Links

- 🚀 **Live Website**: [https://wandernest-63f5d.web.app](https://wandernest-63f5d.web.app)
- 🖥️ **Backend API**: [https://wander-nest-server.vercel.app](https://wander-nest-server.vercel.app)

---

## ✨ Key Features

### 🧑‍💼 User Features
- View all public tour packages.
- View detailed info (private route).
- Book packages via modal form.
- View personal booking list with confirm option.
- Light/Dark Theme toggle support.

### 🧑‍✈️ Guide/Admin Features
- Add new tour packages.
- Manage (edit/delete) own packages.
- Increment booking count on successful bookings.
- JWT-secured access to private APIs.
- Update package with modal or separate page.

---

## 🔐 Authentication

- Firebase Authentication (Email/Password & Google)
- Auth persistence across reloads (no auto redirect to login).
- JWT issued and stored in **localStorage**.
- JWT verified in backend for all protected APIs.
- Private Routes: Add Package, Manage My Packages, My Bookings, Package Details.

---

## 🧱 Tech Stack

| Layer           | Tech Used                             |
|------------------|----------------------------------------|
| Frontend         | React.js, React Router, Tailwind CSS, DaisyUI |
| Authentication   | Firebase (Email/Pass, Google), JWT |
| Backend (API)    | Node.js, Express.js, MongoDB Atlas |
| UI Enhancements  | React Toastify, SweetAlert2, Responsive Design |
| Deployment       | Vercel ( Server) Firebase ( Client ) |

---

## 🗂️ Pages & Routes

| Route             | Description                             |
|------------------|-----------------------------------------|
| `/`              | Home Page (Hero + Featured + Sections)  |
| `/packages`      | All Packages (Search + Card Grid)       |
| `/add-package`   | Add New Package (PRIVATE)               |
| `/my-packages`   | Manage My Packages (PRIVATE)            |
| `/my-bookings`   | User Bookings List (PRIVATE)            |
| `/package/:id`   | Package Details + Book Form (PRIVATE)   |
| `/about`         | About Us Page                           |
| `/login`         | Login with Email/Google                 |
| `/register`      | Register New User                       |
| `*`              | 404 Not Found (Animated)                |

---

## 🎨 UI Details

- 🌗 **Theme Toggle**: Light/Dark mode with DaisyUI.
- 📱 **Responsive**: Mobile-first design.
- 🧭 **Navbar**:
  - Logged out: Home, All Packages, About, Login
  - Logged in: Home, All Packages, My Bookings, Add Package, Manage Packages, Profile Dropdown, Logout
- 📜 **Footer**: Logo, Address, Terms, Privacy Policy, Social Links

---

## 📦 Dynamic Data

- All data is dynamically fetched from MongoDB via Express API.
- No static/local JSON used.
- Booking & Tour package data updates in real-time.

---

## 📋 Important Functionalities

- 🔍 **Search Packages**: Filter by tour name using MongoDB `$regex`.
- 📈 **Booking Count**: Incremented on successful booking with MongoDB `$inc`.
- 🧾 **Form Validations**: Password rules, Required fields.
- 🍞 **Toast Messages**: Clear success/error UI feedback.
- ❌ **404 Page**: Animated GIF + Redirect to Home.

---

## 🔐 JWT Auth (Backend)

- Token issued on login, stored in localStorage.
- Secure APIs use token via `Authorization` header.
- Middleware on server validates and protects private endpoints.

---

## 🧪 Extra Implemented Features

- Modal-based booking form with auto-filled user and tour info.
- Modal/Route-based edit form with pre-filled data.
- SweetAlert for delete confirmation.
- Auto redirect to login when accessing protected routes while logged out.
- Booking confirmation status (Pending ➜ Completed).

---
