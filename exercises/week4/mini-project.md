# User Profile Microservice Mini-Project
## Advanced Programming Course - Week 6

## Project Overview

In this mini-project, you will design and implement a User Profile microservice for our e-commerce application. This microservice will be responsible for user registration, authentication, and profile management. It represents one component of a larger microservice architecture that we've been designing.

This hands-on project will help you apply the microservice concepts we've discussed in class, focusing on proper service boundaries, RESTful API design, and stateless authentication.

## Learning Objectives

After completing this mini-project, you will be able to:
- Implement a standalone microservice with well-defined responsibilities
- Design and build RESTful APIs following microservice best practices
- Apply proper data isolation principles
- Implement stateless authentication using JWT
- Document an API for other services to consume

## Project Requirements

### Core Functionality

Your User Profile microservice must implement:

1. **User Management**
   - User registration
   - Profile retrieval
   - Profile updates
   - Basic validation (email format, required fields)

2. **Authentication**
   - User login with JWT token generation
   - Protected routes requiring authentication
   - Validation of credentials

3. **API Design**
   - RESTful endpoints with appropriate HTTP methods
   - Consistent request/response formats
   - Proper HTTP status codes
   - Clear error messages

### Technical Requirements

#### Required API Endpoints

Your microservice must expose these RESTful endpoints:

| Endpoint | Method | Description | Authentication Required |
|----------|--------|-------------|------------------------|
| `/health` | GET | Service health check | No |
| `/users` | POST | Create a new user | No |
| `/users/{id}` | GET | Get user by ID | Yes |
| `/users/{id}` | PUT | Update user details | Yes |
| `/users/me` | GET | Get current user profile | Yes |
| `/auth/login` | POST | Authenticate user | No |

#### User Data Model

Your User Profile should include at least these fields:
- `id`: Unique identifier
- `email`: User email (unique)
- `password`: Hashed password (never returned in responses)
- `name`: User's full name
- `address`: Shipping/billing address information
- `registrationDate`: When the user registered
- `lastLogin`: When the user last logged in

#### API Request/Response Examples

**Create User (POST /users)**
```json
// Request
{
  "email": "user@example.com",
  "password": "securepassword",
  "name": "John Doe",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "zipCode": "12345",
    "country": "Exampleland"
  }
}

// Response (201 Created)
{
  "id": "abc123",
  "email": "user@example.com",
  "name": "John Doe",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "zipCode": "12345",
    "country": "Exampleland"
  },
  "registrationDate": "2025-03-20T14:00:00Z"
}
```

**Login (POST /auth/login)**
```json
// Request
{
  "email": "user@example.com",
  "password": "securepassword"
}

// Response (200 OK)
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "userId": "abc123"
}
```

**Get User (GET /users/me)**
```json
// Response (200 OK)
{
  "id": "abc123",
  "email": "user@example.com",
  "name": "John Doe",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "zipCode": "12345",
    "country": "Exampleland"
  },
  "registrationDate": "2025-03-20T14:00:00Z",
  "lastLogin": "2025-03-21T09:30:00Z"
}
```

#### Technical Implementation Requirements

1. **Storage**:
   - For this mini-project, you may use an in-memory data store (array/map)
   - Your implementation should be structured so that switching to a real database would be straightforward

2. **Authentication**:
   - Use JWT (JSON Web Tokens) for stateless authentication
   - Tokens should expire after a reasonable period (e.g., 24 hours)
   - Secure password storage with hashing (bcrypt or similar)

3. **Error Handling**:
   - Appropriate HTTP status codes (400 for validation errors, 401 for authentication issues, etc.)
   - Clear error messages that don't expose sensitive information
   - Consistent error response format

4. **Validation**:
   - Email format validation
   - Password strength requirements (minimum length, etc.)
   - Required fields checks

5. **Documentation**:
   - README.md with setup and API documentation
   - Code comments explaining key functionality

## Implementation Guidelines

### Recommended Project Structure

Here's a suggested structure for your microservice (adapt based on your chosen technology):

```
user-profile-service/
├── README.md                # Project documentation
├── package.json             # Dependencies (Node.js)
├── server.js                # Entry point
├── src/
│   ├── controllers/         # Request handlers
│   │   ├── userController.js
│   │   └── authController.js
│   ├── middleware/          # Authentication middleware
│   │   └── authMiddleware.js
│   ├── models/              # Data models
│   │   └── userModel.js
│   ├── routes/              # API routes
│   │   ├── userRoutes.js
│   │   └── authRoutes.js
│   ├── services/            # Business logic
│   │   └── userService.js
│   └── utils/               # Helper functions
│       ├── validation.js
│       └── passwordUtils.js
└── tests/                   # Tests (optional for this project)
```

