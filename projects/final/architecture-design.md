# Architecture Design Workshop Guide
## Advanced Programming - Prof. Agon Bajgora

This guide outlines the in-class workshop activities for Week 13, focused on designing the microservices architecture for final projects.

## Workshop Goals

By the end of this session, students will:
1. Form their project teams
2. Select a project idea
3. Design their microservices architecture
4. Define service boundaries and APIs
5. Plan their database requirements
6. Create initial project repositories

## Workshop Schedule (135 minutes)

### Part 1: Introduction (20 minutes)
- Present the final project requirements and options
- Review microservices architecture principles
- Explain today's deliverables

### Part 2: Team Formation & Project Selection (20 minutes)
- Students form teams of 2-4 members
- Teams discuss project ideas from the provided list
- Each team selects a project and registers with the instructor

### Part 3: Architecture Design Activity (60 minutes)
- Teams work on designing their architecture
- Instructor and teaching assistants circulate to provide guidance
- Teams create architecture diagrams and define service boundaries

### Part 4: Peer Feedback Session (20 minutes)
- Teams pair up and present their architecture to another team
- Peer teams provide feedback and suggestions
- Teams refine their design based on feedback

### Part 5: Final Documentation & Submission (15 minutes)
- Teams finalize their architecture documents
- Create initial GitHub repositories
- Submit architecture diagrams and brief descriptions

## Workshop Materials

### For Instructor
- Slidev presentation
- Project ideas document
- Whiteboard/shared drawing tool
- Team registration form

### For Students
- Laptop with internet access
- Paper or digital drawing tools for architecture diagrams
- GitHub accounts

## Architecture Design Worksheet

Provide each team with this worksheet to complete during the workshop:

### Team Information
- Team Name: _____________________
- Team Members: _____________________
- Project Selected: _____________________

### Architecture Design
1. List your microservices (name and primary responsibility)
   - Service 1: _____________________
   - Service 2: _____________________
   - Service 3: _____________________
   - (add more as needed)

2. Frontend Application
   - Framework: _____________________
   - Key Features: _____________________
   - User Roles: _____________________

3. Database Requirements
   - Database 1: _____________________ (Type: _____, Service: _____)
   - Database 2: _____________________ (Type: _____, Service: _____)
   - (add more as needed)

4. API Endpoints (list 3-5 key endpoints per service)
   - Service 1:
     - Endpoint 1: _____________________
     - Endpoint 2: _____________________
   - Service 2:
     - Endpoint 1: _____________________
     - Endpoint 2: _____________________

5. Communication Patterns
   - Service-to-Service: _____________________
   - Frontend-to-Backend: _____________________
   - Authentication Strategy: _____________________

6. Draw your architecture diagram (attach separately)

## Facilitating the Workshop

### Before Class
1. Prepare the classroom with tables arranged for group work
2. Set up presentation equipment
3. Print architecture worksheets (if using physical copies)
4. Prepare a team registration form/spreadsheet

### During Class
1. Begin with the presentation explaining requirements and goals
2. Facilitate team formation - help students who don't have teams
3. Once teams are formed, have them register their project choices
4. Circulate during design activity to provide guidance:
   - Look for overly complex designs
   - Check for appropriate service boundaries
   - Ensure databases are properly assigned to services
   - Verify API designs follow RESTful principles
5. During peer feedback, ensure teams are giving constructive criticism
6. In the final segment, help teams document their architecture

### After Class
1. Review submitted architecture designs
2. Provide written feedback to each team by email
3. Identify common issues to address in the next class
4. Make yourself available for teams needing additional guidance

## Common Architecture Pitfalls to Watch For

Guide students to avoid these common mistakes:

1. **Too Many Microservices**: Beginners often create too many tiny services. Encourage focused, cohesive services with clear boundaries.

2. **Shared Databases**: Watch for multiple services accessing the same database tables. Each service should own its data.

3. **Chatty Communication**: Look for designs with excessive inter-service communication. Services should be relatively independent.

4. **Monolithic Thinking**: Some teams might design a distributed monolith. Help them identify true service boundaries.

5. **Overlooking Authentication**: Ensure teams have a plan for user authentication across services.

6. **Ignoring Error Handling**: Remind teams to consider what happens when a service is unavailable.

7. **Overambitious Scope**: Help teams focus on a realistic MVP for the timeframe.

## Example Architecture Diagram

Share this example to guide students (but encourage creativity):

```
┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │
│  React Frontend │      │  API Gateway    │
│                 │      │                 │
└────────┬────────┘      └────────┬────────┘
         │                        │
         ▼                        ▼
┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │
│  Auth Service   │◄────►│  User Service   │
│                 │      │                 │
└────────┬────────┘      └────────┬────────┘
         │                        │
         ▼                        ▼
┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │
│  Auth Database  │      │  User Database  │
│                 │      │                 │
└─────────────────┘      └─────────────────┘

            ┌─────────────────┐
            │                 │
            │ Content Service │
            │                 │
            └────────┬────────┘
                     │
                     ▼
            ┌─────────────────┐
            │                 │
            │Content Database │
            │                 │
            └─────────────────┘
```

## Follow-up Activities

After this workshop, students should:

1. Set up their GitHub repository with:
   - README.md describing the project
   - Architecture diagram
   - Directory structure for services
   - Initial docker-compose.yml template

2. Create Docker configuration files for each service

3. Define API contracts in more detail (OpenAPI/Swagger recommended)

4. Begin implementing service skeletons before the next class

## Next Class Preparation

Remind students to bring the following to Week 14's class:
- Working repository with initial code
- Questions or challenges encountered
- Progress on service implementations
- Prepared to give and receive code reviews