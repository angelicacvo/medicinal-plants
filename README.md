# 🌿 Medicinal Plants API# 🌿 Medicinal Plants API<p align="center">



A complete NestJS API for managing medicinal plants with user authentication, built with TypeScript, PostgreSQL (Supabase), JWT authentication, and Docker.  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>



## 🚀 FeaturesA complete RESTful API for managing medicinal plants and users with JWT authentication, built with NestJS, TypeORM, and PostgreSQL.</p>



- **User Authentication**: JWT-based login and registration

- **CRUD Operations**: Complete management for users and plants

- **Database Relationships**: Users can own multiple plants## 🚀 Features[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

- **Input Validation**: DTOs with class-validator decorators

- **API Documentation**: Interactive Swagger/OpenAPI docs[circleci-url]: https://circleci.com/gh/nestjs/nest

- **Password Security**: bcrypt hashing

- **Route Protection**: JWT guards for protected endpoints- **User Authentication**: JWT-based authentication with registration and login

- **Docker Ready**: Complete containerization setup

- **Cloud Database**: Supabase PostgreSQL integration- **CRUD Operations**: Complete Create, Read, Update, Delete operations for users and plants  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>



## 📋 Prerequisites- **Database Relations**: One-to-Many relationship between users and plants    <p align="center">



- Node.js (v18 or higher)- **Input Validation**: Comprehensive validation using class-validator<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>

- Docker and Docker Compose

- A Supabase account and project- **API Documentation**: Interactive Swagger/OpenAPI documentation<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>



## 🗄️ Database Setup (Supabase)- **Docker Support**: Complete containerization with Docker and Docker Compose<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>



### 1. Create Supabase Project- **Security**: Password hashing with bcrypt, JWT guards for protected routes<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>

1. Go to [Supabase](https://supabase.com/dashboard)

2. Click "New Project"<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>

3. Choose your organization

4. Fill in project details:## 🛠️ Tech Stack<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>

   - **Name**: `medicinal-plants`

   - **Database Password**: Choose a strong password (save it!)<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>

   - **Region**: Choose closest to you

5. Click "Create new project"- **Framework**: NestJS with TypeScript  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>



### 2. Get Database Credentials- **Database**: PostgreSQL with TypeORM    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>

1. In your Supabase dashboard, go to **Settings** > **Database**

2. In the **Connection info** section, copy:- **Authentication**: JWT (JSON Web Tokens)  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>

   - **Host**: (ends with `.pooler.supabase.com`)

   - **Database**: `postgres`- **Validation**: class-validator and class-transformer</p>

   - **Port**: `6543` (pooler) or `5432` (direct)

   - **User**: (starts with `postgres.`)- **Documentation**: Swagger/OpenAPI  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)

   - **Password**: The one you set when creating the project

- **Containerization**: Docker & Docker Compose  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## 🛠️ Installation & Setup

- **Password Security**: bcrypt

### Option 1: Docker (Recommended - Easiest)

## Description

1. **Clone the repository**:

   ```bash## 📋 Prerequisites

   git clone <your-repo-url>

   cd medicinal-plants[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

   ```

Before running this project, make sure you have:

2. **Configure environment variables**:

   ```bash## Project setup

   # Copy the example file

   cp .env.example .env- **Node.js** (v18 or higher)

   

   # Edit .env with your Supabase credentials- **npm** (comes with Node.js)```bash

   # Replace the placeholder values with your actual Supabase info

   ```- **Docker** and **Docker Compose** (for containerized deployment)$ npm install



3. **Update docker-compose.yml**:```

   Edit `docker-compose.yml` and replace these lines with your Supabase credentials:

   ```yaml## 🔧 Installation & Setup

   DATABASE_HOST: your-supabase-host.pooler.supabase.com

   DATABASE_PORT: 6543## Compile and run the project

   DATABASE_USER: postgres.your-project-ref

   DATABASE_PASSWORD: your-actual-password### Option 1: Docker (Recommended for Production)

   DATABASE_NAME: postgres

   ``````bash



4. **Build and run with Docker**:1. **Clone the repository**# development

   ```bash

   # Build and start the application   ```bash$ npm run start

   docker-compose up --build

      git clone <your-repo-url>

   # Or run in background

   docker-compose up -d --build   cd medicinal-plants# watch mode

   ```

   ```$ npm run start:dev

