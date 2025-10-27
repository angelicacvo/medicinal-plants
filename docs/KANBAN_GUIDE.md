# Guía para Crear Issues en el Kanban Board

Este documento proporciona plantillas listas para copiar y pegar directamente en GitHub Issues para poblar el tablero Kanban del proyecto.

## 📌 Instrucciones

1. Ir a https://github.com/users/angelicacvo/projects/6/views/1
2. Para cada día, crear un nuevo Issue en el repositorio
3. Copiar el contenido correspondiente de este documento
4. Agregar el Issue al proyecto Kanban
5. Asignar etiquetas apropiadas
6. Asignar a los miembros del equipo correspondientes

## 🏷️ Etiquetas Recomendadas

Crear las siguientes etiquetas en el repositorio:
- `día-1` - Setup y configuración
- `día-2` - Módulo de usuarios
- `día-3` - Módulo de tareas y JWT
- `día-4` - Validaciones y documentación
- `día-5` - Testing y entrega
- `backend` - Trabajo de backend
- `database` - Trabajo relacionado con base de datos
- `authentication` - Autenticación y seguridad
- `documentation` - Documentación
- `testing` - Tests

---

## Issue 1: Día 1 – Preparación del entorno y configuración inicial

**Título:** `Día 1: Configuración inicial del proyecto NestJS con PostgreSQL`

**Etiquetas:** `día-1`, `backend`, `database`

**Descripción:**

```markdown
## 🎯 Objetivo
Configurar el proyecto base de NestJS con todas las herramientas y dependencias necesarias para el desarrollo.

## ✅ Criterios de Aceptación
- [x] NestJS instalado y funcionando correctamente
- [ ] Proyecto base creado con estructura limpia
- [ ] Conexión establecida a una base de datos PostgreSQL (local o nube)
- [ ] Variables de entorno configuradas (.env)
- [ ] Servidor corriendo sin errores

## 📋 Tareas Principales
1. Instalar dependencias: `@nestjs/typeorm`, `typeorm`, `pg`, `@nestjs/config`
2. Crear archivo `.env` con configuración de base de datos
3. Configurar TypeORM en `AppModule`
4. Configurar ConfigModule para variables de entorno
5. Verificar conexión a base de datos
6. Documentar proceso de setup en README

## 🧪 Verificación
- [ ] `npm run build` completa sin errores
- [ ] `npm run start:dev` inicia servidor sin errores
- [ ] Conexión a PostgreSQL exitosa
- [ ] Variables de entorno se cargan correctamente

## 📚 Recursos
- [NestJS Configuration](https://docs.nestjs.com/techniques/configuration)
- [TypeORM with NestJS](https://docs.nestjs.com/techniques/database)

## ⏱️ Estimación
4-6 horas

Para más detalles, ver: `docs/kanban-issues/dia-1-configuracion-inicial.md`
```

---

## Issue 2: Día 2 – Módulo de Usuarios y CRUD funcional

**Título:** `Día 2: Implementar módulo de usuarios con CRUD completo`

**Etiquetas:** `día-2`, `backend`

**Descripción:**

```markdown
## 🎯 Objetivo
Implementar el módulo completo de usuarios con todas las operaciones CRUD y hasheo de contraseñas.

## ✅ Criterios de Aceptación
- [ ] Módulo de usuarios creado (controller, service, module)
- [ ] Entidad User definida con sus campos
- [ ] DTOs creados para crear y actualizar usuarios
- [ ] CRUD completo funcionando: crear, leer, actualizar y eliminar usuarios
- [ ] Contraseñas se hashean con bcrypt
- [ ] API probada con herramientas como Postman o curl

## 📋 Tareas Principales
1. Instalar `bcrypt`, `class-validator`, `class-transformer`
2. Generar módulo, controlador y servicio de usuarios
3. Crear entidad User con TypeORM
4. Crear DTOs con validaciones
5. Implementar servicios CRUD
6. Implementar endpoints en controlador
7. Habilitar validaciones globales con ValidationPipe
8. Probar todos los endpoints

## 🧪 Verificación
- [ ] POST /users crea usuario con contraseña hasheada
- [ ] GET /users retorna lista sin contraseñas
- [ ] GET /users/:id retorna usuario específico
- [ ] PATCH /users/:id actualiza usuario
- [ ] DELETE /users/:id elimina usuario
- [ ] Validaciones funcionan (email inválido retorna 400)

## 📚 Recursos
- [NestJS CRUD](https://docs.nestjs.com/recipes/crud-generator)
- [Class Validator](https://github.com/typestack/class-validator)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

## ⏱️ Estimación
6-8 horas

## 🔗 Dependencias
- Issue #1 (Día 1) debe estar completo

Para más detalles, ver: `docs/kanban-issues/dia-2-modulo-usuarios.md`
```

