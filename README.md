<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Task Management API - Una aplicación completa de gestión de tareas desarrollada con NestJS, PostgreSQL, JWT y testing completo.

### 🎯 Proyecto de Aprendizaje

Este proyecto sigue un plan de desarrollo de 5 días para construir una API RESTful completa con:
- 🔐 Autenticación JWT
- 👥 Gestión de usuarios
- ✅ Sistema de tareas
- 📝 Documentación Swagger
- 🧪 Tests unitarios y e2e
- 🛡️ Validaciones y manejo de errores

### 📚 Documentación del Proyecto

- **[Roadmap de 5 Días](ROADMAP.md)** - Plan completo de desarrollo
- **[Guía de Kanban](docs/KANBAN_GUIDE.md)** - Plantillas para issues de GitHub
- **[Referencia Rápida](docs/QUICK_REFERENCE.md)** - Comandos y endpoints

#### Documentación por Día
- [Día 1: Configuración Inicial](docs/kanban-issues/dia-1-configuracion-inicial.md)
- [Día 2: Módulo de Usuarios](docs/kanban-issues/dia-2-modulo-usuarios.md)
- [Día 3: Tareas y JWT](docs/kanban-issues/dia-3-tareas-y-jwt.md)
- [Día 4: Validaciones y Swagger](docs/kanban-issues/dia-4-validaciones-y-swagger.md)
- [Día 5: Testing y Entrega](docs/kanban-issues/dia-5-testing-y-entrega.md)

### 🚀 Quick Start

1. **Clonar y configurar**
   ```bash
   git clone <repository-url>
   cd medicinal-plants
   npm install
   ```

2. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   # Editar .env con tus credenciales de PostgreSQL
   ```

3. **Crear base de datos**
   ```bash
   createdb task_management
   ```

4. **Iniciar servidor**
   ```bash
   npm run start:dev
   ```

5. **Acceder a Swagger**
   ```
   http://localhost:3000/api
   ```

## 📋 Prerequisites

- Node.js (v16 o superior)
- PostgreSQL (v12 o superior)
- npm o yarn

## 🔧 Installation

```bash
$ npm install
```

## ⚙️ Configuration

Crear archivo `.env` basado en `.env.example`:

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=task_management

# JWT
JWT_SECRET=your-super-secret-key
JWT_EXPIRES_IN=1d

# App
PORT=3000
NODE_ENV=development
```

## 🏃 Run the Application

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 🧪 Run Tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 📖 API Documentation

Una vez que el servidor esté corriendo, accede a la documentación Swagger en:
```
http://localhost:3000/api
```

## 🔑 API Endpoints

### Authentication
- `POST /auth/register` - Registrar nuevo usuario
- `POST /auth/login` - Iniciar sesión y obtener JWT token

### Users
- `GET /users` - Listar usuarios
- `GET /users/:id` - Obtener usuario por ID
- `POST /users` - Crear usuario
- `PATCH /users/:id` - Actualizar usuario
- `DELETE /users/:id` - Eliminar usuario

### Tasks (Protected)
- `GET /tasks` - Listar tareas del usuario autenticado
- `GET /tasks/:id` - Obtener tarea por ID
- `POST /tasks` - Crear nueva tarea
- `PATCH /tasks/:id` - Actualizar tarea
- `DELETE /tasks/:id` - Eliminar tarea

*Nota: Los endpoints de tareas requieren autenticación JWT*

## 🛠️ Development Commands

```bash
# Generar módulo
$ nest g module <name>

# Generar controlador
$ nest g controller <name>

# Generar servicio
$ nest g service <name>

# Lint
$ npm run lint

# Format
$ npm run format
```

## 🗂️ Project Structure

```
src/
├── auth/              # Autenticación y JWT
├── users/             # Gestión de usuarios
├── tasks/             # Gestión de tareas
├── common/            # Recursos compartidos
│   ├── filters/       # Filtros de excepciones
│   └── decorators/    # Decoradores personalizados
├── app.module.ts      # Módulo raíz
└── main.ts            # Punto de entrada
```

## 🚀 Deployment

### Environment Variables for Production

Asegúrate de configurar las siguientes variables en tu entorno de producción:

```env
NODE_ENV=production
DB_HOST=<your-cloud-db-host>
DB_PORT=5432
DB_USERNAME=<your-db-user>
DB_PASSWORD=<your-db-password>
DB_DATABASE=<your-db-name>
DB_SSL=true
JWT_SECRET=<strong-random-secret>
JWT_EXPIRES_IN=1d
PORT=3000
```

### Pre-deployment Checklist

```bash
# 1. Lint
$ npm run lint

# 2. Run tests
$ npm run test
$ npm run test:e2e

# 3. Build
$ npm run build

# 4. Check for vulnerabilities
$ npm audit
```

### Deployment Platforms

Este proyecto puede ser desplegado en:
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- [Heroku](https://www.heroku.com/)
- [AWS](https://aws.amazon.com/)
- [Mau](https://mau.nestjs.com/)

## 📝 Conventional Commits

Este proyecto sigue la convención de [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(users): add user CRUD endpoints
fix(auth): handle invalid token error
test(tasks): add unit tests for TaskService
docs(readme): update API documentation
refactor(auth): improve JWT validation
```

## 🤝 Contributing

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: add some amazing feature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 License

Este proyecto está bajo la licencia UNLICENSED - ver el archivo LICENSE para más detalles.

## 🎓 Learning Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [JWT Best Practices](https://jwt.io/introduction)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
