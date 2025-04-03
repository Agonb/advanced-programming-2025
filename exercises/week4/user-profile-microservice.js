// user-profile-service/server.js
// Entry point for the User Profile Microservice

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Use env variable in production

// Middleware
app.use(bodyParser.json());

// In-memory user storage (replace with database in production)
const users = [];

// ===== HELPER FUNCTIONS =====

// Find user by ID
const findUserById = (id) => {
  return users.find(user => user.id === id);
};

// Find user by email
const findUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate password strength
const isStrongPassword = (password) => {
  return password.length >= 8; // Add more rules as needed
};

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Authentication token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    
    req.user = user;
    next();
  });
};

// ===== ROUTES =====

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', service: 'user-profile-service' });
});

// TODO: Implement the following endpoints:
// 1. POST /users - Create a new user
// 2. GET /users/:id - Get user by ID (protected)
// 3. PUT /users/:id - Update user details (protected)
// 4. GET /users/me - Get current user (protected)
// 5. POST /auth/login - Authenticate user

// Start the server
app.listen(PORT, () => {
  console.log(`User Profile Service running on port ${PORT}`);
});     