---

## Issue 3: Día 3 – CRUD de Tareas y autenticación JWT

**Título:** `Día 3: Implementar módulo de tareas y autenticación JWT`

**Etiquetas:** `día-3`, `backend`, `authentication`

**Descripción:**

```markdown
## 🎯 Objetivo
Implementar el módulo de tareas con CRUD completo y proteger todos los endpoints con autenticación JWT.

## ✅ Criterios de Aceptación
- [ ] Módulo de tareas creado (controller, service, module)
- [ ] Entidad Task definida con relación a usuario
- [ ] Endpoints CRUD de tareas implementados (create, read, update, delete)
- [ ] Endpoints protegidos con autenticación JWT
- [ ] Validaciones básicas implementadas (título obligatorio, mínimo 3 caracteres)
- [ ] API probada con usuario autenticado

## 📋 Tareas Principales
1. Instalar dependencias JWT y Passport
2. Crear módulo de autenticación
3. Implementar estrategia JWT y guards
4. Crear endpoints de login y register
5. Generar módulo de tareas
6. Crear entidad Task con relación a User
7. Implementar CRUD de tareas filtrando por usuario
8. Crear decorador @GetUser()
9. Proteger endpoints con JwtAuthGuard
10. Probar flujo completo de autenticación y tareas

## 🧪 Verificación
- [ ] POST /auth/register crea usuario y retorna token
- [ ] POST /auth/login retorna token JWT
- [ ] POST /tasks requiere token (401 sin token)
- [ ] GET /tasks retorna solo tareas del usuario autenticado
- [ ] Usuario A no puede ver tareas de usuario B
- [ ] Validación de título funciona (mínimo 3 caracteres)

## 📚 Recursos
- [NestJS Authentication](https://docs.nestjs.com/security/authentication)
- [JWT Best Practices](https://jwt.io/introduction)
- [Passport JWT](http://www.passportjs.org/packages/passport-jwt/)

## ⏱️ Estimación
8-10 horas

## 🔗 Dependencias
- Issue #1 (Día 1) debe estar completo
- Issue #2 (Día 2) debe estar completo

Para más detalles, ver: `docs/kanban-issues/dia-3-tareas-y-jwt.md`
```

---

## Issue 4: Día 4 – Validaciones avanzadas, manejo de errores y documentación

**Título:** `Día 4: Implementar Swagger, validaciones avanzadas y manejo de errores`

**Etiquetas:** `día-4`, `backend`, `documentation`

**Descripción:**

```markdown
## 🎯 Objetivo
Mejorar la calidad y robustez de la API implementando validaciones completas, manejo profesional de errores y documentación Swagger.

## ✅ Criterios de Aceptación
- [ ] Validaciones robustas implementadas en todos los DTOs
- [ ] Manejo profesional de errores en los servicios y controladores
- [ ] Swagger documentando todos los endpoints (/api o /docs)
- [ ] Decoradores y filtros comunes implementados (@GetUser(), HttpExceptionFilter)
- [ ] Conexión lista para funcionar tanto con base local como con base en la nube
- [ ] API completamente probada y estable

## 📋 Tareas Principales
1. Instalar y configurar Swagger
2. Documentar todos los DTOs con @ApiProperty
3. Documentar todos los endpoints con @ApiOperation y @ApiResponse
4. Mejorar validaciones en DTOs (límites de longitud, formatos)
5. Crear filtro global de excepciones HTTP
6. Mejorar manejo de errores en servicios
7. Refinar decorador @GetUser()
8. Configurar para DB local y en la nube (SSL)
9. Agregar logging básico
10. Actualizar README con documentación

## 🧪 Verificación
- [ ] Swagger UI accesible en http://localhost:3000/api
- [ ] Todos los endpoints documentados en Swagger
- [ ] Autenticación funciona en Swagger UI
- [ ] Validaciones retornan mensajes claros
- [ ] Errores tienen formato consistente
- [ ] API funciona con DB local
- [ ] Configuración lista para DB en la nube

## 📚 Recursos
- [NestJS Swagger](https://docs.nestjs.com/openapi/introduction)
- [NestJS Exception Filters](https://docs.nestjs.com/exception-filters)
- [Class Validator Decorators](https://github.com/typestack/class-validator#validation-decorators)

## ⏱️ Estimación
6-8 horas

## 🔗 Dependencias
- Issue #1, #2, #3 deben estar completos

Para más detalles, ver: `docs/kanban-issues/dia-4-validaciones-y-swagger.md`
```

