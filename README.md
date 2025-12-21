# React Admin Dashboard

Admin dashboard frontend built with React, designed to work with a REST API backend.

---

## 🇬🇧 English

### 📌 Overview
This project is a frontend admin dashboard built with React.
It simulates a real administrative interface used to manage protected data from a backend API.

The dashboard is designed to work together with an authentication-based backend (JWT),
demonstrating how frontend and backend integrate in a full stack application.

---

### 🛠 Tech Stack
- React
- Vite
- JavaScript (ES6+)
- Component-based architecture
- REST API consumption

---

### 🧭 Application Flow
1. The user accesses the dashboard.
2. The user logs in using credentials.
3. The frontend sends the credentials to the backend API.
4. The backend returns a JWT token.
5. The frontend stores the token.
6. Protected API requests include the token in the Authorization header.
7. The dashboard displays protected content based on user role.

---

### 🔗 Backend Integration
This frontend is designed to work with the following backend API:

- **Repository:** `node-express-auth-api`
- **Login endpoint:** `POST /api/auth/login`
- **Protected endpoint:** `GET /api/admin/secret`

Example request from the frontend:

```js
fetch("http://localhost:3000/api/admin/secret", {
  headers: {
    Authorization: `Bearer ${token}`
  }
}); 
