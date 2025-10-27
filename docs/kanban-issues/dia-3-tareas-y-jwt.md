# Día 3 – CRUD de Tareas y autenticación JWT

## 📝 Descripción
Implementar el módulo de tareas con CRUD completo y proteger todos los endpoints con autenticación JWT. Los usuarios solo podrán ver y manipular sus propias tareas.

## 🎯 Objetivo
Tener un sistema completo de gestión de tareas con autenticación JWT y control de acceso basado en usuario.

## ✅ Criterios de Aceptación

- [ ] Módulo de tareas creado (controller, service, module)
- [ ] Entidad Task con relación a User
- [ ] Endpoints CRUD de tareas implementados
- [ ] Autenticación JWT funcionando
- [ ] Endpoints protegidos con guards
- [ ] Validaciones básicas implementadas (título mínimo 3 caracteres)
- [ ] Usuarios solo pueden ver/editar sus propias tareas
- [ ] API probada con usuario autenticado

## 📋 Tareas

### 1. Instalar dependencias de autenticación
```bash
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
npm install -D @types/passport-jwt
```

**Checklist:**
- [ ] Instalar paquetes JWT
- [ ] Instalar paquetes Passport
- [ ] Verificar instalación

### 2. Generar módulo de autenticación

**Checklist:**
- [ ] Generar módulo: `nest g module auth`
- [ ] Generar servicio: `nest g service auth --no-spec`
- [ ] Generar controlador: `nest g controller auth --no-spec`
- [ ] Verificar estructura creada

### 3. Crear DTO de login

**Archivo:** `src/auth/dto/login.dto.ts`

**Checklist:**
- [ ] Crear carpeta `dto` en `auth`
- [ ] Crear `login.dto.ts`:
  ```typescript
  export class LoginDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;
  }
  ```

### 4. Implementar AuthService

**Archivo:** `src/auth/auth.service.ts`

**Checklist:**
- [ ] Inyectar `UsersService` y `JwtService`
- [ ] Implementar método `validateUser(email, password)`:
  - [ ] Buscar usuario por email
  - [ ] Comparar contraseña con bcrypt.compare()
  - [ ] Retornar usuario sin contraseña si es válido
  - [ ] Retornar null si no es válido
- [ ] Implementar método `login(user)`:
  - [ ] Crear payload con user.id y user.email
  - [ ] Generar token JWT
  - [ ] Retornar objeto con access_token

### 5. Implementar AuthController

**Archivo:** `src/auth/auth.controller.ts`

**Checklist:**
- [ ] Crear endpoint POST `/auth/login`:
  ```typescript
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password
    );
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    return this.authService.login(user);
  }
  ```
- [ ] Crear endpoint POST `/auth/register`:
  - [ ] Usar CreateUserDto
  - [ ] Llamar a UsersService.create()
  - [ ] Automáticamente hacer login y retornar token

### 6. Crear estrategia JWT

**Archivo:** `src/auth/strategies/jwt.strategy.ts`

**Checklist:**
- [ ] Crear carpeta `strategies`
- [ ] Crear `jwt.strategy.ts`:
  ```typescript
  @Injectable()
  export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService) {
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: configService.get('JWT_SECRET'),
      });
    }

    async validate(payload: any) {
      return { userId: payload.sub, email: payload.email };
    }
  }
  ```
- [ ] Registrar en providers del AuthModule

### 7. Crear guard JWT

**Archivo:** `src/auth/guards/jwt-auth.guard.ts`

**Checklist:**
- [ ] Crear carpeta `guards`
- [ ] Crear `jwt-auth.guard.ts`:
  ```typescript
  @Injectable()
  export class JwtAuthGuard extends AuthGuard('jwt') {}
  ```

### 8. Configurar AuthModule

**Archivo:** `src/auth/auth.module.ts`

**Checklist:**
- [ ] Importar `UsersModule`
- [ ] Importar `PassportModule`
- [ ] Configurar `JwtModule`:
  ```typescript
  JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
  })
  ```
