# Roadmap de Desarrollo - API de Gestión de Tareas

Este documento detalla el plan de desarrollo de 5 días para construir una API de gestión de tareas con NestJS, PostgreSQL, JWT y testing completo.

## Estructura del Proyecto

El proyecto se desarrollará siguiendo las mejores prácticas de NestJS, con una arquitectura modular y escalable.

## Plan de 5 Días

### 📋 Día 1 – Preparación del entorno y configuración inicial
**Objetivo**: Configurar el proyecto base con todas las herramientas necesarias

**Entregables**:
- [x] NestJS instalado y funcionando correctamente
- [ ] Proyecto base creado con estructura limpia
- [ ] Conexión establecida a una base de datos PostgreSQL (local o nube)
- [ ] Variables de entorno configuradas (.env)
- [ ] Servidor corriendo sin errores

**Historias de Usuario**:
1. Como desarrollador, necesito tener NestJS instalado para poder crear la aplicación
2. Como desarrollador, necesito configurar PostgreSQL para almacenar datos
3. Como desarrollador, necesito configurar variables de entorno para manejar configuraciones sensibles
4. Como desarrollador, necesito verificar que el servidor corre sin errores

**Tareas Técnicas**:
- Instalar dependencias: `@nestjs/typeorm`, `typeorm`, `pg`, `@nestjs/config`
- Crear archivo `.env` con configuración de base de datos
- Configurar TypeORM en `AppModule`
- Crear entidad de prueba y verificar conexión
- Configurar ConfigModule para variables de entorno
- Documentar el proceso de setup en README

---

### 👥 Día 2 – Módulo de Usuarios y CRUD funcional
**Objetivo**: Implementar el módulo de usuarios con operaciones CRUD completas

**Entregables**:
- [ ] Módulo de usuarios creado (controller, service, module)
- [ ] Entidad User definida con sus campos
- [ ] DTOs creados para crear y actualizar usuarios
- [ ] CRUD completo funcionando: crear, leer, actualizar y eliminar usuarios
- [ ] API probada con herramientas como Postman o curl

**Historias de Usuario**:
1. Como usuario, quiero poder registrarme en el sistema proporcionando mi email y contraseña
2. Como usuario, quiero poder ver mi perfil de usuario
3. Como usuario, quiero poder actualizar mi información de perfil
4. Como administrador, quiero poder eliminar usuarios del sistema
5. Como administrador, quiero poder listar todos los usuarios

**Tareas Técnicas**:
- Generar módulo de usuarios: `nest g module users`
- Generar controlador: `nest g controller users`
- Generar servicio: `nest g service users`
- Crear entidad `User` con campos: id, email, password, name, createdAt, updatedAt
- Crear DTOs: `CreateUserDto`, `UpdateUserDto`
- Implementar servicios CRUD: create, findAll, findOne, update, remove
- Implementar endpoints en controlador
- Hashear contraseñas con bcrypt antes de guardar
- Probar endpoints con Postman/curl

---

### ✅ Día 3 – CRUD de Tareas y autenticación JWT
**Objetivo**: Implementar el módulo de tareas y proteger endpoints con JWT

**Entregables**:
- [ ] Módulo de tareas creado (controller, service, module)
- [ ] Entidad Task definida con relación a usuario
- [ ] Endpoints CRUD de tareas implementados (create, read, update, delete)
- [ ] Endpoints protegidos con autenticación JWT
- [ ] Validaciones básicas implementadas (título obligatorio, mínimo 3 caracteres)
- [ ] API probada con usuario autenticado

**Historias de Usuario**:
1. Como usuario autenticado, quiero poder crear tareas con título y descripción
2. Como usuario autenticado, quiero poder ver mis tareas
3. Como usuario autenticado, quiero poder actualizar mis tareas
4. Como usuario autenticado, quiero poder eliminar mis tareas
5. Como usuario autenticado, quiero poder marcar tareas como completadas
6. Como usuario, quiero poder iniciar sesión con mi email y contraseña
7. Como sistema, quiero que solo usuarios autenticados puedan acceder a las tareas

