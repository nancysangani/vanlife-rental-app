# VanLife Rental App 🚐

VanLife Rental App is a React-based web application that simulates a van rental platform. The project focuses on building a real-world multi-page application using **React Router**, demonstrating client-side routing, dynamic routes, nested layouts, and scalable project structure.

This project is being developed incrementally as a learning and portfolio project, with continuous feature additions and improvements.

---

## 🔗 Live Demo

> https://vanlife-rentals-react.netlify.app/

---

## 🛠️ Tech Stack

- **React** – Component-based UI development
- **React Router** – Client-side routing and navigation
- **Vite** – Fast development build tool
- **JavaScript (ES6+)**
- **CSS** – Styling and layout

---

## ✨ Features

- Multi-page application using React Router
- Home and About pages
- Vans listing page
- Dynamic van detail pages using URL parameters (`/vans/:id`)
- Nested routes for van details
- Shared layout and navigation
- Clean and scalable folder structure

---

## 🧩 Key Concepts Used

- React Router nested routes – for van details and host dashboard pages
- Dynamic routing with URL parameters (:id) – for individual van pages
- Shared layouts using Outlet – consistent header, navigation, and page structure
- Client-side navigation with NavLink – active link highlighting
- Route loaders for data fetching – fetching van data without useEffect
- Error handling for routes – showing user-friendly errors if fetch fails
- URL-based filtering with useSearchParams – filter vans by type (Simple, Luxury, Rugged)
- Protected routes simulation – authentication flow for host dashboard
- State persistence across navigation – keeping filter state when navigating between pages

---

## 📈 Development Timeline

- **Day 1:** Initialized the project using Vite and React. Configured React Router and created basic pages including Home and About.
- **Day 2:** Implemented the Vans listing page and dynamic van detail pages using nested routes and route parameters (`:id`).
- **Day 3:** Implemented nested routes within van detail pages, including pricing and photos sections using shared layouts and `Outlet`.
- **Day 4:** Implemented route loaders and error handling using React Router data APIs, replaced `useEffect`-based data fetching, and added van filtering functionality based on van type.
- **Day 5:** Implemented authentication flow with protected routes, including redirecting unauthenticated users to login and preserving intended navigation state.
- **Day 6:** Completed host dashboard with nested pages.
- **Upcoming:** Integrate Cloud Firestore for persistent van and booking data, along with UI/UX enhancements and additional features.

---

## 🧠 Learning Objectives

- Understand client-side routing in React
- Work with dynamic and nested routes
- Structure a scalable React application
- Apply real-world routing patterns
- Practice incremental development and version control

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
│       ├── Vans/
│   │   └── Host/
│   ├── api.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── server.js
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

This project is inspired by a van rental concept and built for learning purposes. The implementation and structure have been customized and extended as part of hands-on React Router practice.

---

## 👩‍💻 Author

**Nancy**  
BTech CSE Student | Frontend Development Learner

---

⭐ If you like this project, feel free to star the repository!