- [ ] Registrar `JwtStrategy` en providers
- [ ] Exportar `JwtModule` si es necesario

### 9. Generar módulo de tareas

**Checklist:**
- [ ] Generar módulo: `nest g module tasks`
- [ ] Generar controlador: `nest g controller tasks --no-spec`
- [ ] Generar servicio: `nest g service tasks --no-spec`

### 10. Crear entidad Task

**Archivo:** `src/tasks/entities/task.entity.ts`

**Checklist:**
- [ ] Crear carpeta `entities`
- [ ] Crear `task.entity.ts`:
  ```typescript
  @Entity('tasks')
  export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column({ default: false })
    completed: boolean;

    @ManyToOne(() => User, user => user.tasks)
    user: User;

    @Column()
    userId: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
  }
  ```
- [ ] Actualizar entidad User para agregar relación:
  ```typescript
  @OneToMany(() => Task, task => task.user)
  tasks: Task[];
  ```

### 11. Crear DTOs de tareas

**Checklist:**
- [ ] Crear `create-task.dto.ts`:
  ```typescript
  export class CreateTaskDto {
    @IsString()
    @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    completed?: boolean;
  }
  ```
- [ ] Crear `update-task.dto.ts`:
  ```typescript
  export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
  ```

### 12. Implementar TasksService

**Archivo:** `src/tasks/tasks.service.ts`

**Checklist:**
- [ ] Inyectar repositorio de Task
- [ ] Implementar `create(userId, createTaskDto)`:
  - [ ] Crear tarea asociada al userId
  - [ ] Guardar en base de datos
  - [ ] Retornar tarea creada
- [ ] Implementar `findAll(userId)`:
  - [ ] Retornar solo tareas del usuario
- [ ] Implementar `findOne(id, userId)`:
  - [ ] Buscar tarea por ID
  - [ ] Verificar que pertenece al usuario
  - [ ] Lanzar NotFoundException o ForbiddenException si no coincide
- [ ] Implementar `update(id, userId, updateTaskDto)`:
  - [ ] Verificar que la tarea existe y pertenece al usuario
  - [ ] Actualizar tarea
  - [ ] Retornar tarea actualizada
- [ ] Implementar `remove(id, userId)`:
  - [ ] Verificar que la tarea existe y pertenece al usuario
  - [ ] Eliminar tarea
  - [ ] Retornar confirmación

### 13. Crear decorador personalizado @GetUser()

**Archivo:** `src/auth/decorators/get-user.decorator.ts`

**Checklist:**
- [ ] Crear carpeta `decorators`
- [ ] Crear `get-user.decorator.ts`:
  ```typescript
  export const GetUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
      const request = ctx.switchToHttp().getRequest();
      return request.user;
    },
  );
  ```

### 14. Implementar TasksController

**Archivo:** `src/tasks/tasks.controller.ts`

**Checklist:**
- [ ] Aplicar `@UseGuards(JwtAuthGuard)` a nivel de controlador
- [ ] Crear endpoint POST `/tasks`:
  - [ ] Usar `@Body()` con CreateTaskDto
  - [ ] Usar `@GetUser()` para obtener usuario
  - [ ] Llamar a `tasksService.create(user.userId, createTaskDto)`
- [ ] Crear endpoint GET `/tasks`:
  - [ ] Usar `@GetUser()` para obtener usuario
  - [ ] Llamar a `tasksService.findAll(user.userId)`
- [ ] Crear endpoint GET `/tasks/:id`:
  - [ ] Usar `@Param('id')` y `@GetUser()`
  - [ ] Llamar a `tasksService.findOne(id, user.userId)`
- [ ] Crear endpoint PATCH `/tasks/:id`:
  - [ ] Usar `@Param('id')`, `@Body()` y `@GetUser()`
  - [ ] Llamar a `tasksService.update(id, user.userId, updateTaskDto)`
- [ ] Crear endpoint DELETE `/tasks/:id`:
  - [ ] Usar `@Param('id')` y `@GetUser()`
  - [ ] Llamar a `tasksService.remove(id, user.userId)`

### 15. Configurar TasksModule

