# ✅ Checklist de Progreso del Proyecto

Usa este checklist para trackear tu progreso día a día.

---

## 📦 Pre-requisitos

- [ ] Node.js instalado (v16+)
- [ ] PostgreSQL instalado (v12+)
- [ ] Git configurado
- [ ] Editor de código instalado (VS Code recomendado)
- [ ] Postman o herramienta similar instalada (opcional)

---

## 🗓️ DÍA 1: Configuración Inicial

### Instalación y Setup
- [ ] Repositorio clonado
- [ ] `npm install` ejecutado sin errores
- [ ] `.env` creado desde `.env.example`
- [ ] Variables de entorno configuradas
- [ ] PostgreSQL corriendo localmente

### Dependencias
- [ ] `@nestjs/typeorm` instalado
- [ ] `typeorm` instalado
- [ ] `pg` instalado
- [ ] `@nestjs/config` instalado

### Configuración
- [ ] ConfigModule configurado en AppModule
- [ ] TypeORM configurado con PostgreSQL
- [ ] Base de datos `task_management` creada
- [ ] Conexión a DB verificada

### Verificación
- [ ] `npm run build` ✅
- [ ] `npm run start:dev` ✅
- [ ] Servidor corriendo en puerto 3000
- [ ] Sin errores en consola
- [ ] Endpoint de prueba funciona

### Documentación
- [ ] README actualizado con instrucciones de setup

---

## 🗓️ DÍA 2: Módulo de Usuarios

### Instalación
- [ ] `bcrypt` instalado
- [ ] `class-validator` instalado
- [ ] `class-transformer` instalado
- [ ] `@types/bcrypt` instalado (dev)

### Estructura
- [ ] Módulo de usuarios generado
- [ ] Controlador de usuarios generado
- [ ] Servicio de usuarios generado

### Entidad
- [ ] Entidad User creada
- [ ] Campos definidos (id, email, password, name, timestamps)
- [ ] Email marcado como único
- [ ] Entidad registrada en TypeORM

### DTOs
- [ ] CreateUserDto creado
- [ ] UpdateUserDto creado
- [ ] Validaciones agregadas (@IsEmail, @MinLength, etc.)

### Servicio
- [ ] `create()` implementado
- [ ] `findAll()` implementado
- [ ] `findOne()` implementado
- [ ] `findByEmail()` implementado
- [ ] `update()` implementado
- [ ] `remove()` implementado
- [ ] Contraseñas se hashean con bcrypt
- [ ] Contraseñas NO se retornan en respuestas

### Controlador
- [ ] POST /users implementado
- [ ] GET /users implementado
- [ ] GET /users/:id implementado
- [ ] PATCH /users/:id implementado
- [ ] DELETE /users/:id implementado

### Configuración Global
- [ ] ValidationPipe configurado en main.ts

### Verificación
- [ ] POST /users crea usuario ✅
- [ ] Contraseña hasheada en DB ✅
- [ ] GET /users lista usuarios sin contraseñas ✅
- [ ] GET /users/:id retorna usuario específico ✅
- [ ] PATCH /users/:id actualiza usuario ✅
- [ ] DELETE /users/:id elimina usuario ✅
- [ ] Email duplicado retorna error 409 ✅
- [ ] Validaciones funcionan (400 para datos inválidos) ✅

---

## 🗓️ DÍA 3: Tareas y JWT

### Instalación
- [ ] `@nestjs/jwt` instalado
- [ ] `@nestjs/passport` instalado
- [ ] `passport` instalado
- [ ] `passport-jwt` instalado
- [ ] `@types/passport-jwt` instalado (dev)

### Módulo de Autenticación
- [ ] Módulo auth generado
- [ ] Servicio auth generado
- [ ] Controlador auth generado
- [ ] LoginDto creado
- [ ] JwtStrategy creado
- [ ] JwtAuthGuard creado
- [ ] JwtModule configurado

### AuthService
- [ ] `validateUser()` implementado
- [ ] `login()` implementado
- [ ] Passwords comparados con bcrypt.compare()

### AuthController
- [ ] POST /auth/register implementado
- [ ] POST /auth/login implementado

### Módulo de Tareas
- [ ] Módulo tasks generado
- [ ] Servicio tasks generado
- [ ] Controlador tasks generado
- [ ] Entidad Task creada
- [ ] Relación ManyToOne con User configurada
- [ ] Relación OneToMany en User agregada

### DTOs de Tareas
- [ ] CreateTaskDto creado
- [ ] UpdateTaskDto creado
- [ ] Validaciones agregadas (título min 3 caracteres)

