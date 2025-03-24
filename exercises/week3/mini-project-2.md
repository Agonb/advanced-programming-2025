# Week 3 Assignment: AI-Assisted Testing

## Overview

In this assignment, you will practice using AI tools to help generate tests for a simple REST API. You'll be working with a lightweight Product Catalog API that doesn't require any external database setup.

## Learning Objectives

- Use AI tools to generate comprehensive test suites
- Understand the strengths and limitations of AI-assisted testing
- Apply best practices for unit and integration testing
- Implement GitHub Actions for continuous integration
- Document testing strategies and AI prompting techniques

## Setup Instructions

### 1. Fork and Clone the Repository

```bash
# Fork the repository first on GitHub, then clone your fork
git clone https://github.com/YOUR-USERNAME/simple-product-api.git
cd simple-product-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
npm start
# or for development with auto-reload
npm run dev
```

The server will run on http://localhost:3000.

### 4. Test the API

You can test that the API is working correctly using these curl commands:

**Health Check:**
```bash
curl http://localhost:3000/health
```

**Get All Products:**
```bash
curl -H "X-API-Key: test-api-key" http://localhost:3000/api/products
```

**Get Product by ID:**
```bash
curl -H "X-API-Key: test-api-key" http://localhost:3000/api/products/1
```

**Filter Products:**
```bash
curl -H "X-API-Key: test-api-key" "http://localhost:3000/api/products?category=electronics&inStock=true"
```

**Create a Product:**
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "X-API-Key: test-api-key" \
  -d '{"name":"Smart Watch","price":199.99,"category":"electronics","stockCount":15}' \
  http://localhost:3000/api/products
```

**Update a Product:**
```bash
curl -X PUT \
  -H "Content-Type: application/json" \
  -H "X-API-Key: test-api-key" \
  -d '{"price":89.99,"stockCount":25}' \
  http://localhost:3000/api/products/1
```

**Delete a Product:**
```bash
curl -X DELETE \
  -H "X-API-Key: test-api-key" \
  http://localhost:3000/api/products/1
```

**Get All Categories:**
```bash
curl -H "X-API-Key: test-api-key" http://localhost:3000/api/products/categories/all
```

## Assignment Tasks

1. **Complete Unit Tests** (50%)
   - Examine the product service in `src/services/product-service.js`
   - Use AI tools (GitHub Copilot, ChatGPT) to help generate unit tests in `tests/unit/product-service.test.js`
   - Ensure you test all methods and important edge cases
   - Run tests with `npm run test:unit`

2. **Complete Integration Tests** (30%)
   - Create tests for all API endpoints in `tests/integration/product-routes.test.js`
   - Test successful responses and error cases
   - Test with various query parameters and filters
   - Run tests with `npm run test:integration`

3. **Set up GitHub Actions** (10%)
   - Review the existing GitHub Actions workflow in `.github/workflows/test.yml`
   - Make any necessary adjustments to ensure it runs your tests
   - Push your changes to GitHub and verify the workflow runs

4. **Documentation** (10%)
   - Create a file called `TESTING.md` documenting your approach:
     - What AI tools you used
     - Example prompts that worked well
     - Challenges you encountered
     - How you improved upon AI-generated tests
     - Screenshots of your test results

## Documentation Requirements

Your `TESTING.md` file should include the following sections:

### 1. Testing Strategy
Explain your overall approach to testing the API.

### 2. AI-Assisted Testing Process
Describe how you used AI tools to generate tests. Include:
- Which AI tools you used
- Examples of effective prompts
- Screenshots of AI-generated tests

### 3. Test Coverage Analysis
Include information about your test coverage (run `npm run test:coverage`).

### 4. Challenges and Solutions
Discuss any limitations you found with AI-generated tests and how you addressed them.

### 5. Learnings
Reflect on what you learned about AI-assisted testing and best practices.

## Example AI Prompts to Try

Here are some example prompts to get you started:

- "Generate unit tests for the getAllProducts method in the ProductService class. Include tests for filtering by category, price range, and in-stock status."

- "Write integration tests for the POST /api/products endpoint that creates a new product. Include tests for successful creation and various validation error cases."

- "Help me improve test coverage for the updateProduct method. I need to test edge cases like updating a non-existent product and providing invalid updates."

## Evaluation Criteria

Your assignment will be evaluated based on:

- **Test Completeness** (30%): Coverage of functionality and edge cases
- **Test Quality** (20%): Well-organized, readable, and maintainable tests
- **AI Usage** (20%): Effective use of AI tools and prompt engineering
- **Documentation** (15%): Clear explanation of your approach and AI usage
- **Code Quality** (10%): Clean code following best practices
- **CI Implementation** (5%): Working GitHub Actions workflow

## Submission Instructions

1. Push all your changes to your GitHub repository
2. Ensure your repository includes:
   - Completed unit tests
   - Completed integration tests
   - Documentation file (TESTING.md)
   - Working GitHub Actions workflow

3. Submit the URL of your GitHub repository via [SUBMISSION METHOD]

## Due Date

This assignment is due by 24.03.2025