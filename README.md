# 🌿 Medicinal Plants API - Complete Development Guide# 🌿 Medicinal Plants API



<p align="center"><p align="center">

  <a href="http://nestjs.com/" target="blank">  <a href="http://nestjs.com/" target="blank">

    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />

  </a>  </a>

</p></p>



<p align="center">A complete RESTful API for managing medicinal plants and users with JWT authentication, built with NestJS, TypeORM, and PostgreSQL.

  A comprehensive RESTful API for managing medicinal plants with JWT authentication, built with NestJS, TypeORM, PostgreSQL, Docker, and complete testing suite.

</p>## 🚀 Features



## 📋 Table of Contents- **User Authentication**: JWT-based authentication with registration and login

- **CRUD Operations**: Complete Create, Read, Update, Delete operations for users and plants

1. [Project Overview](#-project-overview)- **Database Relations**: One-to-Many relationship between users and plants

2. [Development Journey](#-development-journey)- **Input Validation**: Comprehensive validation using class-validator

3. [Tech Stack](#-tech-stack)- **API Documentation**: Interactive Swagger/OpenAPI documentation

4. [Features](#-features)- **Docker Support**: Complete containerization with Docker and Docker Compose

5. [Prerequisites](#-prerequisites)- **Security**: Password hashing with bcrypt, JWT guards for protected routes

6. [Complete Setup Guide](#-complete-setup-guide)

7. [Project Structure](#-project-structure)## 🛠️ Tech Stack

8. [Database Configuration](#-database-configuration)

9. [API Documentation](#-api-documentation)- **Framework**: NestJS with TypeScript

10. [Testing Guide](#-testing-guide)- **Database**: PostgreSQL with TypeORM

11. [Docker Configuration](#-docker-configuration)- **Authentication**: JWT (JSON Web Tokens)

12. [Deployment](#-deployment)- **Validation**: class-validator and class-transformer

13. [All Commands Reference](#-all-commands-reference)- **Documentation**: Swagger/OpenAPI

14. [Troubleshooting](#-troubleshooting)- **Containerization**: Docker & Docker Compose

- **Password Security**: bcrypt

## 🎯 Project Overview

## 📋 Prerequisites

This is a complete **Medicinal Plants Management API** that started as a Spanish codebase and was completely translated to English during development. The project demonstrates professional full-stack development practices including authentication, validation, documentation, containerization, and comprehensive testing.

Before running this project, make sure you have:

### What This API Does:

- Manages medicinal plants database with CRUD operations- **Node.js** (v18 or higher)

- User authentication and authorization with JWT- **npm** (comes with Node.js)

- Secure password handling with bcrypt- **Docker** and **Docker Compose** (for containerized deployment)

- Comprehensive input validation- **A Supabase account and project** (for cloud database)

- Interactive API documentation with Swagger

- Production-ready Docker containerization

- Complete test suite (unit + e2e tests)

## 🗄️ Database Setup (Supabase)- **Docker Support**: Complete containerization with Docker and Docker Compose<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>

## 🚀 Development Journey



### Phase 1: Initial Translation (Spanish → English)

**What we did:** Complete codebase translation from Spanish to English### 1. Create Supabase Project- **Security**: Password hashing with bcrypt, JWT guards for protected routes<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>

- ✅ Translated all controllers, services, DTOs

- ✅ Converted Spanish variable names to English1. Go to [Supabase](https://supabase.com/dashboard)

- ✅ Updated all comments and documentation

- ✅ Changed database entity names to English2. Click "New Project"<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>



### Phase 2: Docker & Infrastructure Setup3. Choose your organization

**What we did:** Production-ready containerization

- ✅ Created multi-stage Dockerfile with Node.js 22 Alpine4. Fill in project details:## 🛠️ Tech Stack<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>

- ✅ Configured docker-compose.yml with Supabase integration

- ✅ Set up environment variable management   - **Name**: `medicinal-plants`

- ✅ Implemented health checks and proper networking

   - **Database Password**: Choose a strong password (save it!)<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>

### Phase 3: API Documentation

**What we did:** Complete Swagger/OpenAPI implementation   - **Region**: Choose closest to you

- ✅ Added Swagger decorators to all endpoints

- ✅ Configured bearer authentication5. Click "Create new project"- **Framework**: NestJS with TypeScript  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>

- ✅ Created comprehensive API schemas

- ✅ Set up interactive documentation at `/api/docs`



### Phase 4: Security Implementation### 2. Get Database Credentials- **Database**: PostgreSQL with TypeORM    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>

**What we did:** Complete authentication and authorization

- ✅ Implemented JWT-based authentication1. In your Supabase dashboard, go to **Settings** > **Database**

- ✅ Protected all routes except auth endpoints

- ✅ Added bcrypt password hashing2. In the **Connection info** section, copy:- **Authentication**: JWT (JSON Web Tokens)  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>

- ✅ Created custom decorators and guards

   - **Host**: (ends with `.pooler.supabase.com`)

### Phase 5: Testing Framework

**What we did:** Comprehensive testing setup   - **Database**: `postgres`- **Validation**: class-validator and class-transformer</p>

- ✅ Configured Jest with TypeScript support

- ✅ Set up unit tests for services   - **Port**: `6543` (pooler) or `5432` (direct)

- ✅ Implemented e2e tests with database integration

- ✅ Added test coverage reporting   - **User**: (starts with `postgres.`)- **Documentation**: Swagger/OpenAPI  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)



### Phase 6: Final Polish   - **Password**: The one you set when creating the project

**What we did:** Production readiness

- ✅ Created comprehensive README documentation- **Containerization**: Docker & Docker Compose  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

- ✅ Added database seeding with sample data

- ✅ Implemented proper error handling## 🛠️ Installation & Setup

- ✅ Optimized for production deployment

- **Password Security**: bcrypt

## 🛠️ Tech Stack

### Option 1: Docker (Recommended - Easiest)

| Category | Technology | Version | Purpose |

|----------|------------|---------|---------|## Description

| **Framework** | NestJS | ^11.0.1 | Backend framework |

| **Language** | TypeScript | ^5.7.3 | Type-safe development |1. **Clone the repository**:

| **Database** | PostgreSQL | Latest | Primary database |

| **ORM** | TypeORM | ^0.3.27 | Database operations |   ```bash## 📋 Prerequisites

| **Authentication** | JWT | ^11.0.1 | Token-based auth |

| **Validation** | class-validator | ^0.14.2 | Input validation |   git clone <your-repo-url>

| **Documentation** | Swagger | ^11.2.1 | API documentation |

| **Security** | bcrypt | ^6.0.0 | Password hashing |   cd medicinal-plants[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

| **Testing** | Jest | ^29.0.0 | Testing framework |

| **Containerization** | Docker | Latest | Application containerization |   ```

| **Cloud Database** | Supabase | Latest | PostgreSQL hosting |

Before running this project, make sure you have:

## 🚀 Features

2. **Configure environment variables**:

### 🔐 Authentication & Security

- **JWT Authentication**: Secure token-based authentication   ```bash## Project setup

- **Password Hashing**: bcrypt for secure password storage

- **Route Protection**: Guards protecting sensitive endpoints   # Copy the example file

- **Input Validation**: Comprehensive validation using decorators

- **CORS Configuration**: Cross-origin resource sharing setup   cp .env.example .env- **Node.js** (v18 or higher)



### 📊 Database & ORM   

- **PostgreSQL Integration**: Production-ready database

- **TypeORM**: Advanced ORM with migrations support   # Edit .env with your Supabase credentials- **npm** (comes with Node.js)```bash

- **Database Relations**: One-to-Many relationships (User → Plants)

- **Database Seeding**: Sample data for development   # Replace the placeholder values with your actual Supabase info

- **Cloud Database**: Supabase integration for production

   ```- **Docker** and **Docker Compose** (for containerized deployment)$ npm install

### 📚 API & Documentation

- **RESTful API**: Standard REST endpoints

- **Swagger Documentation**: Interactive API explorer

- **DTOs**: Data Transfer Objects for validation3. **Update docker-compose.yml**:```

- **Pagination**: Built-in pagination support

- **Error Handling**: Comprehensive error responses   Edit `docker-compose.yml` and replace these lines with your Supabase credentials:



### 🐳 DevOps & Deployment   ```yaml## 🔧 Installation & Setup

- **Docker Support**: Multi-stage containerization

- **Environment Management**: Comprehensive .env configuration   DATABASE_HOST: your-supabase-host.pooler.supabase.com

- **Health Checks**: Application health monitoring

- **Production Ready**: Optimized for deployment   DATABASE_PORT: 6543## Compile and run the project



### 🧪 Testing   DATABASE_USER: postgres.your-project-ref

- **Unit Tests**: Service layer testing

- **E2E Tests**: End-to-end integration testing   DATABASE_PASSWORD: your-actual-password### Option 1: Docker (Recommended for Production)

- **Test Coverage**: Coverage reporting

- **Database Testing**: Isolated test database   DATABASE_NAME: postgres



## 📋 Prerequisites   ``````bash



Before starting, ensure you have:



### Required Software:4. **Build and run with Docker**:1. **Clone the repository**# development

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)

- **npm** (comes with Node.js)   ```bash

- **Docker Desktop** - [Download here](https://www.docker.com/products/docker-desktop/)

- **Git** - [Download here](https://git-scm.com/)   # Build and start the application   ```bash$ npm run start



### Cloud Services:   docker-compose up --build

- **Supabase Account** - [Sign up here](https://supabase.com/)

      git clone <your-repo-url>

### Development Tools (Recommended):

- **VS Code** with extensions:   # Or run in background

  - TypeScript Hero

  - REST Client   docker-compose up -d --build   cd medicinal-plants# watch mode

  - Docker

  - Prettier   ```

  - ESLint

   ```$ npm run start:dev

## 🚀 Complete Setup Guide

5. **Access the application**:

### Step 1: Clone and Initial Setup

   - **API**: http://localhost:3000

```bash

# Clone the repository   - **Swagger Docs**: http://localhost:3000/api/docs

git clone https://github.com/angelicacvo/medicinal-plants.git

cd medicinal-plants2. **Run with Docker Compose**# production mode



# Install all dependencies### Option 2: Local Development

npm install

```   ```bash$ npm run start:prod



### Step 2: Environment Configuration1. **Install dependencies**:



1. **Copy environment template:**   ```bash   docker-compose up -d```

   ```bash

   cp .env.example .env   npm install

   ```

   ```   ```

2. **Configure your `.env` file:**

   ```env

   # Database Configuration (Supabase)

   DATABASE_HOST=aws-0-us-east-1.pooler.supabase.com2. **Set up environment variables**:## Run tests

   DATABASE_PORT=6543

   DATABASE_USERNAME=postgres.your-project-ref   ```bash

   DATABASE_PASSWORD=your-database-password

   DATABASE_NAME=postgres   cp .env.example .env3. **Access the application**



   # JWT Configuration   # Edit .env with your Supabase credentials

   JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters

   JWT_EXPIRES_IN=7d   ```   - API: http://localhost:3000```bash



   # Application Configuration

   PORT=3000

   NODE_ENV=development3. **Run the application**:   - Swagger Documentation: http://localhost:3000/api/docs# unit tests

   ```

   ```bash

### Step 3: Database Setup (Supabase)

   # Development mode$ npm run test

#### 3.1 Create Supabase Project

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)   npm run start:dev

2. Click **"New Project"**

3. Fill in project details:   ### Option 2: Local Development

   - **Name**: `medicinal-plants`

   - **Database Password**: Choose a strong password (save it!)   # Production mode

   - **Region**: Choose closest to your location

4. Click **"Create new project"** (takes 2-3 minutes)   npm run build# e2e tests



#### 3.2 Get Database Credentials   npm run start:prod

1. In your Supabase dashboard, go to **Settings** → **Database**

2. In the **Connection info** section, copy:   ```1. **Clone and install dependencies**$ npm run test:e2e

   - **Host**: `aws-0-us-east-1.pooler.supabase.com`

   - **Database**: `postgres`

   - **Port**: `6543` (pooler) or `5432` (direct)

   - **User**: `postgres.abcdefghijk` (your project reference)## 📚 API Documentation   ```bash

   - **Password**: The password you set when creating the project



#### 3.3 Update Environment Variables

Replace the placeholders in your `.env` file with actual Supabase credentials.Once the application is running, visit http://localhost:3000/api/docs for interactive API documentation with Swagger.   git clone <your-repo-url># test coverage



### Step 4: Development Setup Options



#### Option A: Docker Development (Recommended)### 🔐 Authentication Endpoints   cd medicinal-plants$ npm run test:cov



1. **Update docker-compose.yml with your credentials:**

   ```yaml

   environment:- **POST** `/auth/register` - Create new user account   npm install```

     DATABASE_HOST: your-supabase-host.pooler.supabase.com

     DATABASE_PORT: 6543- **POST** `/auth/login` - Login user

     DATABASE_USERNAME: postgres.your-project-ref

     DATABASE_PASSWORD: your-actual-password   ```

     DATABASE_NAME: postgres

     JWT_SECRET: your-super-secret-jwt-key### 👥 User Endpoints

     JWT_EXPIRES_IN: 7d

     PORT: 3000## Deployment

   ```

- **GET** `/users` - Get all users

2. **Build and run with Docker:**

   ```bash- **GET** `/users/:id` - Get user by ID2. **Setup environment variables**

   # Build and start the application

   docker-compose up --build- **POST** `/users` - Create user



   # Or run in detached mode (background)- **PUT** `/users/:id` - Update user   Create a `.env` file in the root directory:When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

   docker-compose up -d --build

- **DELETE** `/users/:id` - Delete user

   # View logs

   docker-compose logs -f app   ```env

   ```

### 🌱 Plant Endpoints

3. **Access the application:**

   - **API Base URL**: http://localhost:3000   # DatabaseIf you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

   - **Swagger Documentation**: http://localhost:3000/api/docs

   - **Health Check**: http://localhost:3000/health- **GET** `/plants` - Get all plants (public)



#### Option B: Local Development- **GET** `/plants/:id` - Get plant by ID (public)   DATABASE_HOST=localhost



1. **Start the application in development mode:**- **POST** `/plants` - Create plant (🔒 requires JWT)

   ```bash

   # Development with hot reload- **PUT** `/plants/:id` - Update plant (🔒 requires JWT)   DATABASE_PORT=5432```bash

   npm run start:dev

- **DELETE** `/plants/:id` - Delete plant (🔒 requires JWT)

   # Production mode

   npm run build   DATABASE_USERNAME=your_username$ npm install -g @nestjs/mau

   npm run start:prod

   ```## 🔑 Authentication Flow



2. **Seed the database with sample data (optional):**   DATABASE_PASSWORD=your_password$ mau deploy

   ```bash

   npm run seed### 1. Register a new user:

   ```

```bash   DATABASE_NAME=medicinal_plants_db```

### Step 5: Verify Installation

curl -X POST http://localhost:3000/auth/register \

1. **Check if the API is running:**

   ```bash  -H "Content-Type: application/json" \

   curl http://localhost:3000

   # Should return: {"message": "Medicinal Plants API is running!"}  -d '{

   ```

    "fullName": "John Doe",   # JWTWith Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

2. **Test authentication endpoints:**

   ```bash    "email": "john@example.com",

   # Register a new user

   curl -X POST http://localhost:3000/auth/register \    "password": "password123"   JWT_SECRET=your-super-secret-jwt-key-here

     -H "Content-Type: application/json" \

     -d '{  }'

       "fullName": "Test User",

       "email": "test@example.com",```   JWT_EXPIRES_IN=7d## Resources

       "password": "password123"

     }'



   # Login### 2. Login:

   curl -X POST http://localhost:3000/auth/login \

     -H "Content-Type: application/json" \```bash

     -d '{

       "email": "test@example.com",curl -X POST http://localhost:3000/auth/login \   # AppCheck out a few resources that may come in handy when working with NestJS:

       "password": "password123"

     }'  -H "Content-Type: application/json" \

   ```

  -d '{   PORT=3000

3. **Access Swagger Documentation:**

   Open http://localhost:3000/api/docs in your browser    "email": "john@example.com",



## 📁 Project Structure    "password": "password123"   ```- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.



```  }'

medicinal-plants/

├── 📁 src/                          # Source code```- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).

│   ├── 📁 auth/                     # Authentication module

│   │   ├── 📁 dto/                  # Data Transfer Objects

│   │   │   ├── 📄 login.dto.ts      # Login validation

│   │   │   └── 📄 register.dto.ts   # Registration validation### 3. Use the JWT token:3. **Setup your PostgreSQL database**- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).

│   │   ├── 📁 guards/               # Route guards

│   │   │   └── 📄 jwt.guard.ts      # JWT authentication guard```bash

│   │   ├── 📄 auth.controller.ts    # Auth endpoints (/auth/*)

│   │   ├── 📄 auth.module.ts        # Auth module configurationcurl -X POST http://localhost:3000/plants \   - Install PostgreSQL locally or use a cloud service (like Supabase)- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.

│   │   └── 📄 auth.service.ts       # Authentication logic

│   ├── 📁 common/                   # Shared utilities  -H "Content-Type: application/json" \

│   │   ├── 📁 decorators/           # Custom decorators

│   │   │   └── 📄 get-user.decorator.ts # User extraction decorator  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" \   - Create a database named `medicinal_plants_db`- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).

│   │   └── 📁 utils/                # Utility functions

│   │       └── 📄 bcrypt.util.ts    # Password hashing utilities  -d '{

│   ├── 📁 database/                 # Database configuration

│   │   ├── 📄 database.config.ts    # TypeORM configuration    "name": "Chamomile",   - Update the `.env` file with your database credentials- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).

│   │   ├── 📄 database.seeder.ts    # Sample data seeder

│   │   └── 📄 seeder.module.ts      # Seeder module    "species": "Matricaria chamomilla",

│   ├── 📁 plants/                   # Plants module

│   │   ├── 📁 dto/                  # Plant DTOs    "description": "Great for digestive issues",- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).

│   │   │   ├── 📄 create-plant.dto.ts # Plant creation validation

│   │   │   └── 📄 update-plant.dto.ts # Plant update validation    "userId": 1

│   │   ├── 📁 entities/             # Database entities

│   │   │   └── 📄 plant.entity.ts   # Plant database model  }'4. **Run the application**- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

│   │   ├── 📄 plants.controller.ts  # Plant endpoints (/plants/*)

│   │   ├── 📄 plants.module.ts      # Plants module configuration```

│   │   └── 📄 plants.service.ts     # Plant business logic

│   ├── 📁 users/                    # Users module   ```bash

│   │   ├── 📁 dto/                  # User DTOs

│   │   │   ├── 📄 create-user.dto.ts # User creation validation## 🗂️ Project Structure

│   │   │   └── 📄 update-user.dto.ts # User update validation

│   │   ├── 📁 entities/             # Database entities   # Development mode## Support

│   │   │   └── 📄 user.entity.ts    # User database model

│   │   ├── 📄 users.controller.ts   # User endpoints (/users/*)```

│   │   ├── 📄 users.module.ts       # Users module configuration

│   │   └── 📄 users.service.ts      # User business logicsrc/   npm run start:dev

│   ├── 📁 scripts/                  # Utility scripts

│   │   └── 📄 seed.ts               # Database seeding script├── auth/                 # Authentication module

│   ├── 📄 app.controller.ts         # Root endpoint

│   ├── 📄 app.module.ts             # Main application module│   ├── dto/             # Data Transfer ObjectsNest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

│   ├── 📄 main.ts                   # Application entry point

│   └── 📄 app.service.ts            # Root service│   ├── guards/          # JWT guards

├── 📁 test/                         # Test files

│   ├── 📄 app.e2e-spec.ts          # End-to-end tests│   └── strategies/      # Passport strategies   # Production mode

│   └── 📄 jest-e2e.json            # E2E test configuration

├── 📁 coverage/                     # Test coverage reports (generated)├── common/              # Shared utilities

├── 📁 dist/                         # Compiled TypeScript (generated)

├── 📁 node_modules/                 # Dependencies (generated)│   ├── decorators/      # Custom decorators   npm run build## Stay in touch

├── 📄 .env                          # Environment variables (create this)

├── 📄 .env.example                  # Environment template│   └── utils/           # Utility functions

├── 📄 .gitignore                    # Git ignore rules

├── 📄 docker-compose.yml            # Docker orchestration├── database/            # Database configuration   npm run start:prod

├── 📄 Dockerfile                    # Docker container configuration

├── 📄 eslint.config.mjs             # ESLint configuration├── plants/              # Plants module

├── 📄 jest.config.js                # Jest test configuration

├── 📄 nest-cli.json                 # Nest CLI configuration│   ├── dto/            # Plant DTOs   ```- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)

├── 📄 package.json                  # Project dependencies and scripts

├── 📄 README.md                     # This file│   └── entities/       # Plant entity

├── 📄 tsconfig.build.json           # TypeScript build configuration

└── 📄 tsconfig.json                 # TypeScript configuration├── users/               # Users module- Website - [https://nestjs.com](https://nestjs.com/)

```

│   ├── dto/            # User DTOs

## 🗄️ Database Configuration

│   └── entities/       # User entity5. **Seed the database (optional)**- Twitter - [@nestframework](https://twitter.com/nestframework)

### Database Schema

└── main.ts             # Application entry point

#### Users Table

```sql```   ```bash

CREATE TABLE users (

    id SERIAL PRIMARY KEY,

    fullName VARCHAR(255) NOT NULL,

    email VARCHAR(255) UNIQUE NOT NULL,## 🧪 Sample Data   npm run seed## License

    password VARCHAR(255) NOT NULL,

    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);The application includes a seeder that creates sample users and medicinal plants:   ```

```



#### Plants Table

```sql- **6 Users**: Specialists in different plant categoriesNest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

CREATE TABLE plants (

    id SERIAL PRIMARY KEY,- **18 Plants**: Realistic medicinal plants with descriptions

    name VARCHAR(255) NOT NULL,

    species VARCHAR(255) NOT NULL,- **Categories**: Digestive, respiratory, skin care, pain relief, nervous system, and immune system plants## 📖 API Documentation

    description TEXT,

    userId INTEGER REFERENCES users(id) ON DELETE CASCADE,

    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP## 🚨 Important Security Notes### 🔗 Endpoints Overview

);

```



### Database Relationships1. **Change JWT Secret**: Update `JWT_SECRET` in production#### Authentication Endpoints

- **One-to-Many**: One User can have many Plants

- **Foreign Key**: `plants.userId` references `users.id`2. **Environment Variables**: Never commit `.env` files- `POST /auth/register` - Register a new user

- **Cascade Delete**: When a user is deleted, their plants are also deleted

3. **Database Credentials**: Keep Supabase credentials secure- `POST /auth/login` - Login user

### Sample Data (Seeder)

4. **Password Hashing**: Passwords are automatically hashed with bcrypt

The application includes a comprehensive seeder with:

#### User Endpoints

#### 6 Sample Users:

1. **Dr. Elena Rodriguez** - Digestive system specialist## 🛠️ Docker Commands- `GET /users` - Get all users

2. **Prof. Michael Thompson** - Respiratory system expert

3. **Dr. Sarah Chen** - Skin care specialist- `GET /users/:id` - Get user by ID

4. **Dr. James Wilson** - Pain relief expert

5. **Dr. Maria Garcia** - Nervous system specialist```bash- `POST /users` - Create new user

6. **Dr. Robert Taylor** - Immune system expert

# Build and start services- `PUT /users/:id` - Update user

#### 18 Medicinal Plants:

- **Digestive**: Chamomile, Peppermint, Gingerdocker-compose up --build- `DELETE /users/:id` - Delete user

- **Respiratory**: Eucalyptus, Thyme, Sage

- **Skin Care**: Aloe Vera, Calendula, Tea Tree

- **Pain Relief**: Willow Bark, Turmeric, Arnica

- **Nervous System**: Lavender, Valerian, Lemon Balm# Start in background#### Plant Endpoints

- **Immune System**: Echinacea, Elderberry, Astragalus

docker-compose up -d- `GET /plants` - Get all plants (public)

### Running the Seeder

- `GET /plants/:id` - Get plant by ID (public)

```bash

# Seed the database with sample data# View logs- `POST /plants` - Create new plant (🔒 protected)

npm run seed

docker-compose logs -f app- `PUT /plants/:id` - Update plant (🔒 protected)

# Or using Docker

docker-compose exec app npm run seed- `DELETE /plants/:id` - Delete plant (🔒 protected)

```

# Stop services

## 📚 API Documentation

docker-compose down### 🔐 Authentication

### Base URL

- **Development**: http://localhost:3000

- **Production**: Your deployed URL

# Rebuild without cacheProtected endpoints require a JWT token in the Authorization header:

### Interactive Documentation

Visit http://localhost:3000/api/docs for the complete Swagger UI where you can:docker-compose build --no-cache```

- View all endpoints with detailed descriptions

- Test endpoints directly from the browser```Authorization: Bearer your-jwt-token-here

- See request/response examples

- Authenticate and test protected routes```



### Authentication Flow## 🐛 Troubleshooting



#### 1. Register a New User### 📚 Interactive Documentation

```bash

POST /auth/register### Common Issues:

Content-Type: application/json

Visit http://localhost:3000/api/docs for the complete interactive Swagger documentation where you can:

{

  "fullName": "John Doe",1. **Database Connection Failed**:- View all endpoints with detailed descriptions

  "email": "john@example.com",

  "password": "password123"   - Verify Supabase credentials in docker-compose.yml- Test endpoints directly from the browser

}

   - Check if your Supabase project is active- See request/response examples

# Response:

{   - Ensure correct host, port, user, and password- Authenticate and test protected routes

  "message": "User registered successfully",

  "user": {

    "id": 1,

    "fullName": "John Doe",2. **Port Already in Use**:## 🧪 Testing the API

    "email": "john@example.com"

  }   - Change port in docker-compose.yml: `"3001:3000"`

}

```### 1. Register a new user



#### 2. Login3. **JWT Errors**:```bash

```bash

POST /auth/login   - Ensure JWT_SECRET is setcurl -X POST http://localhost:3000/auth/register \

Content-Type: application/json

   - Check token format in Authorization header  -H "Content-Type: application/json" \

{

  "email": "john@example.com",  -d '{

  "password": "password123"

}4. **Docker Build Issues**:    "fullName": "John Doe",



# Response:   - Run: `docker-compose down && docker-compose up --build`    "email": "john.doe@example.com",

{

  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",    "password": "myPassword123"

  "user": {

    "id": 1,## 📝 Environment Variables Reference  }'

    "fullName": "John Doe",

    "email": "john@example.com"```

  }

}| Variable | Description | Example |

```

|----------|-------------|---------|### 2. Login

#### 3. Use JWT Token

For protected routes, include the token in the Authorization header:| `DATABASE_HOST` | Supabase host | `aws-0-us-east-1.pooler.supabase.com` |```bash

```bash

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...| `DATABASE_PORT` | Database port | `6543` |curl -X POST http://localhost:3000/auth/login \

```

| `DATABASE_USER` | Database user | `postgres.abcdefghijk` |  -H "Content-Type: application/json" \

### API Endpoints Reference

| `DATABASE_PASSWORD` | Database password | `your-secure-password` |  -d '{

#### 🔐 Authentication Endpoints (Public)

| Method | Endpoint | Description | Body Required || `DATABASE_NAME` | Database name | `postgres` |    "email": "john.doe@example.com",

|--------|----------|-------------|---------------|

| POST | `/auth/register` | Register new user | ✅ RegisterDto || `JWT_SECRET` | JWT signing secret | `your-secret-key` |    "password": "myPassword123"

| POST | `/auth/login` | Login user | ✅ LoginDto |

| `JWT_EXPIRES_IN` | Token expiration | `7d` |  }'

#### 👥 User Endpoints (Protected)

| Method | Endpoint | Description | Auth Required || `PORT` | App port | `3000` |```

|--------|----------|-------------|---------------|

| GET | `/users` | Get all users | 🔒 JWT |

| GET | `/users/:id` | Get user by ID | 🔒 JWT |

| POST | `/users` | Create new user | 🔒 JWT |## 🤝 Contributing### 3. Create a plant (with JWT token)

| PUT | `/users/:id` | Update user | 🔒 JWT |

| DELETE | `/users/:id` | Delete user | 🔒 JWT |```bash



#### 🌱 Plant Endpoints1. Fork the repositorycurl -X POST http://localhost:3000/plants \

| Method | Endpoint | Description | Auth Required |

|--------|----------|-------------|---------------|2. Create your feature branch: `git checkout -b feature/amazing-feature`  -H "Content-Type: application/json" \

| GET | `/plants` | Get all plants with pagination | ❌ Public |

| GET | `/plants/:id` | Get plant by ID | ❌ Public |3. Commit your changes: `git commit -m 'Add amazing feature'`  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" \

| POST | `/plants` | Create new plant | 🔒 JWT |

| PUT | `/plants/:id` | Update plant | 🔒 JWT |4. Push to the branch: `git push origin feature/amazing-feature`  -d '{

| DELETE | `/plants/:id` | Delete plant | 🔒 JWT |

5. Open a Pull Request    "name": "Chamomile",

### Request/Response Examples

    "species": "Matricaria chamomilla",

#### Create a Plant

```bash## 📄 License    "description": "Excellent for digestive problems and relaxation",

POST /plants

Authorization: Bearer your-jwt-token    "userId": 1

Content-Type: application/json

This project is licensed under the MIT License.  }'

{

  "name": "Chamomile",```

  "species": "Matricaria chamomilla",

  "description": "Excellent for digestive problems and relaxation",---

  "userId": 1

}## 🐳 Docker Commands



# Response:Made with ❤️ using NestJS, TypeScript, and Supabase

{```bash

  "id": 1,# Build and run containers

  "name": "Chamomile",docker-compose up -d

  "species": "Matricaria chamomilla",

  "description": "Excellent for digestive problems and relaxation",# View logs

  "userId": 1,docker-compose logs -f

  "createdAt": "2025-10-31T10:30:00.000Z",

  "updatedAt": "2025-10-31T10:30:00.000Z"# Stop containers

}docker-compose down

```

# Rebuild containers

#### Get Plants with Paginationdocker-compose up -d --build

```bash

GET /plants?page=1&limit=10# Access database

docker exec -it medicinal-plants-db psql -U postgres -d medicinal_plants_db

# Response:```

{

  "data": [## 📁 Project Structure

    {

      "id": 1,```

      "name": "Chamomile",src/

      "species": "Matricaria chamomilla",├── auth/                 # Authentication module

      "description": "Excellent for digestive problems and relaxation",│   ├── dto/             # Data Transfer Objects

      "user": {│   ├── guards/          # JWT guards

        "id": 1,│   └── auth.service.ts  # Authentication logic

        "fullName": "Dr. Elena Rodriguez",├── users/               # Users module

        "email": "elena.rodriguez@example.com"│   ├── dto/            # User DTOs

      }│   └── entities/       # User entity

    }├── plants/              # Plants module

  ],│   ├── dto/            # Plant DTOs

  "meta": {│   └── entities/       # Plant entity

    "page": 1,├── common/              # Shared utilities

    "limit": 10,│   ├── decorators/     # Custom decorators

    "total": 18,│   └── utils/          # Utility functions

    "totalPages": 2└── database/            # Database configuration and seeding

  }```

}

```## 🔄 Database Schema



## 🧪 Testing Guide### Users Table

- `id` (Primary Key)

### Test Structure- `fullName` (String)

- **Unit Tests**: Testing individual services and components- `email` (String, Unique)

- **E2E Tests**: Testing complete API workflows- `password` (String, Hashed)

- **Coverage Reports**: Code coverage analysis

### Plants Table

### Running Tests- `id` (Primary Key)

- `name` (String)

```bash- `species` (String)

# Run all unit tests- `description` (String, Optional)

npm run test- `userId` (Foreign Key → Users.id)



# Run tests in watch mode (for development)**Relationship**: One User can have many Plants (One-to-Many)

npm run test:watch

## 🛡️ Security Features

# Run end-to-end tests

npm run test:e2e- **Password Hashing**: All passwords are hashed using bcrypt

- **JWT Authentication**: Secure token-based authentication

# Generate test coverage report- **Input Validation**: All inputs are validated using decorators

npm run test:cov- **CORS**: Cross-Origin Resource Sharing enabled

- **Guard Protection**: Sensitive routes protected with JWT guards

# Debug tests

npm run test:debug## 🎯 Environment Variables

```

| Variable | Description | Example |

### Test Coverage|----------|-------------|---------|

| `DATABASE_HOST` | Database host | `localhost` |

The project maintains high test coverage:| `DATABASE_PORT` | Database port | `5432` |

- **Services**: 90%+ coverage| `DATABASE_USERNAME` | Database username | `postgres` |

- **Controllers**: 85%+ coverage| `DATABASE_PASSWORD` | Database password | `password123` |

- **E2E**: Complete authentication and CRUD flows| `DATABASE_NAME` | Database name | `medicinal_plants_db` |

| `JWT_SECRET` | JWT secret key | `your-secret-key` |

### Sample Test Cases| `JWT_EXPIRES_IN` | JWT expiration time | `7d` |

| `PORT` | Application port | `3000` |

#### Unit Test Example (Plants Service)

```typescript## 🚨 Common Issues & Solutions

describe('PlantsService', () => {

  it('should create a plant', async () => {### Issue: "Cannot connect to database"

    const createPlantDto = {**Solution**: Make sure PostgreSQL is running and credentials in `.env` are correct.

      name: 'Test Plant',

      species: 'Test Species',### Issue: "JWT token expired"

      description: 'Test Description',**Solution**: Login again to get a new token.

      userId: 1

    };### Issue: "Port 3000 already in use"

**Solution**: Change the PORT in `.env` file or stop the process using port 3000.

    const result = await service.create(createPlantDto);

    ### Issue: Docker containers not starting

    expect(result).toBeDefined();**Solution**: 

    expect(result.name).toEqual('Test Plant');```bash

  });docker-compose down

});docker-compose up -d --build

``````



#### E2E Test Example## 🤝 Contributing

```typescript

describe('Authentication Flow (e2e)', () => {1. Fork the repository

  it('should register, login, and create a plant', async () => {2. Create a feature branch

    // Register user3. Make your changes

    const registerResponse = await request(app.getHttpServer())4. Add tests if applicable

      .post('/auth/register')5. Submit a pull request

      .send({

        fullName: 'Test User',## 📄 License

        email: 'test@example.com',

        password: 'password123'This project is licensed under the MIT License.

      })

      .expect(201);## 🙋‍♂️ Support



    // Login userIf you have any questions or need help:

    const loginResponse = await request(app.getHttpServer())1. Check the Swagger documentation at `/api/docs`

      .post('/auth/login')2. Review this README

      .send({3. Check the issues section

        email: 'test@example.com',4. Create a new issue if needed

        password: 'password123'

      })---

      .expect(200);

**Happy coding! 🌿✨**
    const token = loginResponse.body.access_token;

    // Create plant with JWT token
    return request(app.getHttpServer())
      .post('/plants')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Test Plant',
        species: 'Test Species',
        description: 'Test Description',
        userId: 1
      })
      .expect(201);
  });
});
```

## 🐳 Docker Configuration

### Dockerfile (Multi-stage Build)

```dockerfile
# Stage 1: Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production stage
FROM node:22-alpine AS production

WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nestjs -u 1001

# Copy built application from builder stage
COPY --from=builder --chown=nestjs:nodejs /app/dist ./dist
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/package*.json ./

# Switch to non-root user
USER nestjs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node dist/main.js --health-check || exit 1

# Start the application
CMD ["node", "dist/main.js"]
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
      target: production
    container_name: medicinal-plants-api
    ports:
      - "3000:3000"
    environment:
      # Supabase Database Configuration
      DATABASE_HOST: your-supabase-host.pooler.supabase.com
      DATABASE_PORT: 6543
      DATABASE_USERNAME: postgres.your-project-ref
      DATABASE_PASSWORD: your-database-password
      DATABASE_NAME: postgres
      
      # JWT Configuration
      JWT_SECRET: your-super-secret-jwt-key-minimum-32-characters
      JWT_EXPIRES_IN: 7d
      
      # Application Configuration
      PORT: 3000
      NODE_ENV: production
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

networks:
  default:
    driver: bridge
```

### Docker Commands Reference

```bash
# Build the Docker image
docker build -t medicinal-plants-api .

# Run container from image
docker run -p 3000:3000 medicinal-plants-api

# Using Docker Compose (Recommended)
docker-compose up -d --build    # Build and run in background
docker-compose up --build       # Build and run with logs
docker-compose logs -f app       # View application logs
docker-compose down              # Stop and remove containers
docker-compose restart app       # Restart the application

# Development with Docker Compose
docker-compose -f docker-compose.dev.yml up --build

# Access container shell
docker-compose exec app sh

# View container status
docker-compose ps

# Remove everything (containers, networks, volumes)
docker-compose down -v --remove-orphans
```

## 🚀 Deployment

### Environment-Specific Configurations

#### Development Environment
```env
NODE_ENV=development
PORT=3000
DATABASE_HOST=localhost
# ... other development configs
```

#### Production Environment
```env
NODE_ENV=production
PORT=3000
DATABASE_HOST=your-production-db-host
# ... other production configs
```

### Deployment Platforms

#### 1. Railway Deployment
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Deploy
railway up
```

#### 2. Heroku Deployment
```bash
# Install Heroku CLI
# Create Heroku app
heroku create medicinal-plants-api

# Set environment variables
heroku config:set DATABASE_HOST=your-host
heroku config:set JWT_SECRET=your-secret

# Deploy
git push heroku main
```

#### 3. DigitalOcean App Platform
1. Connect your GitHub repository
2. Set environment variables in the dashboard
3. Deploy with automatic builds

### Production Checklist

- [ ] Environment variables configured
- [ ] Database connection tested
- [ ] JWT secret is secure (minimum 32 characters)
- [ ] CORS configured for production domains
- [ ] Health checks working
- [ ] Logging configured
- [ ] Error monitoring set up
- [ ] SSL/HTTPS enabled
- [ ] Database backups configured

## 📝 All Commands Reference

### NPM Scripts

```bash
# Development
npm run start:dev          # Start with hot reload
npm run start:debug        # Start with debugging
npm run start             # Start in production mode

# Building
npm run build             # Build for production
npm run format            # Format code with Prettier
npm run lint              # Run ESLint

# Testing
npm run test              # Run unit tests
npm run test:watch        # Run tests in watch mode
npm run test:cov          # Run tests with coverage
npm run test:debug        # Debug tests
npm run test:e2e          # Run end-to-end tests

# Database
npm run seed              # Seed database with sample data

# Utilities
npm run typeorm           # TypeORM CLI commands
```

### Docker Commands

```bash
# Basic Docker Commands
docker build -t medicinal-plants .
docker run -p 3000:3000 medicinal-plants
docker ps                            # List running containers
docker images                        # List images
docker logs container-id             # View container logs

# Docker Compose Commands
docker-compose up -d --build         # Build and run in background
docker-compose down                  # Stop containers
docker-compose logs -f app           # Follow logs
docker-compose restart app           # Restart service
docker-compose exec app sh           # Access container shell
docker-compose pull                  # Pull latest images
docker-compose ps                    # List services

# Cleanup Commands
docker system prune                  # Remove unused data
docker image prune                   # Remove unused images
docker container prune               # Remove stopped containers
docker volume prune                  # Remove unused volumes
```

### Database Commands

```bash
# Using npm scripts
npm run seed                         # Seed database

# Direct TypeORM commands
npx typeorm migration:generate -n MigrationName
npx typeorm migration:run
npx typeorm migration:revert

# Database queries (if using local PostgreSQL)
psql -h localhost -U postgres -d medicinal_plants_db
```

### Git Commands (Development Workflow)

```bash
# Basic workflow
git clone https://github.com/angelicacvo/medicinal-plants.git
git checkout -b feature/new-feature
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature

# Updating from main
git fetch origin
git merge origin/main

# Creating release
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. Database Connection Issues

**Problem**: `Error: connect ECONNREFUSED`
```bash
# Solution 1: Check Supabase credentials
# Verify in your .env file:
DATABASE_HOST=correct-supabase-host.pooler.supabase.com
DATABASE_PORT=6543
DATABASE_USERNAME=postgres.your-project-ref
DATABASE_PASSWORD=your-actual-password

# Solution 2: Test connection manually
npx typeorm connection:check
```

**Problem**: `authentication failed for user`
```bash
# Solution: Verify password and username
# Check Supabase dashboard for correct credentials
# Ensure password doesn't contain special characters that need escaping
```

#### 2. JWT Token Issues

**Problem**: `Unauthorized` or `Invalid token`
```bash
# Solution 1: Check JWT secret
# Ensure JWT_SECRET in .env is at least 32 characters long
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters

# Solution 2: Check token format
# Token should be in format: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

**Problem**: `Token expired`
```bash
# Solution: Login again to get new token
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "your-email", "password": "your-password"}'
```

#### 3. Docker Issues

**Problem**: `Port 3000 already in use`
```bash
# Solution 1: Stop existing process
lsof -ti:3000 | xargs kill -9

# Solution 2: Use different port
# In docker-compose.yml: "3001:3000"
```

**Problem**: `Docker build fails`
```bash
# Solution: Clean Docker cache
docker system prune -f
docker-compose down -v
docker-compose up --build --force-recreate
```

**Problem**: `Container exits immediately`
```bash
# Solution: Check logs
docker-compose logs app

# Common cause: Missing environment variables
# Verify all required variables are set in docker-compose.yml
```

#### 4. Testing Issues

**Problem**: Tests fail with database errors
```bash
# Solution: Ensure test database is configured
# Check test/jest-e2e.json for database settings

# Reset test database
npm run test:e2e -- --forceExit
```

**Problem**: `Jest timeout errors`
```bash
# Solution: Increase timeout in package.json
"jest": {
  "testTimeout": 30000
}
```

#### 5. NPM/Node Issues

**Problem**: `Module not found` errors
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Problem**: `TypeScript compilation errors`
```bash
# Solution: Check TypeScript version compatibility
npm install typescript@latest
npm run build
```

### Debug Mode

Enable debug mode for detailed logging:

```bash
# Development
npm run start:debug

# With environment variable
DEBUG=* npm run start:dev

# Docker debug
docker-compose -f docker-compose.yml -f docker-compose.debug.yml up
```

### Health Checks

```bash
# Check application health
curl http://localhost:3000/health

# Check database connection
curl http://localhost:3000/api/docs

# Check authentication
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "password123"}'
```

### Performance Monitoring

```bash
# Monitor application metrics
docker stats medicinal-plants-api

# Check memory usage
docker exec medicinal-plants-api ps aux

# Monitor logs in real-time
docker-compose logs -f --tail=50 app
```

## 🔒 Security Best Practices

### Environment Variables Security
- Never commit `.env` files to version control
- Use strong JWT secrets (minimum 32 characters)
- Rotate JWT secrets regularly in production
- Use environment-specific configurations

### Database Security
- Use connection pooling (configured in Supabase)
- Implement proper database user permissions
- Enable SSL connections in production
- Regular database backups

### API Security
- Input validation on all endpoints
- Rate limiting (implement if needed)
- CORS configuration for production domains
- Secure HTTP headers

### Docker Security
- Use non-root user in containers
- Multi-stage builds to reduce image size
- Regular base image updates
- Security scanning of images

## 📊 Performance Optimization

### Database Optimization
- Proper indexing on frequently queried fields
- Connection pooling configuration
- Query optimization
- Pagination for large datasets

### Application Optimization
- Caching strategies
- Compression middleware
- Lazy loading of modules
- Connection pooling

### Docker Optimization
- Multi-stage builds
- Layer caching
- Minimal base images (Alpine Linux)
- Health checks for reliability

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests for new functionality**
5. **Ensure all tests pass:**
   ```bash
   npm run test
   npm run test:e2e
   ```
6. **Format and lint code:**
   ```bash
   npm run format
   npm run lint
   ```
7. **Commit changes:**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
8. **Push to branch:**
   ```bash
   git push origin feature/amazing-feature
   ```
9. **Create Pull Request**

### Code Standards

#### Commit Message Format
Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: add new plant species endpoint
fix: resolve authentication token validation
docs: update API documentation
test: add unit tests for plant service
refactor: improve error handling
style: format code with prettier
chore: update dependencies
```

#### TypeScript Standards
- Use strict TypeScript configuration
- Implement proper typing for all functions
- Use interfaces for data structures
- Follow NestJS naming conventions

#### Testing Standards
- Write unit tests for all services
- Implement e2e tests for API endpoints
- Maintain minimum 80% code coverage
- Test both success and error scenarios

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support & Contact

### Getting Help

1. **Documentation**: Check this README first
2. **API Documentation**: Visit http://localhost:3000/api/docs
3. **Issues**: Create an issue on GitHub
4. **Discussions**: Use GitHub Discussions for questions

### Project Information

- **Repository**: https://github.com/angelicacvo/medicinal-plants
- **Author**: Angelica
- **Version**: 1.0.0
- **Last Updated**: October 31, 2025

### Acknowledgments

- **NestJS Team** for the amazing framework
- **Supabase** for excellent PostgreSQL hosting
- **TypeORM** for robust database integration
- **Docker** for containerization capabilities

---

## 🎉 Conclusion

This **Medicinal Plants API** represents a complete, production-ready backend application that demonstrates:

✅ **Professional Development Practices**
✅ **Complete Authentication & Authorization**
✅ **Comprehensive Testing Suite**
✅ **Production-Ready Containerization**
✅ **Detailed Documentation**
✅ **Security Best Practices**
✅ **Scalable Architecture**

The project successfully evolved from a Spanish codebase to a fully internationalized, professional-grade API with modern DevOps practices and comprehensive documentation.

**Happy coding! 🌿✨**

---

*Made with ❤️ using NestJS, TypeScript, PostgreSQL, Docker, and lots of coffee ☕*