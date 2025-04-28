# Final Project Requirements & Grading Guide
## Advanced Programming - Prof. Agon Bajgora

This document outlines the detailed requirements, deliverables, and evaluation criteria for the final project, worth 40% of your total course grade.

## Core Requirements

Every final project must include the following components:

### 1. Architecture & Services
- **Microservices Architecture**: Implement at least 2 separate backend services plus a frontend
- **Service Boundaries**: Each service should have clear responsibilities and API contracts
- **Independent Deployment**: Services must be containerized separately

### 2. Technology Stack
- **Frontend**: Single-page application using a modern framework (React, Angular, Vue.js)
- **Backend Services**: RESTful APIs using appropriate frameworks (Node.js/Express, Spring Boot, Django, etc.)
- **Database**: At least one database (SQL or NoSQL) with proper data modeling
- **API Communication**: Well-defined interfaces between services
- **Configuration**: Environment variables for configuration

### 3. Infrastructure & Deployment
- **Docker**: Each service must have a Dockerfile
- **Docker Compose**: Complete docker-compose.yml for local deployment
- **Environment Isolation**: Proper separation of development and production concerns

### 4. Security Fundamentals
- **Authentication**: User registration and login functionality
- **Authorization**: Basic role-based access control
- **Input Validation**: Sanitization of user inputs
- **Secure Configurations**: No hardcoded credentials

### 5. Code Quality & Documentation
- **README Documentation**: Setup instructions, architecture overview
- **API Documentation**: Endpoints, parameters, response formats
- **Code Organization**: Clean, readable, and well-structured code
- **Git History**: Meaningful commits and proper use of Git

## Optional Advanced Features

Teams can implement additional features for higher scores:

- **API Gateway**: Centralized entry point for frontend-to-backend communication
- **Service Discovery**: Dynamic service registration and discovery
- **Message Queue**: Asynchronous communication between services
- **Caching Layer**: Performance optimization with Redis or similar
- **Comprehensive Testing**: Unit and integration tests
- **CI/CD Pipeline**: Automated builds and tests
- **Monitoring**: Basic health checks and logging
- **Advanced Security**: JWT implementation, HTTPS, etc.

## Project Deliverables

Your team must submit:

1. **GitHub Repository** containing:
   - Source code for all services
   - Dockerfiles and docker-compose.yml
   - Documentation (README.md, API docs)
   - Architecture diagram(s)

2. **Architecture Design Document** explaining:
   - Service boundaries and responsibilities
   - Database schema design
   - API contracts between services
   - Technology choices and justification

3. **Working Demo** during final presentation showing:
   - End-to-end functionality
   - Deployment with Docker Compose
   - Key features in action

## Project Timeline

- **Week 13**: Architecture design and planning
  - Form teams
  - Choose project idea
  - Design microservices architecture
  - Define API contracts

- **Week 14**: Development and peer reviews
  - Implement core functionality
  - Set up Docker and Docker Compose
  - Conduct peer code reviews
  - Address feedback and iterate

- **Week 15**: Finalization and presentations
  - Complete all required functionality
  - Prepare demo
  - Final documentation
  - Present to class

## Evaluation Criteria

The final project (40% of course grade) will be evaluated based on:

### 1. Architecture Design (20%)
- Appropriate service boundaries
- Well-designed API contracts
- Proper database modeling
- Clear separation of concerns

### 2. Implementation (30%)
- Working functionality
- Code quality and organization
- Error handling
- Feature completeness

### 3. Docker Integration (20%)
- Correct containerization
- Working Docker Compose setup
- Environment configuration
- Deployment clarity

### 4. Documentation (15%)
- Clear README and setup instructions
- API documentation
- Architecture diagrams
- Code comments

### 5. Presentation (15%)
- Live demonstration
- Clear explanation of architecture
- Team member contributions
- Handling of Q&A

## Grading Rubric

| Grade | Description |
|-------|-------------|
| A (90-100%) | Excellent implementation with all requirements met; additional advanced features; exceptional design and documentation; flawless demo |
| B (80-89%) | Strong implementation with all core requirements met; good design and documentation; successful demo with minor issues |
| C (70-79%) | Satisfactory implementation with most core requirements met; basic documentation; partially successful demo |
| D (60-69%) | Incomplete implementation with several core requirements missing; minimal documentation; problematic demo |
| F (below 60%) | Major components missing or non-functional; severe architectural issues; failed demo |

## Team Evaluation

Each team member will complete a peer evaluation form assessing their teammates' contributions. These evaluations may adjust individual grades from the team score.

Areas of contribution include:
- Code implementation
- Architecture design
- Documentation
- Problem-solving
- Team communication

## Getting Help

If your team encounters challenges:
- Attend office hours: Monday 10-11am
- Email: agon.bajgora@umib.net
- Post questions in the course forum
- Schedule a team meeting with the instructor

Remember: The goal is to apply course concepts in a practical, working application. Focus on implementing a solid microservices architecture rather than complex features.