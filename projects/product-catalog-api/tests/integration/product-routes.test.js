// This is a starter file - students will complete this
const request = require('supertest');
const app = require('../../src/app');

describe('Product API Routes', () => {
  // Valid API key for tests
  const validApiKey = 'test-api-key';
  
  // Sample test to get started
  describe('GET /api/products', () => {
    it('should return 401 if no API key is provided', async () => {
      const res = await request(app).get('/api/products');
      expect(res.statusCode).toEqual(401);
    });
    
    it('should return a list of products with valid API key', async () => {
      const res = await request(app)
        .get('/api/products')
        .set('X-API-Key', validApiKey);
        
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('products');
      expect(Array.isArray(res.body.products)).toBe(true);
    });
    
    // Students will add more tests here
  });
  
  // More test suites to be added by students
});