5. **Access the application**:

   - **API**: http://localhost:3000

   - **Swagger Docs**: http://localhost:3000/api/docs

2. **Run with Docker Compose**# production mode

### Option 2: Local Development

   ```bash$ npm run start:prod

1. **Install dependencies**:

   ```bash   docker-compose up -d```

   npm install

   ```   ```



2. **Set up environment variables**:## Run tests

   ```bash

   cp .env.example .env3. **Access the application**

   # Edit .env with your Supabase credentials

   ```   - API: http://localhost:3000```bash



3. **Run the application**:   - Swagger Documentation: http://localhost:3000/api/docs# unit tests

   ```bash

   # Development mode$ npm run test

   npm run start:dev

   ### Option 2: Local Development

   # Production mode

   npm run build# e2e tests

   npm run start:prod

   ```1. **Clone and install dependencies**$ npm run test:e2e



## 📚 API Documentation   ```bash



Once the application is running, visit http://localhost:3000/api/docs for interactive API documentation with Swagger.   git clone <your-repo-url># test coverage



### 🔐 Authentication Endpoints   cd medicinal-plants$ npm run test:cov



- **POST** `/auth/register` - Create new user account   npm install```

- **POST** `/auth/login` - Login user

   ```

### 👥 User Endpoints

## Deployment

- **GET** `/users` - Get all users

- **GET** `/users/:id` - Get user by ID2. **Setup environment variables**

- **POST** `/users` - Create user

- **PUT** `/users/:id` - Update user   Create a `.env` file in the root directory:When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

- **DELETE** `/users/:id` - Delete user

   ```env

### 🌱 Plant Endpoints

   # DatabaseIf you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

- **GET** `/plants` - Get all plants (public)

- **GET** `/plants/:id` - Get plant by ID (public)   DATABASE_HOST=localhost

- **POST** `/plants` - Create plant (🔒 requires JWT)

- **PUT** `/plants/:id` - Update plant (🔒 requires JWT)   DATABASE_PORT=5432```bash

- **DELETE** `/plants/:id` - Delete plant (🔒 requires JWT)

   DATABASE_USERNAME=your_username$ npm install -g @nestjs/mau

## 🔑 Authentication Flow

   DATABASE_PASSWORD=your_password$ mau deploy

### 1. Register a new user:

```bash   DATABASE_NAME=medicinal_plants_db```

curl -X POST http://localhost:3000/auth/register \

  -H "Content-Type: application/json" \

  -d '{

    "fullName": "John Doe",   # JWTWith Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

    "email": "john@example.com",

    "password": "password123"   JWT_SECRET=your-super-secret-jwt-key-here

  }'

```   JWT_EXPIRES_IN=7d## Resources



### 2. Login:

```bash

curl -X POST http://localhost:3000/auth/login \   # AppCheck out a few resources that may come in handy when working with NestJS:

  -H "Content-Type: application/json" \

  -d '{   PORT=3000

    "email": "john@example.com",

    "password": "password123"   ```- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.

  }'

```- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).



### 3. Use the JWT token:3. **Setup your PostgreSQL database**- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).

```bash

curl -X POST http://localhost:3000/plants \   - Install PostgreSQL locally or use a cloud service (like Supabase)- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.

  -H "Content-Type: application/json" \

  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" \   - Create a database named `medicinal_plants_db`- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).

  -d '{

    "name": "Chamomile",   - Update the `.env` file with your database credentials- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).

    "species": "Matricaria chamomilla",

    "description": "Great for digestive issues",- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).

    "userId": 1

  }'4. **Run the application**- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

```

   ```bash

## 🗂️ Project Structure

   # Development mode## Support

```

