# Simple Product API

A lightweight REST API for a product catalog, designed for AI-assisted testing practice.

## Features

- No database required (uses in-memory storage)
- Simple API key authentication
- Complete CRUD operations for products
- Filtering and pagination

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Get all products (with optional filtering) |
| GET | /api/products/:id | Get a single product by ID |
| POST | /api/products | Create a new product |
| PUT | /api/products/:id | Update an existing product |
| DELETE | /api/products/:id | Delete a product |
| GET | /api/products/categories/all | Get all product categories |

## Query Parameters (for GET /api/products)

- `category`: Filter by product category
- `minPrice`: Minimum price filter
- `maxPrice`: Maximum price filter
- `inStock`: Set to "true" to show only in-stock items
- `limit`: Maximum number of products to return (default: 20)
- `offset`: Number of products to skip for pagination (default: 0)

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/simple-product-api.git
   cd simple-product-api