---

## Issue 5: Día 5 – Testing, entrega y socialización grupal del proyecto

**Título:** `Día 5: Implementar tests completos y preparar entrega final`

**Etiquetas:** `día-5`, `backend`, `testing`, `documentation`

**Descripción:**

```markdown
## 🎯 Objetivo
Asegurar calidad con tests completos, revisar commits y preparar la entrega final del proyecto.

## ✅ Criterios de Aceptación
- [ ] Tests unitarios para TaskService implementados y pasando
- [ ] Tests unitarios para UserService implementados y pasando
- [ ] Tests unitarios para AuthService implementados y pasando
- [ ] Tests e2e para flujo completo (auth → create → list → update → delete) implementados y pasando
- [ ] Cobertura de tests revisada y completa (>= 80%)
- [ ] Revisión final de commits siguiendo la convención Conventional Commits
- [ ] Pull Request creado hacia main con todas las historias de usuario implementadas
- [ ] Socialización grupal del proyecto preparada

## 📋 Tareas Principales
1. Configurar mocks para testing
2. Implementar tests unitarios para UsersService
3. Implementar tests unitarios para AuthService
4. Implementar tests unitarios para TasksService
5. Crear tests e2e para autenticación
6. Crear tests e2e para usuarios
7. Crear tests e2e para tareas
8. Crear test e2e de flujo completo
9. Verificar cobertura >= 80%
10. Revisar y limpiar commits
11. Crear Pull Request
12. Preparar presentación del proyecto

## 🧪 Verificación
- [ ] `npm run test` pasa todos los tests
- [ ] `npm run test:e2e` pasa todos los tests
- [ ] `npm run test:cov` muestra cobertura >= 80%
- [ ] `npm run lint` no retorna errores
- [ ] `npm run build` completa exitosamente
- [ ] PR creado con descripción completa
- [ ] Presentación preparada

## 📊 Métricas de Calidad
- ✅ Cobertura de tests >= 80%
- ✅ 0 errores de linter
- ✅ 0 vulnerabilidades críticas
- ✅ Todos los tests pasan
- ✅ Documentación completa

## 📚 Recursos
- [NestJS Testing](https://docs.nestjs.com/fundamentals/testing)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Conventional Commits](https://www.conventionalcommits.org/)

## ⏱️ Estimación
8-10 horas

## 🔗 Dependencias
- Issue #1, #2, #3, #4 deben estar completos

Para más detalles, ver: `docs/kanban-issues/dia-5-testing-y-entrega.md`
```

---

## 📊 Vista General del Proyecto

### Resumen de Issues

| Issue | Título | Etiquetas | Estimación |
|-------|--------|-----------|------------|
| #1 | Día 1: Configuración inicial | día-1, backend, database | 4-6h |
| #2 | Día 2: Módulo de usuarios | día-2, backend | 6-8h |
| #3 | Día 3: Tareas y JWT | día-3, backend, authentication | 8-10h |
| #4 | Día 4: Validaciones y Swagger | día-4, backend, documentation | 6-8h |
| #5 | Día 5: Testing y entrega | día-5, testing, documentation | 8-10h |

**Total estimado:** 32-42 horas (5 días de trabajo)

### Columnas del Kanban

Organizar el tablero con las siguientes columnas:

1. **Backlog** - Issues pendientes de comenzar
2. **En Progreso** - Issues en desarrollo activo
3. **En Revisión** - Issues completados esperando revisión
4. **Completado** - Issues finalizados y aprobados

### Flujo de Trabajo

1. Mover issue de Backlog a "En Progreso" al comenzar
2. Al completar todas las tareas, mover a "En Revisión"
3. Después de revisión y aprobación, mover a "Completado"
4. Comenzar el siguiente día solo cuando el anterior está en "Completado"

---

## 🎯 Notas Adicionales

### Para cada Issue:
- Asignar a miembros del equipo
- Agregar fecha de inicio estimada
- Agregar fecha de entrega esperada
- Vincular con el PR correspondiente cuando esté listo
- Agregar comentarios con progreso diario

### Métricas de Seguimiento:
- Horas trabajadas vs. estimadas
- Bloqueos encontrados
- Decisiones técnicas tomadas
- Lecciones aprendidas

### Al Completar Cada Día:
- Documentar lo aprendido
- Actualizar el README si es necesario
- Hacer commit con mensaje siguiendo Conventional Commits
- Actualizar el estado del issue en el Kanban
