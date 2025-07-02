# 🌎 WanderNest — Tour Package Booking Platform

**WanderNest** is a full-featured **MERN Stack-based Tour Booking Web App** where travelers can explore and book guided tour packages, and guides can manage their own listings. This project includes Firebase Authentication, secure JWT authorization, dynamic data from MongoDB, and full CRUD operations.

> 🔐 Fully responsive, recruiter-friendly, secure, and production-ready.

---

## 🌐 Live Links

- 🚀 **Live Website**: [https://wandernest-63f5d.web.app](https://wandernest-63f5d.web.app)
- 🖥️ **Backend LInk**: [https://wander-nest-server.vercel.app](https://wander-nest-server.vercel.app)

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


## 🛠️ Tools & Libraries Used
= WanderNest has been built using a combination of modern frontend and backend technologies, tools, and libraries to ensure scalability, security, and a smooth user experience.

## 🧑‍💻 Development & Frontend
Vite – Fast and modern frontend build tool

React.js – Component-based UI library

React Router – SPA-style routing solution

Tailwind CSS – Utility-first CSS framework for styling

DaisyUI – Tailwind component library for prebuilt, themeable UI

## 🔐 Authentication & Security

Firebase Authentication – Email/Password & Google login system

JSON Web Tokens (JWT) – Secure API access with token-based auth

Express.js Middleware – Protecting private API routes

## 📦 Backend & Database

Node.js & Express.js – REST API server

MongoDB Atlas – Cloud-based NoSQL database

Mongoose – MongoDB ODM for schema-based modeling

## ⚙️ UI & UX Enhancements

React Toastify – Non-blocking toast notifications

SweetAlert2 – Stylish and interactive alert dialogs

React Icons – Icon support throughout the UI

Responsive Design – Mobile-first, adaptive layout

## 🚀 Deployment

Client – Hosted on Firebase Hosting

Server – Deployed via Vercel

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

## 📸 UI Screenshot

![WanderNest UI](https://i.ibb.co/LdH507P1/image.png)
![WanderNest UI](https://i.ibb.co/zVfkfQD8/image.png)
![WanderNest UI](https://i.ibb.co/jPRwxchm/image.png)



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

### .env.local File like this

- VITE_APIKEY=your_api_key_here
- VITE_AUTHDOMAIN=your_project_id.firebaseapp.com
- VITE_PROJECTID=your_project_id
- VITE_STORAGEBUCKET=your_project_id.appspot.com
- VITE_MESSAGINGSENDERID=your_sender_id
- VITE_APPID=your_app_id_here

### 1. Clone the Repository

```bash
git clone https://github.com/mohammadsanvi/wander-nest-client.git
cd wander-nest-client
npm run dev
