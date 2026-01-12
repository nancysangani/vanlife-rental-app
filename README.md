# VanLife Rental App 🚐

VanLife Rental App is a React-based web application that simulates a van rental platform. The project focuses on building a real-world multi-page application using React Router, demonstrating client-side routing, dynamic routes, nested layouts, protected routes, and scalable project structure.

This project is developed incrementally as a learning + portfolio project, with real-world patterns and continuous improvements.

---

## 🔗 Live Demo

> https://vanlife-rentals-react.netlify.app/

---

## 🛠️ Tech Stack

- **React** – Component-based UI development
- **React Router** – Client-side routing, loaders, nested routes
- **Firebase (Cloud Firestore)** – Backend data storage
- **Vite** – Fast development build tool
- **JavaScript (ES6+)**
- **CSS** – Styling and layout

---

## ✨ Features

- Multi-page application using React Router
- Home and About pages
- Vans listing page with filtering
- Dynamic van detail pages (`/vans/:id`)
- Nested routes for van details (pricing, photos)
- Host dashboard with nested pages
  - Dashboard overview
  - Income
  - Reviews
- Protected routes with authentication flow
- Cloud Firestore integration for persistent data
- Shared layout and navigation
- Clean and scalable folder structure

---

## 🧩 Key Concepts Used

- React Router nested routes (vans & host dashboard)
- Dynamic routing with URL parameters (:id)
- Shared layouts using Outlet
- Client-side navigation with NavLink
- Route loaders for data fetching (no useEffect)
- Centralized route error handling using errorElement
- URL-based filtering with useSearchParams
- Protected routes with auth redirection
- State persistence across navigation
- Firebase Cloud Firestore for backend data

---

## 📈 Development Timeline

- **Day 1:** Initialized the project using Vite and React. Configured React Router and created basic pages including Home and About.
- **Day 2:** Implemented the Vans listing page and dynamic van detail pages using nested routes and route parameters (`:id`).
- **Day 3:** Implemented nested routes within van detail pages, including pricing and photos sections using shared layouts and `Outlet`.
- **Day 4:** Implemented route loaders and error handling using React Router data APIs, replaced `useEffect`-based data fetching, and added van filtering functionality based on van type.
- **Day 5:** Implemented authentication flow with protected routes, including redirecting unauthenticated users to login and preserving intended navigation state.
- **Day 6:** Completed host dashboard with nested pages.
- **Day 7:** Integrated Cloud Firestore for persistent data and removed Mirage mock server.

---

## 🧠 Learning Objectives

- Build scalable React applications using modern routing patterns
- Understand dynamic, nested, and protected routes
- Use loaders and error boundaries for data fetching
- Manage URL state and filters
- Integrate a real backend (Firebase Firestore)
- Follow incremental development with clean Git history

---

## 📂 Project Structure

```
vanlife-rental-app/
├── public/
│   └── _redirects
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   │   ├── Vans/
│   │   └── Host/
│   ├── api.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── utils.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/nancysangani/vanlife-rental-app.git

# Navigate to the project directory
cd vanlife-rental-app

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🌐 Deployment

The application is deployed using **Netlify**.

**Build settings:**

- Build Command: `npm run build`
- Publish Directory: `dist`

A `_redirects` file is used to handle client-side routing properly on refresh.

---

## 🔮 Future Enhancements

- Backend integration for real van data, bookings, and reviews
- Persistent favorites and booking state
- UI/UX improvements and mobile responsiveness
- Host dashboard enhancements
- Performance optimizations

---

## 📌 Notes

This project is inspired by a van rental concept and built purely for learning and portfolio purposes. The architecture and implementation are customized to practice real-world React Router and frontend patterns.

---

## 👩‍💻 Author

**Nancy**  
BTech CSE Student | Frontend Development Learner

---

⭐ If you like this project, feel free to star the repository!