**Tareas Técnicas**:
- Instalar dependencias: `@nestjs/jwt`, `@nestjs/passport`, `passport`, `passport-jwt`, `bcrypt`, `class-validator`, `class-transformer`
- Generar módulo de autenticación: `nest g module auth`
- Generar servicio de auth: `nest g service auth`
- Generar controlador de auth: `nest g controller auth`
- Implementar estrategia JWT
- Crear endpoint de login que retorne JWT token
- Generar módulo de tareas: `nest g module tasks`
- Generar controlador: `nest g controller tasks`
- Generar servicio: `nest g service tasks`
- Crear entidad `Task` con campos: id, title, description, completed, userId, createdAt, updatedAt
- Establecer relación ManyToOne con User
- Crear DTOs: `CreateTaskDto`, `UpdateTaskDto` con validaciones
- Implementar Guard JWT para proteger endpoints
- Implementar servicios CRUD filtrando por usuario
- Probar autenticación y operaciones de tareas

---

### 🛡️ Día 4 – Validaciones avanzadas, manejo de errores y documentación
**Objetivo**: Mejorar la robustez de la API y documentar con Swagger

**Entregables**:
- [ ] Validaciones robustas implementadas en todos los DTOs
- [ ] Manejo profesional de errores en los servicios y controladores
- [ ] Swagger documentando todos los endpoints (/api o /docs)
- [ ] Decoradores y filtros comunes implementados (@GetUser(), HttpExceptionFilter)
- [ ] Conexión lista para funcionar tanto con base local como con base en la nube
- [ ] API completamente probada y estable

**Historias de Usuario**:
1. Como desarrollador, quiero tener documentación automática de la API
2. Como usuario de la API, quiero recibir mensajes de error claros y útiles
3. Como desarrollador, quiero tener validaciones automáticas en todos los inputs
4. Como desarrollador, quiero poder usar decoradores personalizados para código más limpio

**Tareas Técnicas**:
- Instalar dependencias: `@nestjs/swagger`
- Configurar Swagger en `main.ts`
- Agregar decoradores de Swagger en DTOs y controladores
- Crear decorador personalizado `@GetUser()` para extraer usuario del request
- Implementar `HttpExceptionFilter` global
- Agregar validaciones avanzadas en DTOs:
  - Email válido
  - Contraseña mínima 6 caracteres
  - Título de tarea mínimo 3 caracteres
  - Descripción opcional pero con límite de caracteres
- Mejorar mensajes de error en servicios
- Manejar errores de base de datos (duplicados, no encontrado, etc.)
- Configurar para funcionar con base de datos local y en la nube
- Probar todos los endpoints y casos de error

---

### 🧪 Día 5 – Testing, entrega y socialización grupal del proyecto
**Objetivo**: Asegurar calidad con tests y preparar para entrega

**Entregables**:
- [ ] Tests unitarios para TaskService implementados y pasando
- [ ] Tests e2e para flujo completo (auth → create → list → update → delete) implementados y pasando
- [ ] Cobertura de tests revisada y completa
- [ ] Revisión final de commits siguiendo la convención Conventional Commits
- [ ] Pull Request creado hacia main con todas las historias de usuario implementadas
- [ ] Socialización grupal del proyecto: explicación de endpoints, funcionalidades y tests

**Historias de Usuario**:
1. Como desarrollador, quiero tener tests automatizados para prevenir regresiones
2. Como equipo, queremos asegurar que el código cumple con estándares de calidad
3. Como desarrollador, quiero tener alta cobertura de tests
4. Como equipo, queremos tener un historial de commits limpio y descriptivo

**Tareas Técnicas**:
- Crear tests unitarios para `TaskService`:
  - create()
  - findAll()
  - findOne()
  - update()
  - remove()
