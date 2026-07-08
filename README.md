# SunCart 

### 🔗 Live Site: [https://sun-cart-one.vercel.app/](https://sun-cart-one.vercel.app/)

---

## 📝 Project Overview

The goal of SunCart is to practice and demonstrate modern full-stack web development using Next.js, MongoDB, and Better Auth. The project focuses on authentication, protected routes, responsive UI design, and session management in a real-world style application.

---

## 🌟 Core Features

### 👤 User System
User registration and login system with secure email and password authentication.

### 🔐 Social Sign-In
Google OAuth sign-in support.

### 🛡️ Security
Protected routes for authenticated users and persistent login sessions.

### 🛒 E-Commerce Elements
Responsive product showcase section and a user profile dashboard.

### 🎨 UI Enhancements
Password show/hide toggle, smooth animations, and a modern UI design.

### 📱 Responsiveness
Mobile-friendly responsive layout.

---

## 🛠️ Main Technologies Used

### Frontend Stack

- **Framework:** Next.js & React
- **Styling & UI Components:** Tailwind CSS, daisyUI, and @heroui/react
- **Authentication:** Better Auth with MongoDB Adapter
- **Animations:** Framer Motion and DotLottie React

### Backend & Database

- **Database:** MongoDB

---

## 📦 Dependencies Used

### Core & Frontend

- next (v16.2.6)
- react (v19.2.4)
- tailwindcss (v4)
- daisyUI (v5)

### Authentication & Database

- better-auth
- @better-auth/mongo-adapter
- mongodb

### UI, Form Handling & Animations

- react-hook-form
- react-icons
- @heroui/react
- framer-motion
- @lottiefiles/dotlottie-react

### Development Tools

- eslint
- eslint-config-next
- @tailwindcss/postcss

---

## 🚀 Local Installation & Setup Guide

Follow these steps to run the project locally on your machine.

### Prerequisites

- Ensure you have **Node.js** installed.
- Setup a **MongoDB** database instance (local or MongoDB Atlas).
- Setup **Google OAuth credentials** via Google Cloud Console if testing social logins.

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/Muna-Rahman/suncart.git
cd suncart
```

---

### Step 2: Install Dependencies

```bash
npm install
```

---

### Step 3: Environment Variables Setup

Create a `.env.local` file in the root directory of the project and provide the following configuration keys:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_auth_secret_key
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

### Step 4: Run the Development Server

```bash
npm run dev
```

Open your browser and navigate to **http://localhost:3000** to view the running application.