### TasksService
- [ ] `create()` implementado (con userId)
- [ ] `findAll()` implementado (filtra por userId)
- [ ] `findOne()` implementado (verifica ownership)
- [ ] `update()` implementado (verifica ownership)
- [ ] `remove()` implementado (verifica ownership)

### TasksController
- [ ] @UseGuards(JwtAuthGuard) aplicado
- [ ] POST /tasks implementado
- [ ] GET /tasks implementado
- [ ] GET /tasks/:id implementado
- [ ] PATCH /tasks/:id implementado
- [ ] DELETE /tasks/:id implementado
- [ ] @GetUser() decorator usado

### Decorador Personalizado
- [ ] @GetUser() decorator creado

### Verificación
- [ ] POST /auth/register retorna token ✅
- [ ] POST /auth/login retorna token ✅
- [ ] Login con credenciales inválidas retorna 401 ✅
- [ ] POST /tasks sin token retorna 401 ✅
- [ ] POST /tasks con token crea tarea ✅
- [ ] GET /tasks retorna solo tareas del usuario ✅
- [ ] Usuario A no puede ver tareas de Usuario B ✅
- [ ] Validación de título (min 3 caracteres) funciona ✅

---

## 🗓️ DÍA 4: Validaciones y Swagger

### Instalación
- [ ] `@nestjs/swagger` instalado

### Configuración Swagger
- [ ] Swagger configurado en main.ts
- [ ] Bearer auth configurado
- [ ] Swagger accesible en /api

### Documentación DTOs
- [ ] @ApiProperty agregado a CreateUserDto
- [ ] @ApiProperty agregado a CreateTaskDto
- [ ] @ApiProperty agregado a UpdateUserDto
- [ ] @ApiProperty agregado a UpdateTaskDto
- [ ] @ApiProperty agregado a LoginDto

### Documentación Controladores
- [ ] @ApiTags agregado a UsersController
- [ ] @ApiTags agregado a AuthController
- [ ] @ApiTags agregado a TasksController
- [ ] @ApiOperation agregado a todos los endpoints
- [ ] @ApiResponse agregado a todos los endpoints
- [ ] @ApiBearerAuth agregado a endpoints protegidos

### Validaciones Mejoradas
- [ ] Límites de longitud agregados a todos los campos
- [ ] Validación de email mejorada
- [ ] @Transform agregado para trimming
- [ ] Mensajes de error personalizados

### Filtro de Excepciones
- [ ] HttpExceptionFilter creado
- [ ] Filtro aplicado globalmente
- [ ] Formato de error estandarizado

### Manejo de Errores
- [ ] Email duplicado manejado (ConflictException)
- [ ] Usuario no encontrado manejado (NotFoundException)
- [ ] Tarea no encontrada manejada (NotFoundException)
- [ ] Ownership verificado en todas las operaciones

### Decorador @GetUser Mejorado
- [ ] Soporta selección de propiedades
- [ ] Movido a carpeta common/decorators

### Configuración DB Cloud
- [ ] Configuración SSL agregada
- [ ] .env.example actualizado con ejemplos cloud
- [ ] README actualizado con instrucciones

### Logging
- [ ] Logger agregado a servicios principales

### Verificación
- [ ] Swagger UI accesible en /api ✅
- [ ] Todos los endpoints documentados ✅
- [ ] Autenticación funciona en Swagger ✅
- [ ] Schemas de DTOs visibles ✅
- [ ] Validaciones retornan mensajes claros ✅
- [ ] Errores tienen formato consistente ✅
- [ ] Probar todos los endpoints desde Swagger ✅

---

## 🗓️ DÍA 5: Testing y Entrega

### Tests Unitarios - UsersService
- [ ] Test: create() crea usuario
- [ ] Test: create() hashea contraseña
- [ ] Test: create() lanza error si email existe
- [ ] Test: findAll() retorna usuarios
- [ ] Test: findOne() retorna usuario
- [ ] Test: findOne() lanza error si no existe
- [ ] Test: update() actualiza usuario
- [ ] Test: remove() elimina usuario

### Tests Unitarios - AuthService
- [ ] Test: validateUser() retorna usuario si válido
- [ ] Test: validateUser() retorna null si inválido
- [ ] Test: login() retorna token

### Tests Unitarios - TasksService
- [ ] Test: create() crea tarea
- [ ] Test: findAll() retorna tareas del usuario
- [ ] Test: findOne() retorna tarea
- [ ] Test: findOne() lanza error si no pertenece al usuario
- [ ] Test: update() actualiza tarea
- [ ] Test: remove() elimina tarea

