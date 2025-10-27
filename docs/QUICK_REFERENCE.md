# Quick Reference - Task Management API

## 🚀 Inicio Rápido

```bash
# 1. Clonar repositorio
git clone <repository-url>
cd medicinal-plants

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales

# 4. Crear base de datos
createdb task_management

# 5. Iniciar en modo desarrollo
npm run start:dev
```

## 📚 Documentación Completa

- **Roadmap General**: Ver `ROADMAP.md`
- **Guía de Kanban**: Ver `docs/KANBAN_GUIDE.md`
- **Detalles por Día**:
  - Día 1: `docs/kanban-issues/dia-1-configuracion-inicial.md`
  - Día 2: `docs/kanban-issues/dia-2-modulo-usuarios.md`
  - Día 3: `docs/kanban-issues/dia-3-tareas-y-jwt.md`
  - Día 4: `docs/kanban-issues/dia-4-validaciones-y-swagger.md`
  - Día 5: `docs/kanban-issues/dia-5-testing-y-entrega.md`

## 🔑 Endpoints Principales

### Autenticación
```bash
# Registrar usuario
POST /auth/register
Body: { "email": "user@example.com", "password": "password123", "name": "User Name" }

# Login
POST /auth/login
Body: { "email": "user@example.com", "password": "password123" }
Response: { "access_token": "jwt-token" }
```

### Usuarios
```bash
GET /users                    # Listar usuarios
GET /users/:id                # Obtener usuario
POST /users                   # Crear usuario
PATCH /users/:id              # Actualizar usuario
DELETE /users/:id             # Eliminar usuario
```

### Tareas (requieren autenticación)
```bash
GET /tasks                    # Listar tareas del usuario
GET /tasks/:id                # Obtener tarea
POST /tasks                   # Crear tarea
PATCH /tasks/:id              # Actualizar tarea
DELETE /tasks/:id             # Eliminar tarea

Header: Authorization: Bearer <token>
```

## 🧪 Testing

```bash
# Tests unitarios
npm run test

# Tests e2e
npm run test:e2e

# Cobertura
npm run test:cov
```

## 📖 Swagger

Acceder a la documentación interactiva:
```
http://localhost:3000/api
```

## 🏗️ Estructura del Proyecto

```
src/
├── auth/              # Módulo de autenticación
│   ├── decorators/    # Decoradores personalizados
│   ├── guards/        # Guards JWT
│   ├── strategies/    # Estrategias Passport
│   └── dto/           # DTOs de autenticación
├── users/             # Módulo de usuarios
│   ├── dto/           # DTOs de usuarios
│   ├── entities/      # Entidad User
│   └── ...
├── tasks/             # Módulo de tareas
│   ├── dto/           # DTOs de tareas
│   ├── entities/      # Entidad Task
│   └── ...
├── common/            # Recursos comunes
│   ├── filters/       # Filtros de excepciones
│   └── decorators/    # Decoradores compartidos
└── main.ts            # Punto de entrada
```

## 📝 Comandos Útiles

```bash
# Desarrollo
npm run start:dev          # Modo watch
npm run start:debug        # Modo debug

# Producción
npm run build              # Compilar
npm run start:prod         # Iniciar producción

# Calidad de código
npm run lint               # Ejecutar linter
npm run format             # Formatear código

# Base de datos
createdb task_management   # Crear DB
dropdb task_management     # Eliminar DB
```

## 🎯 Checklist de Implementación

### Día 1
- [ ] Configurar NestJS
- [ ] Configurar PostgreSQL
- [ ] Configurar variables de entorno
- [ ] Verificar servidor funciona

### Día 2
- [ ] Crear módulo de usuarios
- [ ] Implementar CRUD de usuarios
- [ ] Hashear contraseñas
- [ ] Probar endpoints

### Día 3
- [ ] Crear módulo de auth
- [ ] Implementar JWT
- [ ] Crear módulo de tareas
- [ ] Proteger endpoints

### Día 4
- [ ] Configurar Swagger
- [ ] Mejorar validaciones
- [ ] Implementar manejo de errores
- [ ] Documentar API

### Día 5
- [ ] Escribir tests unitarios
- [ ] Escribir tests e2e
- [ ] Verificar cobertura
- [ ] Crear PR

## 🐛 Troubleshooting

### Puerto 3000 en uso
```bash
# Cambiar puerto en .env
PORT=3001
```

### Error de conexión a PostgreSQL
```bash
# Verificar que PostgreSQL está corriendo
pg_isready

# Verificar credenciales en .env
```

### Tests fallan
```bash
# Crear base de datos de test
createdb task_management_test

# Limpiar y reinstalar
rm -rf node_modules package-lock.json
npm install
```

## 📊 Convención de Commits

```
feat(users): add user CRUD endpoints
fix(auth): handle invalid token error
test(tasks): add unit tests for TaskService
docs(readme): update API documentation
refactor(auth): improve JWT validation
```

## 🌐 Despliegue

### Variables de Entorno en Producción

```env
NODE_ENV=production
DB_HOST=<cloud-host>
DB_SSL=true
JWT_SECRET=<strong-secret>
```

### Verificación Pre-Deploy

```bash
npm run lint
npm run test
npm run test:e2e
npm run build
```

## 📞 Contacto y Soporte

Para dudas o problemas:
1. Revisar documentación en `docs/`
2. Consultar Swagger en `/api`
3. Revisar issues similares en GitHub
4. Crear nuevo issue con detalles

## 🎓 Recursos de Aprendizaje

- [NestJS Docs](https://docs.nestjs.com/)
- [TypeORM Docs](https://typeorm.io/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [JWT.io](https://jwt.io/)
- [Jest Docs](https://jestjs.io/)