**Archivo:** `src/tasks/tasks.module.ts`

**Checklist:**
- [ ] Importar `TypeOrmModule.forFeature([Task])`
- [ ] Importar `AuthModule` (para usar JwtAuthGuard)
- [ ] Verificar controller y service están registrados

### 16. Probar autenticación y tareas

**Checklist:**
- [ ] Probar registro de usuario:
  ```bash
  curl -X POST http://localhost:3000/auth/register \
    -H "Content-Type: application/json" \
    -d '{
      "email": "user@example.com",
      "password": "password123",
      "name": "Test User"
    }'
  ```
- [ ] Probar login y guardar token:
  ```bash
  curl -X POST http://localhost:3000/auth/login \
    -H "Content-Type: application/json" \
    -d '{
      "email": "user@example.com",
      "password": "password123"
    }'
  ```
- [ ] Probar crear tarea con token:
  ```bash
  curl -X POST http://localhost:3000/tasks \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <TOKEN>" \
    -d '{
      "title": "Mi primera tarea",
      "description": "Descripción de la tarea"
    }'
  ```
- [ ] Probar listar tareas con token
- [ ] Probar actualizar tarea
- [ ] Probar eliminar tarea
- [ ] Verificar que sin token retorna 401 Unauthorized
- [ ] Verificar que usuario A no puede ver tareas de usuario B

## 🧪 Pruebas de Verificación

### 1. Flujo completo de autenticación

```bash
# Paso 1: Registrar usuario
RESPONSE=$(curl -s -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "name": "Test User"
  }')

# Extraer token (con jq si está disponible)
TOKEN=$(echo $RESPONSE | jq -r '.access_token')

# Paso 2: Crear tarea
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "title": "Completar documentación",
    "description": "Escribir README completo"
  }'

# Paso 3: Listar tareas
curl http://localhost:3000/tasks \
  -H "Authorization: Bearer $TOKEN"
```

### 2. Validar seguridad

```bash
# Intentar acceder sin token (debe fallar)
curl http://localhost:3000/tasks

# Intentar acceder con token inválido (debe fallar)
curl http://localhost:3000/tasks \
  -H "Authorization: Bearer token-invalido"
```

### 3. Validar validaciones

```bash
# Título muy corto (debe fallar)
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "title": "Hi"
  }'
```

## 📚 Recursos

- [NestJS Authentication](https://docs.nestjs.com/security/authentication)
- [JWT Best Practices](https://jwt.io/introduction)
- [Passport JWT Strategy](http://www.passportjs.org/packages/passport-jwt/)
- [TypeORM Relations](https://typeorm.io/relations)

## 🐛 Problemas Comunes

1. **Token no se valida:**
   - Verificar que JWT_SECRET está en .env
   - Verificar JwtStrategy está registrado
   - Verificar que el token se envía como Bearer token

2. **Usuario no puede crear tareas:**
   - Verificar relación ManyToOne en Task
   - Verificar que userId se extrae correctamente del token

3. **Error: Cannot read property 'userId' of undefined:**
   - Verificar que @GetUser() decorator está implementado
   - Verificar que JwtStrategy retorna el objeto correcto

## 📝 Notas

- El token JWT contiene información del usuario (sub, email)
- NUNCA incluir contraseña en el token
- Usar tokens de corta duración para mayor seguridad
- Implementar refresh tokens en el futuro
- Validar que cada usuario solo accede a sus propias tareas

## ⏱️ Tiempo Estimado
8-10 horas

## 🔗 Dependencias
- Día 1 completado (configuración)
- Día 2 completado (módulo de usuarios)

## 📦 Entregables

Al finalizar este día, se debe tener:
1. ✅ Módulo de autenticación funcionando
2. ✅ Login retornando JWT tokens
3. ✅ Módulo de tareas con CRUD completo
4. ✅ Endpoints protegidos con JWT
5. ✅ Validaciones de títulos funcionando
6. ✅ Control de acceso por usuario
7. ✅ Relación User-Task en base de datos
8. ✅ Endpoints probados con autenticación
