version: '3.8'

services:
  # Frontend service
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    depends_on:
      - api-gateway
    environment:
      - REACT_APP_API_URL=http://api-gateway:8000
      - NODE_ENV=development
    volumes:
      - ./frontend:/app
      - /app/node_modules

  # API Gateway
  api-gateway:
    build:
      context: ./api-gateway
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    depends_on:
      - auth-service
      - main-service
    environment:
      - AUTH_SERVICE_URL=http://auth-service:8001
      - MAIN_SERVICE_URL=http://main-service:8002
      - NODE_ENV=development
    volumes:
      - ./api-gateway:/app
      - /app/node_modules

  # Authentication Service
  auth-service:
    build:
      context: ./auth-service
      dockerfile: Dockerfile
    ports:
      - "8001:8001"
    depends_on:
      - auth-db
    environment:
      - DATABASE_URL=mongodb://auth-db:27017/auth
      - JWT_SECRET=your_jwt_secret_here
      - NODE_ENV=development
    volumes:
      - ./auth-service:/app
      - /app/node_modules

  # Main Business Logic Service
  main-service:
    build:
      context: ./main-service
      dockerfile: Dockerfile
    ports:
      - "8002:8002"
    depends_on:
      - main-db
    environment:
      - DATABASE_URL=mongodb://main-db:27017/main
      - NODE_ENV=development
    volumes:
      - ./main-service:/app
      - /app/node_modules

  # Auth Database
  auth-db:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - auth-data:/data/db

  # Main Database
  main-db:
    image: mongo:latest
    ports:
      - "27018:27017"
    volumes:
      - main-data:/data/db

volumes:
  auth-data:
  main-data: