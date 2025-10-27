# Día 2 – Módulo de Usuarios y CRUD funcional

## 📝 Descripción
Implementar el módulo completo de usuarios con todas las operaciones CRUD (Create, Read, Update, Delete). Este módulo será la base para la autenticación en días posteriores.

## 🎯 Objetivo
Tener un módulo de usuarios completamente funcional con operaciones CRUD, entidad de base de datos y DTOs para validación.

## ✅ Criterios de Aceptación

- [ ] Módulo de usuarios creado con controller, service y module
- [ ] Entidad User definida con todos los campos necesarios
- [ ] DTOs creados para crear y actualizar usuarios
- [ ] CRUD completo funcionando (crear, leer, actualizar, eliminar)
- [ ] Contraseñas se hashean antes de guardar
- [ ] API probada con Postman o curl

## 📋 Tareas

### 1. Instalar dependencias adicionales
```bash
npm install bcrypt class-validator class-transformer
npm install -D @types/bcrypt
```

**Checklist:**
- [ ] Instalar bcrypt para hashear contraseñas
- [ ] Instalar class-validator para validaciones
- [ ] Instalar class-transformer para transformaciones
- [ ] Verificar instalación en package.json

### 2. Generar estructura del módulo de usuarios

**Checklist:**
- [ ] Generar módulo: `nest g module users`
- [ ] Generar controlador: `nest g controller users --no-spec`
- [ ] Generar servicio: `nest g service users --no-spec`
- [ ] Verificar que los archivos se crearon correctamente

### 3. Crear entidad User

**Archivo:** `src/users/entities/user.entity.ts`

**Checklist:**
- [ ] Crear carpeta `entities` dentro de `users`
- [ ] Crear archivo `user.entity.ts`
- [ ] Definir entidad con decoradores de TypeORM:
  ```typescript
  @Entity('users')
  export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
  }
  ```
- [ ] Importar la entidad en `UsersModule`

### 4. Crear DTOs para validación

**Archivo:** `src/users/dto/create-user.dto.ts`

**Checklist:**
- [ ] Crear carpeta `dto` dentro de `users`
- [ ] Crear `create-user.dto.ts` con validaciones:
  ```typescript
  export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsString()
    @MinLength(2)
    name: string;
  }
  ```
- [ ] Crear `update-user.dto.ts`:
  ```typescript
  export class UpdateUserDto extends PartialType(CreateUserDto) {}
  ```
- [ ] Importar decoradores de class-validator

### 5. Implementar UserService

**Archivo:** `src/users/users.service.ts`

**Checklist:**
- [ ] Inyectar repositorio de User
- [ ] Implementar método `create()`:
  - [ ] Verificar que el email no existe
  - [ ] Hashear contraseña con bcrypt
  - [ ] Guardar usuario en base de datos
  - [ ] Retornar usuario sin contraseña
- [ ] Implementar método `findAll()`:
  - [ ] Retornar todos los usuarios sin contraseñas
- [ ] Implementar método `findOne(id)`:
  - [ ] Buscar usuario por ID
  - [ ] Lanzar NotFoundException si no existe
  - [ ] Retornar usuario sin contraseña
- [ ] Implementar método `findByEmail(email)`:
  - [ ] Buscar usuario por email
  - [ ] Retornar usuario con contraseña (para autenticación)
- [ ] Implementar método `update(id, updateUserDto)`:
  - [ ] Verificar que el usuario existe
  - [ ] Si se actualiza la contraseña, hashearla
  - [ ] Actualizar datos
  - [ ] Retornar usuario actualizado sin contraseña
- [ ] Implementar método `remove(id)`:
  - [ ] Verificar que el usuario existe
  - [ ] Eliminar usuario
  - [ ] Retornar confirmación

### 6. Implementar UsersController

**Archivo:** `src/users/users.controller.ts`

**Checklist:**
- [ ] Crear endpoint POST `/users`:
  - [ ] Decorar con `@Post()`
  - [ ] Usar `@Body()` con `CreateUserDto`
  - [ ] Llamar a `userService.create()`
  - [ ] Retornar código 201
- [ ] Crear endpoint GET `/users`:
  - [ ] Decorar con `@Get()`
  - [ ] Llamar a `userService.findAll()`
- [ ] Crear endpoint GET `/users/:id`:
  - [ ] Decorar con `@Get(':id')`
  - [ ] Usar `@Param('id')` para obtener ID
  - [ ] Llamar a `userService.findOne()`
- [ ] Crear endpoint PATCH `/users/:id`:
  - [ ] Decorar con `@Patch(':id')`
  - [ ] Usar `@Param('id')` y `@Body()` con `UpdateUserDto`
  - [ ] Llamar a `userService.update()`
- [ ] Crear endpoint DELETE `/users/:id`:
  - [ ] Decorar con `@Delete(':id')`
  - [ ] Usar `@Param('id')`
  - [ ] Llamar a `userService.remove()`
  - [ ] Retornar código 204 o mensaje de éxito

### 7. Configurar módulo de usuarios

**Archivo:** `src/users/users.module.ts`

**Checklist:**
- [ ] Importar `TypeOrmModule.forFeature([User])`
- [ ] Exportar `UsersService` para uso en otros módulos
- [ ] Verificar que controller y service están registrados

### 8. Habilitar validaciones globales

**Archivo:** `src/main.ts`

**Checklist:**
- [ ] Importar `ValidationPipe` de `@nestjs/common`
- [ ] Agregar `app.useGlobalPipes(new ValidationPipe())` antes de `app.listen()`
- [ ] Configurar opciones del ValidationPipe:
  ```typescript
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  ```

### 9. Probar los endpoints

**Checklist:**
- [ ] Iniciar servidor: `npm run start:dev`
- [ ] Probar POST /users (crear usuario):
  ```bash
  curl -X POST http://localhost:3000/users \
    -H "Content-Type: application/json" \
    -d '{
      "email": "test@example.com",
      "password": "password123",
      "name": "Test User"
    }'
  ```
- [ ] Probar GET /users (listar usuarios)
- [ ] Probar GET /users/:id (obtener usuario específico)
- [ ] Probar PATCH /users/:id (actualizar usuario)
- [ ] Probar DELETE /users/:id (eliminar usuario)
- [ ] Probar validaciones (email inválido, contraseña corta, etc.)
- [ ] Verificar que las contraseñas están hasheadas en la base de datos

## 🧪 Pruebas de Verificación

### 1. Crear un usuario
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@example.com",
    "password": "securepass123",
    "name": "Usuario de Prueba"
  }'
```

**Respuesta esperada:**
```json
{
  "id": "uuid-generado",
  "email": "usuario@example.com",
  "name": "Usuario de Prueba",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```
Nota: La contraseña NO debe aparecer en la respuesta.

### 2. Listar usuarios
```bash
curl http://localhost:3000/users
```

### 3. Validar que las contraseñas están hasheadas
- [ ] Conectarse a PostgreSQL
- [ ] Ejecutar: `SELECT * FROM users;`
- [ ] Verificar que el campo `password` contiene un hash bcrypt

### 4. Probar validaciones
```bash
# Email inválido
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "not-an-email",
    "password": "password123",
    "name": "Test"
  }'
```
Debe retornar error 400 con mensaje de validación.

## 📚 Recursos

- [NestJS CRUD](https://docs.nestjs.com/recipes/crud-generator)
- [TypeORM Entities](https://typeorm.io/entities)
- [Class Validator](https://github.com/typestack/class-validator)
- [Bcrypt Documentation](https://www.npmjs.com/package/bcrypt)

## 🐛 Problemas Comunes

1. **Error: User already exists**
   - Verificar que el email es único
   - Revisar constraint UNIQUE en la base de datos

2. **Contraseñas no se hashean**
   - Verificar que bcrypt está instalado
   - Revisar implementación en UserService.create()

3. **Validaciones no funcionan**
   - Verificar que ValidationPipe está configurado globalmente
   - Verificar decoradores en DTOs

## 📝 Notas

- **Seguridad:** NUNCA retornar contraseñas en las respuestas
- Usar `bcrypt.hash()` para hashear contraseñas
- Usar factor de costo 10 para bcrypt
- Implementar método helper para excluir contraseña de la respuesta

## ⏱️ Tiempo Estimado
6-8 horas

## 🔗 Dependencias
- Día 1 completado (configuración de base de datos)

## 📦 Entregables

Al finalizar este día, se debe tener:
1. ✅ Módulo de usuarios con estructura completa
2. ✅ Entidad User en base de datos
3. ✅ CRUD de usuarios funcionando
4. ✅ Contraseñas hasheadas
5. ✅ Validaciones funcionando
6. ✅ Endpoints probados con Postman/curl
