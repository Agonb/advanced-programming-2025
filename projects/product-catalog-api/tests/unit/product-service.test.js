// This is a starter file - students will complete this
const productService = require('../../src/services/product-service');

describe('ProductService', () => {
  // Sample test to get started
  describe('getAllProducts', () => {
    it('should return all products when no filters are applied', () => {
      const result = productService.getAllProducts();
      expect(result.products.length).toBeGreaterThan(0);
      expect(result).toHaveProperty('total');
      expect(result).toHaveProperty('limit');
      expect(result).toHaveProperty('offset');
    });
    
    // Students will add more tests here
  });
  
  // More test suites to be added by students
});