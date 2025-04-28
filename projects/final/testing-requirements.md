# Testing Requirements for Final Project
## Advanced Programming - Prof. Agon Bajgora

Testing is a critical component of modern software development and DevOps practices. This document outlines the testing requirements for your final project, which will account for a portion of your overall project evaluation.

## Testing Requirements Overview

Each final project must include the following testing components:

### 1. Unit Tests

- **Frontend**: Test individual components in isolation
  - Minimum 5 component tests
  - Test component rendering and behavior
  - Mock external dependencies and API calls

- **Backend Services**: Test individual functions and modules
  - Minimum 60% code coverage for each service
  - Focus on business logic and utility functions
  - Test both success and error cases

### 2. Integration Tests

- **API Tests**: Verify endpoint behavior
  - Test at least 3 key API endpoints per service
  - Verify correct response status codes
  - Test request validation and error handling
  - Verify payload structure

- **Service Integration**: Test interaction between services
  - Create at least 2 tests that verify service-to-service communication
  - Test authentication flow across services

### 3. Database Tests

- Test database operations
  - Verify CRUD operations work correctly
  - Test data validation rules
  - Use test databases (not production)

### 4. End-to-End Test

- Create at least 1 end-to-end test that:
  - Simulates a complete user flow
  - Interacts with the frontend
  - Validates data through the entire system

## Testing Tools & Frameworks

Recommended testing tools by component:

### Frontend Testing
- **React**: Jest + React Testing Library / Enzyme
- **Angular**: Jasmine + Karma
- **Vue**: Vue Test Utils + Jest

### Backend Testing
- **Node.js**: Jest / Mocha + Chai
- **Python**: Pytest
- **Java**: JUnit + Mockito

### API Testing
- **Postman** collections (export and include in repo)
- **Supertest** (Node.js)
- **REST Assured** (Java)

### E2E Testing
- **Cypress**
- **Selenium**
- **Playwright**

## Test Organization

Organize your tests with the following structure:

```
/service-name
  /src
    /components
    /routes
    ...
  /tests
    /unit
    /integration
    /e2e
  /coverage
```

## Testing Documentation

Include in your project documentation:

1. **Testing Strategy**: Brief explanation of your testing approach
2. **Test Coverage Report**: Include or screenshot coverage reports
3. **Running Tests**: Instructions for running tests locally
4. **CI Integration**: If you set up CI, explain how tests run in the pipeline

## Test Quality Criteria

Tests will be evaluated based on:

1. **Coverage**: Percentage of code covered by tests
2. **Relevance**: Tests should verify important business logic
3. **Readability**: Tests should be well-organized and documented
4. **Independence**: Tests should not depend on each other
5. **Reliability**: Tests should not be flaky or inconsistent

## Including Tests in CI/CD (Optional)

For advanced implementations, integrate tests into your CI/CD pipeline:

- Configure GitHub Actions to run tests on each push
- Fail the build if tests don't pass
- Generate and store test coverage reports

## Grading Impact

Testing will account for 15% of your final project grade, distributed as follows:

- **Unit Tests**: 6%
- **Integration Tests**: 5%
- **Database Tests**: 2%
- **E2E Tests**: 2%

## Testing Workflow Recommendations

1. **Write Tests Early**: Start with test cases before or alongside implementation
2. **Test-Driven Development**: Consider TDD for complex functionality
3. **Continuous Testing**: Run tests frequently during development
4. **Regression Testing**: Ensure new features don't break existing functionality

## Sample Test Cases

### Example Unit Test (Jest + React)

```javascript
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

test('renders product information correctly', () => {
  const product = {
    id: 1,
    name: 'Test Product',
    price: 19.99,
    imageUrl: 'test-image.jpg'
  };
  
  render(<ProductCard product={product} />);
  
  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('$19.99')).toBeInTheDocument();
  expect(screen.getByRole('img')).toHaveAttribute('src', 'test-image.jpg');
});
```

### Example API Test (Supertest + Node.js)

```javascript
const request = require('supertest');
const app = require('../app');

describe('Product API', () => {
  it('GET /api/products should return list of products', async () => {
    const res = await request(app)
      .get('/api/products')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
  });
  
  it('GET /api/products/:id should return 404 for invalid id', async () => {
    await request(app)
      .get('/api/products/9999')
      .expect(404);
  });
});
```

## Getting Started with Testing

To help you get started, here are some initial steps:

1. **Set up testing frameworks** when creating your project
2. **Create test files** alongside your implementation files
3. **Write simple tests first** to verify basic functionality
4. **Gradually add more complex tests** as your project evolves
5. **Run tests before committing** code to your repository

## Resources for Testing

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Mocha Documentation](https://mochajs.org/)
- [Pytest Documentation](https://docs.pytest.org/)
- [Cypress Documentation](https://docs.cypress.io/)

With these guidelines, you'll be able to implement comprehensive testing for your microservices project, ensuring quality and reliability of your application.