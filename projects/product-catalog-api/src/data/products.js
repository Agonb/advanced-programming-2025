// In-memory product database
const products = [
    {
      id: "1",
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      price: 99.99,
      category: "electronics",
      inStock: true,
      stockCount: 45
    },
    {
      id: "2",
      name: "Smartphone",
      description: "Latest model with high-resolution camera",
      price: 699.99,
      category: "electronics",
      inStock: true,
      stockCount: 20
    },
    {
      id: "3",
      name: "Running Shoes",
      description: "Comfortable shoes for long-distance running",
      price: 79.99,
      category: "sports",
      inStock: true,
      stockCount: 30
    },
    {
      id: "4",
      name: "Coffee Maker",
      description: "Automatic coffee maker with timer",
      price: 49.99,
      category: "home",
      inStock: false,
      stockCount: 0
    },
    {
      id: "5",
      name: "Novel - The Adventure",
      description: "Bestselling fiction novel",
      price: 19.99,
      category: "books",
      inStock: true,
      stockCount: 100
    }
  ];
  
  module.exports = products;