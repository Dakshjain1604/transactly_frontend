# Transactly - Full Stack Payments Application

A modern payment application clone built with React, Node.js, and MongoDB, featuring secure authentication, real-time transactions, and a responsive user interface.
![Screenshot 2025-05-23 at 11 55 14 PM](https://github.com/user-attachments/assets/f6dbe5b4-094f-4854-8828-74b00b46efd7)

## Features

- **User Authentication**
  - Secure login and registration
  - JWT-based authentication
  - Password encryption using bcrypt

- **Account Management**
  - Create and manage user accounts
  - View transaction history
  - ![Screenshot 2025-05-23 at 11 55 45 PM](https://github.com/user-attachments/assets/24cf8cd3-3fb1-4732-a763-4314c7155f9a)

  - Real-time balance updates

- **Modern UI/UX**
  - Responsive design using Tailwind CSS
  - Clean and intuitive interface
  - Smooth navigation with React Router

## Tech Stack

### Frontend
- React 19
- TypeScript
- Tailwind CSS
- React Router DOM
- Axios for API calls
- Vite for build tooling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Swagger for API documentation
- Zod for input validation

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

### Backend (.env)
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=3000
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:3000
```

## API Documentation

API documentation is available at `/api-docs` when running the backend server. The documentation is generated using Swagger/OpenAPI.

## Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   └── public/
│
└── backend/
    ├── controllers/
    ├── routes/
    ├── middlewares/
    └── models/
```

## Security Features

- Password hashing using bcrypt
- JWT token-based authentication
- CORS enabled
- Input validation using Zod
- Secure HTTP headers

## Deployment

The application can be deployed on any cloud platform that supports Node.js and MongoDB. Some recommended platforms:
- Frontend: Vercel, Netlify
- Backend: Railway, Render
- Database: MongoDB Atlas