- Crear tests unitarios para `UserService`
- Crear tests unitarios para `AuthService`
- Crear tests e2e:
  - Flujo de registro de usuario
  - Flujo de login
  - Flujo completo de tareas (crear, listar, actualizar, eliminar)
  - Manejo de errores y validaciones
- Ejecutar cobertura de tests: `npm run test:cov`
- Revisar y mejorar cobertura hasta alcanzar mínimo 80%
- Revisar commits y aplicar Conventional Commits si es necesario
- Crear Pull Request hacia `main`
- Preparar presentación del proyecto:
  - Demostración de endpoints con Postman
  - Explicación de arquitectura
  - Mostrar documentación Swagger
  - Mostrar resultados de tests

---

## Convención de Commits

Seguir [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` nueva funcionalidad
- `fix:` corrección de bugs
- `docs:` cambios en documentación
- `test:` agregar o modificar tests
- `refactor:` refactorización de código
- `style:` cambios de formato
- `chore:` tareas de mantenimiento

Ejemplos:
```
feat(users): add user CRUD endpoints
feat(auth): implement JWT authentication
feat(tasks): add task module with CRUD operations
test(tasks): add unit tests for TaskService
docs(swagger): add API documentation
fix(auth): handle invalid token error
```

---

## Recursos Adicionales

- [NestJS Documentation](https://docs.nestjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [JWT Best Practices](https://jwt.io/introduction)
- [Testing NestJS Applications](https://docs.nestjs.com/fundamentals/testing)
- [Swagger/OpenAPI](https://docs.nestjs.com/openapi/introduction)

---

## Notas de Implementación

### Configuración de Base de Datos

**PostgreSQL Local:**
```bash
# Instalar PostgreSQL
sudo apt-get install postgresql postgresql-contrib

# Crear base de datos
createdb task_management
```

**Variables de Entorno (.env):**
```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=task_management

# JWT
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRES_IN=1d

# App
PORT=3000
NODE_ENV=development
```

### Estructura de Carpetas Esperada

```
src/
├── auth/
│   ├── decorators/
│   │   └── get-user.decorator.ts
│   ├── dto/
│   │   └── login.dto.ts
│   ├── guards/
│   │   └── jwt-auth.guard.ts
│   ├── strategies/
│   │   └── jwt.strategy.ts
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   └── auth.service.ts
├── users/
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   └── update-user.dto.ts
│   ├── entities/
│   │   └── user.entity.ts
│   ├── users.controller.ts
│   ├── users.module.ts
│   └── users.service.ts
├── tasks/
│   ├── dto/
│   │   ├── create-task.dto.ts
│   │   └── update-task.dto.ts
│   ├── entities/
│   │   └── task.entity.ts
│   ├── tasks.controller.ts
│   ├── tasks.module.ts
│   └── tasks.service.ts
├── common/
│   ├── filters/
│   │   └── http-exception.filter.ts
│   └── decorators/
│       └── get-user.decorator.ts
├── app.module.ts
└── main.ts
```

---

## Checklist de Verificación Final

Antes de considerar el proyecto completo, verificar:

- [ ] El servidor arranca sin errores
- [ ] Todas las migraciones de base de datos están aplicadas
- [ ] Todos los endpoints están documentados en Swagger
- [ ] Todos los tests pasan (unitarios y e2e)
- [ ] La cobertura de tests es >= 80%
- [ ] Las contraseñas se hashean correctamente
- [ ] Los tokens JWT funcionan correctamente
- [ ] Las validaciones funcionan en todos los DTOs
- [ ] Los errores se manejan de forma consistente
- [ ] El código sigue las convenciones de estilo
- [ ] El README está actualizado con instrucciones de uso
- [ ] Las variables de entorno están documentadas
- [ ] El .env.example existe con todas las variables necesarias
