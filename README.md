# 🚀 Transactly Frontend

A peer‑to‑peer payments transfer app frontend built using **React** and **Tailwind CSS**, connected to a secure backend built with **Node.js**, **Express**, and **MongoDB**. The application features user authentication, OTP verification, transaction history, and real-time user search.

## 🧪 Tech Stack (Frontend)

* **React**
* **Tailwind CSS**
* **Axios** (for API calls)
* **React Router**
* **Vercel** (for deployment)

---

## 💡 Features

* **Secure Authentication UI** (Login, Signup)
* **OTP-based Transaction Flow**
* **Transaction History Viewer**
* **User Search and Payment Interface**
* **Responsive Design**

---

## 🏗️ Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/             # Page-level components (Login, Signup, Dashboard, etc.)
├── services/          # Axios API wrappers
├── context/           # Global state (e.g., Auth Context)
├── App.js             # Main React App entry
└── main.jsx           # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v14 or higher)
* npm or yarn

### Installation

1. **Clone the frontend repository**

   ```bash
   git clone https://github.com/Dakshjain1604/transactly_frontend.git
   cd transactly_frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** with your backend URL:

   ```env
   VITE_BACKEND_URL=https://your-backend-url.onrender.com
   ```

4. **Run the app**

   ```bash
   npm run dev
   ```

---

## 🌐 Live App

Frontend hosted on Vercel: [https://transactly-frontend.vercel.app/](https://transactly-frontend.vercel.app/)

---

## 🔗 API Reference (used by frontend)

### **User Routes**

* `POST /signup` – Register a new user
* `POST /signin` – Login user
* `PUT /update` – Update user info *(auth required)*
* `GET /find` – Search for users
* `GET /Sendotp` – Generate OTP *(auth required)*
* `POST /verifyotp` – Verify OTP *(auth required)*

### **Account Routes**

* `GET /balance` – Fetch account balance *(auth required)*
* `POST /sendMoney` – Transfer money *(auth required)*
* `GET /getHistory` – View transaction history *(auth required)*

---

## 📦 Deployment

### Frontend (Vercel)

1. Connect your GitHub repo on [vercel.com](https://vercel.com)
2. Set build command to: `npm run build`
3. Set output directory to: `dist`
4. Add `VITE_BACKEND_URL` in project settings

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

---

## 📝 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file.

---

Built with ❤️ using React and Tailwind CSS.
