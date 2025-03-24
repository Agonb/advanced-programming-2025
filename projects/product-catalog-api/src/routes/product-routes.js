const express = require('express');
const router = express.Router();
const productService = require('../services/product-service');

// Get all products
router.get('/', (req, res) => {
  try {
    const result = productService.getAllProducts(req.query);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
});

// Get product by ID
router.get('/:id', (req, res) => {
  try {
    const product = productService.getProductById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: true, message: error.message });
  }
});

// Create a new product
router.post('/', (req, res) => {
  try {
    const newProduct = productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
});

// Update a product
router.put('/:id', (req, res) => {
  try {
    const product = productService.updateProduct(req.params.id, req.body);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: true, message: error.message });
  }
});

// Delete a product
router.delete('/:id', (req, res) => {
  try {
    const result = productService.deleteProduct(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(404).json({ error: true, message: error.message });
  }
});

// Get all categories
router.get('/categories/all', (req, res) => {
  try {
    const categories = productService.getAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
});

module.exports = router;