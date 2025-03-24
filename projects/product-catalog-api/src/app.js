const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/product-routes');
const authMiddleware = require('./middleware/auth-middleware');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/products', authMiddleware, productRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: true,
    message: 'Internal Server Error',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

module.exports = app;