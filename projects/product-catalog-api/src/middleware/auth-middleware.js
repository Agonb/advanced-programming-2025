// Simple API key authentication middleware
const authMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    
    if (!apiKey || apiKey !== 'test-api-key') {
      return res.status(401).json({
        error: true,
        message: 'Invalid API key',
        code: 'INVALID_API_KEY'
      });
    }
    
    next();
  };
  
  module.exports = authMiddleware;