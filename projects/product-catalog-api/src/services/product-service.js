const products = require('../data/products');

class ProductService {
  // Get all products with optional filtering
  getAllProducts(filters = {}) {
    let result = [...products];
    
    // Apply category filter
    if (filters.category) {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Apply price filters
    if (filters.minPrice) {
      result = result.filter(product => product.price >= parseFloat(filters.minPrice));
    }
    
    if (filters.maxPrice) {
      result = result.filter(product => product.price <= parseFloat(filters.maxPrice));
    }
    
    // Apply in-stock filter
    if (filters.inStock === 'true') {
      result = result.filter(product => product.inStock === true);
    }
    
    // Apply pagination
    const limit = filters.limit ? parseInt(filters.limit) : 20;
    const offset = filters.offset ? parseInt(filters.offset) : 0;
    
    return {
      total: result.length,
      limit,
      offset,
      products: result.slice(offset, offset + limit)
    };
  }
  
  // Get product by ID
  getProductById(id) {
    const product = products.find(p => p.id === id);
    
    if (!product) {
      throw new Error('Product not found');
    }
    
    return product;
  }
  
  // Create a new product
  createProduct(productData) {
    // Validate required fields
    if (!productData.name || !productData.price || !productData.category) {
      throw new Error('Product must have name, price, and category');
    }
    
    // Generate a new ID (simple approach for demo)
    const newId = (Math.max(...products.map(p => parseInt(p.id))) + 1).toString();
    
    const newProduct = {
      id: newId,
      ...productData,
      // Set defaults if not provided
      inStock: productData.inStock !== undefined ? productData.inStock : true,
      stockCount: productData.stockCount !== undefined ? productData.stockCount : 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    products.push(newProduct);
    return newProduct;
  }
  
  // Update an existing product
  updateProduct(id, updates) {
    const index = products.findIndex(p => p.id === id);
    
    if (index === -1) {
      throw new Error('Product not found');
    }
    
    // Update the product
    const updatedProduct = {
      ...products[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    products[index] = updatedProduct;
    return updatedProduct;
  }
  
  // Delete a product
  deleteProduct(id) {
    const index = products.findIndex(p => p.id === id);
    
    if (index === -1) {
      throw new Error('Product not found');
    }
    
    products.splice(index, 1);
    
    return {
      success: true,
      message: 'Product deleted successfully'
    };
  }
  
  // Get all categories
  getAllCategories() {
    const categories = [...new Set(products.map(p => p.category))];
    return { categories };
  }
}

module.exports = new ProductService();