src/   npm run start:dev

├── auth/                 # Authentication module

│   ├── dto/             # Data Transfer ObjectsNest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

│   ├── guards/          # JWT guards

│   └── strategies/      # Passport strategies   # Production mode

├── common/              # Shared utilities

│   ├── decorators/      # Custom decorators   npm run build## Stay in touch

│   └── utils/           # Utility functions

├── database/            # Database configuration   npm run start:prod

├── plants/              # Plants module

│   ├── dto/            # Plant DTOs   ```- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)

│   └── entities/       # Plant entity

├── users/               # Users module- Website - [https://nestjs.com](https://nestjs.com/)

│   ├── dto/            # User DTOs

│   └── entities/       # User entity5. **Seed the database (optional)**- Twitter - [@nestframework](https://twitter.com/nestframework)

└── main.ts             # Application entry point

```   ```bash



## 🧪 Sample Data   npm run seed## License



The application includes a seeder that creates sample users and medicinal plants:   ```



- **6 Users**: Specialists in different plant categoriesNest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

- **18 Plants**: Realistic medicinal plants with descriptions

- **Categories**: Digestive, respiratory, skin care, pain relief, nervous system, and immune system plants## 📖 API Documentation



## 🚨 Important Security Notes### 🔗 Endpoints Overview



1. **Change JWT Secret**: Update `JWT_SECRET` in production#### Authentication Endpoints

2. **Environment Variables**: Never commit `.env` files- `POST /auth/register` - Register a new user

3. **Database Credentials**: Keep Supabase credentials secure- `POST /auth/login` - Login user

4. **Password Hashing**: Passwords are automatically hashed with bcrypt

#### User Endpoints

## 🛠️ Docker Commands- `GET /users` - Get all users

- `GET /users/:id` - Get user by ID

```bash- `POST /users` - Create new user

# Build and start services- `PUT /users/:id` - Update user

docker-compose up --build- `DELETE /users/:id` - Delete user



# Start in background#### Plant Endpoints

docker-compose up -d- `GET /plants` - Get all plants (public)

- `GET /plants/:id` - Get plant by ID (public)

# View logs- `POST /plants` - Create new plant (🔒 protected)

docker-compose logs -f app- `PUT /plants/:id` - Update plant (🔒 protected)

- `DELETE /plants/:id` - Delete plant (🔒 protected)

# Stop services

docker-compose down### 🔐 Authentication



# Rebuild without cacheProtected endpoints require a JWT token in the Authorization header:

docker-compose build --no-cache```

```Authorization: Bearer your-jwt-token-here

```

## 🐛 Troubleshooting

### 📚 Interactive Documentation

### Common Issues:

Visit http://localhost:3000/api/docs for the complete interactive Swagger documentation where you can:

1. **Database Connection Failed**:- View all endpoints with detailed descriptions

   - Verify Supabase credentials in docker-compose.yml- Test endpoints directly from the browser

   - Check if your Supabase project is active- See request/response examples

   - Ensure correct host, port, user, and password- Authenticate and test protected routes



2. **Port Already in Use**:## 🧪 Testing the API

   - Change port in docker-compose.yml: `"3001:3000"`

### 1. Register a new user

3. **JWT Errors**:```bash

   - Ensure JWT_SECRET is setcurl -X POST http://localhost:3000/auth/register \

   - Check token format in Authorization header  -H "Content-Type: application/json" \

  -d '{

4. **Docker Build Issues**:    "fullName": "John Doe",

   - Run: `docker-compose down && docker-compose up --build`    "email": "john.doe@example.com",

    "password": "myPassword123"

## 📝 Environment Variables Reference  }'

```

| Variable | Description | Example |

|----------|-------------|---------|### 2. Login

| `DATABASE_HOST` | Supabase host | `aws-0-us-east-1.pooler.supabase.com` |```bash

| `DATABASE_PORT` | Database port | `6543` |curl -X POST http://localhost:3000/auth/login \