### Recommended Technology Stack Options

You may choose one of these technology stacks:

**Node.js/Express.js**:
- Express for API routing
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing
- In-memory array for storage

**Python/Flask**:
- Flask for the web framework
- PyJWT for token handling
- Werkzeug security for password hashing
- In-memory dictionary for storage

**Java/Spring Boot**:
- Spring Boot for the framework
- Spring Security for authentication
- JJWT for token handling
- H2 in-memory database for storage

If you wish to use a different stack, please check with me first.

### Step-by-Step Implementation Guide

#### Step 1: Project Setup
1. Create a new project directory
2. Initialize with appropriate package manager (npm, pip, etc.)
3. Install required dependencies
4. Configure basic server/application
5. Implement a health check endpoint

#### Step 2: User Model & Storage
1. Define your User data model
2. Implement in-memory storage functionality
3. Create service methods for CRUD operations

#### Step 3: Authentication
1. Implement password hashing functionality
2. Create JWT token generation and validation
3. Build authentication middleware for protected routes

#### Step 4: API Routes
1. Implement route handlers for each required endpoint
2. Add request validation
3. Connect routes to your service layer
4. Apply authentication middleware to protected routes

#### Step 5: Testing
1. Test each endpoint manually (using Postman, cURL, etc.)
2. Verify that authentication and validation work correctly
3. Create a collection of sample requests for demonstration

#### Step 6: Documentation
1. Write a clear README with setup instructions
2. Document each API endpoint with examples
3. Add comments to your code explaining key functionality

## Evaluation Criteria

Your implementation will be evaluated based on:

1. **Functionality (30%)**
   - All required endpoints work correctly
   - Authentication functions properly
   - Data validation is implemented
   - Error handling is appropriate

2. **API Design (25%)**
   - RESTful principles are followed
   - Endpoints are logically named and structured
   - Request/response formats are consistent
   - HTTP methods and status codes are used correctly

3. **Code Quality (20%)**
   - Code is well-organized and follows best practices
   - Separation of concerns is maintained
   - Naming is clear and consistent
   - Comments explain complex logic

4. **Microservice Principles (15%)**
   - Service has clear boundaries and responsibilities
   - Does not take on functionality that belongs elsewhere
   - Data isolation is maintained
   - Designed to be independently deployable

5. **Documentation (10%)**
   - README provides clear setup instructions
   - API endpoints are well-documented
   - Examples are provided
   - Code is appropriately commented

## Bonus Challenges

If you complete the core requirements and want to challenge yourself further, consider implementing:

1. **Password Reset Functionality**
   - Add endpoints for initiating and completing password reset

2. **Role-Based Access Control**
   - Implement basic roles (admin, customer) with different permissions

3. **Request Rate Limiting**
   - Prevent abuse by implementing basic rate limiting

4. **Logging**
   - Add structured logging for operations and errors

5. **Simple Frontend**
   - Create a basic HTML/CSS/JS frontend for registration and login

## Submission Guidelines

- Push your code to the course GitHub repository in your assigned folder
- Include a README.md with:
  - Project description
  - Setup instructions
  - API documentation
  - Any additional features implemented
- Be prepared to demonstrate your microservice during the code review session

## Resources

### Documentation & Tutorials
- [Express.js Documentation](https://expressjs.com/)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [JWT.io - JSON Web Tokens](https://jwt.io/)
- [REST API Design Best Practices](https://restfulapi.net/)

### Example Code References
- Check the course GitHub repository for starter code examples
- Refer to the class demo for implementation patterns

### Tools
- [Postman](https://www.postman.com/) - API testing
- [JWT Debugger](https://jwt.io/#debugger) - Test JWT tokens
- [bcrypt Calculator](https://www.bcrypt-generator.com/) - Understand password hashing

## Getting Help

If you encounter difficulties during implementation:
- Check the reference materials and examples
- Discuss with classmates (collaboration is encouraged, but each student must submit their own work)
- Post questions in the course forum
- Attend office hours: Monday 10-11am
- Email me at agon.bajgora@umib.net (for urgent issues)

Good luck, and enjoy building your microservice!

---

**Prof. Agon Bajgora**  
Advanced Programming Course