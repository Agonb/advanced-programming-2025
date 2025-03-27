# Week 6: Microservices Architecture
## Hands-on Exercise: Designing a Microservice System

### Overview
In this hands-on exercise, you'll work in small groups to design a microservice architecture for an e-commerce application. The goal is to apply the principles of microservices design that we've discussed in the lecture.

### Time Allocation: 50 minutes
- Group formation: 5 minutes
- Design work: 30 minutes
- Preparation for presentations: 5 minutes
- Group presentations: 10 minutes (2-3 minutes per group)

### Exercise Details

#### Scenario: E-Shop Application
You are tasked with redesigning a monolithic e-commerce application into a microservices architecture. The current monolith includes:
- User registration and authentication
- Product catalog with search functionality
- Shopping cart management
- Order processing
- Payment handling
- Inventory management
- Shipping/delivery tracking
- Customer reviews and ratings
- Email notifications

#### Task 1: Service Identification (15 minutes)
1. Break down the monolith into logical microservices
2. For each service, define:
   - Its primary responsibility/business capability
   - The data it needs to own
   - Key operations it should perform

#### Task 2: Service Interactions (15 minutes)
1. Identify how services will communicate with each other
2. Determine which communication patterns to use:
   - Synchronous (REST, gRPC)
   - Asynchronous (message queue, event bus)
3. Map the critical paths for key user journeys (e.g., placing an order)
4. Identify potential bottlenecks or failure points

#### Task 3: Architecture Diagram (10 minutes)
Create a simple diagram showing:
- All microservices in your design
- Communication paths between services
- Databases or data stores
- External integrations (payment gateways, shipping providers, etc.)

You can use any diagramming method:
- Draw on paper/whiteboard
- Use a digital tool (draw.io, Lucidchart, etc.)
- Create a text-based representation

### Deliverables
Each group should prepare:
1. A list of identified microservices with brief descriptions
2. An architecture diagram showing service relationships
3. A brief explanation of key design decisions (2-3 minutes presentation)

### Evaluation Criteria
- Appropriate service boundaries based on business capabilities
- Clear ownership of data by each service
- Sensible communication patterns
- Consideration of failure scenarios
- Overall feasibility of the design

### Example Services to Consider
- User Service
- Product Catalog Service
- Inventory Service
- Order Service
- Payment Service
- Shipping Service
- Notification Service
- Review/Rating Service
- Search Service
- Analytics Service

### Tips for Success
- Focus on business capabilities when defining services
- Keep services focused and cohesive (single responsibility)
- Think about data ownership - which service should be the source of truth?
- Consider how to handle transactions that span multiple services
- Remember that microservices add distributed systems complexity

### After the Exercise
We'll have a brief presentation from each group, followed by questions and discussions about the different approaches taken. We'll analyze the trade-offs in various designs and identify common patterns that emerged.