| `DATABASE_USER` | Database user | `postgres.abcdefghijk` |  -H "Content-Type: application/json" \

| `DATABASE_PASSWORD` | Database password | `your-secure-password` |  -d '{

| `DATABASE_NAME` | Database name | `postgres` |    "email": "john.doe@example.com",

| `JWT_SECRET` | JWT signing secret | `your-secret-key` |    "password": "myPassword123"

| `JWT_EXPIRES_IN` | Token expiration | `7d` |  }'

| `PORT` | App port | `3000` |```



## 🤝 Contributing### 3. Create a plant (with JWT token)

```bash

1. Fork the repositorycurl -X POST http://localhost:3000/plants \

2. Create your feature branch: `git checkout -b feature/amazing-feature`  -H "Content-Type: application/json" \

3. Commit your changes: `git commit -m 'Add amazing feature'`  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" \

4. Push to the branch: `git push origin feature/amazing-feature`  -d '{

5. Open a Pull Request    "name": "Chamomile",

    "species": "Matricaria chamomilla",

## 📄 License    "description": "Excellent for digestive problems and relaxation",

    "userId": 1

This project is licensed under the MIT License.  }'

```

---

## 🐳 Docker Commands

Made with ❤️ using NestJS, TypeScript, and Supabase
```bash
# Build and run containers
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down

# Rebuild containers
docker-compose up -d --build

# Access database
docker exec -it medicinal-plants-db psql -U postgres -d medicinal_plants_db
```

## 📁 Project Structure

```
src/
├── auth/                 # Authentication module
│   ├── dto/             # Data Transfer Objects
│   ├── guards/          # JWT guards
│   └── auth.service.ts  # Authentication logic
├── users/               # Users module
│   ├── dto/            # User DTOs
│   └── entities/       # User entity
├── plants/              # Plants module
│   ├── dto/            # Plant DTOs
│   └── entities/       # Plant entity
├── common/              # Shared utilities
│   ├── decorators/     # Custom decorators
│   └── utils/          # Utility functions
└── database/            # Database configuration and seeding
```

## 🔄 Database Schema

### Users Table
- `id` (Primary Key)
- `fullName` (String)
- `email` (String, Unique)
- `password` (String, Hashed)

### Plants Table
- `id` (Primary Key)
- `name` (String)
- `species` (String)
- `description` (String, Optional)
- `userId` (Foreign Key → Users.id)

**Relationship**: One User can have many Plants (One-to-Many)

## 🛡️ Security Features

- **Password Hashing**: All passwords are hashed using bcrypt
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: All inputs are validated using decorators
- **CORS**: Cross-Origin Resource Sharing enabled
- **Guard Protection**: Sensitive routes protected with JWT guards

## 🎯 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_HOST` | Database host | `localhost` |
| `DATABASE_PORT` | Database port | `5432` |
| `DATABASE_USERNAME` | Database username | `postgres` |
| `DATABASE_PASSWORD` | Database password | `password123` |
| `DATABASE_NAME` | Database name | `medicinal_plants_db` |
| `JWT_SECRET` | JWT secret key | `your-secret-key` |
| `JWT_EXPIRES_IN` | JWT expiration time | `7d` |
| `PORT` | Application port | `3000` |

## 🚨 Common Issues & Solutions

### Issue: "Cannot connect to database"
**Solution**: Make sure PostgreSQL is running and credentials in `.env` are correct.

### Issue: "JWT token expired"
**Solution**: Login again to get a new token.

### Issue: "Port 3000 already in use"
**Solution**: Change the PORT in `.env` file or stop the process using port 3000.

### Issue: Docker containers not starting
**Solution**: 
```bash
docker-compose down
docker-compose up -d --build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙋‍♂️ Support

If you have any questions or need help:
1. Check the Swagger documentation at `/api/docs`
2. Review this README
3. Check the issues section
4. Create a new issue if needed

---

**Happy coding! 🌿✨**