### Tests E2E - Auth
- [ ] Test: registro exitoso
- [ ] Test: login exitoso
- [ ] Test: login fallido
- [ ] Test: email duplicado

### Tests E2E - Users
- [ ] Test: crear usuario
- [ ] Test: listar usuarios
- [ ] Test: obtener usuario
- [ ] Test: actualizar usuario
- [ ] Test: eliminar usuario

### Tests E2E - Tasks
- [ ] Test: acceso sin token retorna 401
- [ ] Test: crear tarea
- [ ] Test: listar tareas
- [ ] Test: obtener tarea
- [ ] Test: actualizar tarea
- [ ] Test: eliminar tarea
- [ ] Test: usuario no puede ver tareas de otro

### Test E2E - Flujo Completo
- [ ] Test: journey completo (registro → login → crear → listar → actualizar → eliminar)

### Tests de Validaciones
- [ ] Test: email inválido falla
- [ ] Test: contraseña corta falla
- [ ] Test: título corto falla

### Cobertura
- [ ] `npm run test:cov` ejecutado
- [ ] Cobertura >= 80% en statements
- [ ] Cobertura >= 80% en branches
- [ ] Cobertura >= 80% en functions
- [ ] Cobertura >= 80% en lines

### Commits
- [ ] Commits revisados
- [ ] Conventional Commits aplicado
- [ ] Mensajes de commit descriptivos

### Pull Request
- [ ] Todos los tests pasan
- [ ] Lint pasa sin errores
- [ ] Build exitoso
- [ ] PR creado hacia main
- [ ] PR tiene descripción completa
- [ ] PR tiene lista de features

### Documentación Final
- [ ] README actualizado
- [ ] .env.example completo
- [ ] Documentación Swagger completa

### Presentación
- [ ] Demo preparada
- [ ] Explicación de arquitectura lista
- [ ] Lista de endpoints preparada
- [ ] Screenshots de Swagger tomados

### Verificación Final
- [ ] `npm install` (instalación limpia) ✅
- [ ] `npm run lint` ✅
- [ ] `npm run format` ✅
- [ ] `npm run build` ✅
- [ ] `npm run test` ✅
- [ ] `npm run test:e2e` ✅
- [ ] `npm run test:cov` >= 80% ✅
- [ ] `npm run start:dev` ✅
- [ ] Swagger accesible ✅
- [ ] Todos los endpoints funcionan ✅

---

## 🎉 PROYECTO COMPLETO

### Checklist Final de Calidad

- [ ] Cobertura de tests >= 80%
- [ ] 0 errores de linter
- [ ] 0 vulnerabilidades críticas (npm audit)
- [ ] Todos los tests unitarios pasan
- [ ] Todos los tests e2e pasan
- [ ] Build exitoso
- [ ] Swagger documentado
- [ ] README completo
- [ ] .env.example actualizado
- [ ] Commits siguen Conventional Commits
- [ ] PR creado y revisado

### Features Implementadas

- [x] ✅ Autenticación con JWT
- [x] 👥 CRUD de usuarios
- [x] 📋 CRUD de tareas
- [x] 🔒 Endpoints protegidos
- [x] ✔️ Validaciones completas
- [x] 📖 Documentación Swagger
- [x] 🛡️ Manejo de errores
- [x] 🧪 Tests completos
- [x] 📝 Documentación completa

---

**¡FELICITACIONES! 🎊**

Has completado exitosamente el proyecto de Task Management API.

**Próximos pasos sugeridos:**
- Desplegar a producción (Railway, Render, Heroku)
- Agregar más features (paginación, roles, filtros)
- Incluir en tu portafolio
- Compartir con la comunidad

---

## 📊 Métricas de Progreso

| Día | Horas Estimadas | Horas Reales | Estado |
|-----|----------------|--------------|--------|
| Día 1 | 4-6 | ___ | [ ] |
| Día 2 | 6-8 | ___ | [ ] |
| Día 3 | 8-10 | ___ | [ ] |
| Día 4 | 6-8 | ___ | [ ] |
| Día 5 | 8-10 | ___ | [ ] |
| **Total** | **32-42** | **___** | |

---

## 📝 Notas y Observaciones

```
Espacio para tus notas personales, problemas encontrados,
soluciones implementadas, y lecciones aprendidas.





```

---

**Fecha de inicio:** _______________

**Fecha de finalización:** _______________

**Autor:** _______________
