# Día 4 – Validaciones avanzadas, manejo de errores y documentación

## 📝 Descripción
Mejorar la calidad y robustez de la API implementando validaciones completas, manejo profesional de errores, documentación Swagger y decoradores/filtros personalizados.

## 🎯 Objetivo
Tener una API profesional, bien documentada, con manejo robusto de errores y validaciones completas.

## ✅ Criterios de Aceptación

- [ ] Validaciones robustas en todos los DTOs
- [ ] Manejo profesional de errores
- [ ] Swagger documentando todos los endpoints
- [ ] Decoradores personalizados implementados
- [ ] Filtros de excepciones configurados
- [ ] Configuración funciona con DB local y en la nube
- [ ] API completamente probada y estable

## 📋 Tareas

### 1. Instalar Swagger
```bash
npm install @nestjs/swagger
```

**Checklist:**
- [ ] Instalar dependencia
- [ ] Verificar instalación

### 2. Configurar Swagger

**Archivo:** `src/main.ts`

**Checklist:**
- [ ] Importar módulos de Swagger:
  ```typescript
  import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
  ```
- [ ] Configurar Swagger antes de `app.listen()`:
  ```typescript
  const config = new DocumentBuilder()
    .setTitle('Task Management API')
    .setDescription('API para gestión de tareas con autenticación JWT')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Ingrese el token JWT',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  ```
- [ ] Verificar que la documentación está disponible en http://localhost:3000/api

### 3. Documentar DTOs con Swagger

**Checklist:**
- [ ] Actualizar `CreateUserDto`:
  ```typescript
  export class CreateUserDto {
    @ApiProperty({ example: 'user@example.com', description: 'Email del usuario' })
    @IsEmail({}, { message: 'El email debe ser válido' })
    email: string;

    @ApiProperty({ example: 'Password123!', description: 'Contraseña (mínimo 6 caracteres)' })
    @IsString()
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password: string;

    @ApiProperty({ example: 'Juan Pérez', description: 'Nombre completo del usuario' })
    @IsString()
    @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
    name: string;
  }
  ```
- [ ] Actualizar `CreateTaskDto`:
  ```typescript
  export class CreateTaskDto {
    @ApiProperty({ 
      example: 'Completar documentación', 
      description: 'Título de la tarea (mínimo 3 caracteres)' 
    })
    @IsString()
    @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
    @MaxLength(100, { message: 'El título no puede exceder 100 caracteres' })
    title: string;

    @ApiPropertyOptional({ 
      example: 'Escribir README completo con ejemplos', 
      description: 'Descripción detallada de la tarea' 
    })
    @IsString()
    @IsOptional()
    @MaxLength(500, { message: 'La descripción no puede exceder 500 caracteres' })
    description?: string;

    @ApiPropertyOptional({ 
      example: false, 
      description: 'Estado de completitud de la tarea' 
    })
    @IsBoolean()
    @IsOptional()
    completed?: boolean;
  }
  ```
- [ ] Actualizar `LoginDto` con decoradores de Swagger

### 4. Documentar controladores con Swagger

**UsersController:**

**Checklist:**
- [ ] Agregar decorador `@ApiTags('users')` al controlador
- [ ] Documentar endpoint POST `/users`:
  ```typescript
  @Post()
  @ApiOperation({ summary: 'Crear nuevo usuario' })
  @ApiResponse({ status: 201, description: 'Usuario creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 409, description: 'Email ya existe' })
  create(@Body() createUserDto: CreateUserDto) { ... }
  ```
- [ ] Documentar GET `/users`:
  ```typescript
  @Get()
  @ApiOperation({ summary: 'Listar todos los usuarios' })
  @ApiResponse({ status: 200, description: 'Lista de usuarios' })
  findAll() { ... }
  ```
- [ ] Documentar GET `/users/:id`
- [ ] Documentar PATCH `/users/:id`
- [ ] Documentar DELETE `/users/:id`

**AuthController:**

**Checklist:**
- [ ] Agregar `@ApiTags('auth')`
- [ ] Documentar endpoint login:
  ```typescript
  @Post('login')
  @ApiOperation({ summary: 'Iniciar sesión' })
  @ApiResponse({ status: 200, description: 'Login exitoso, retorna token JWT' })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas' })
  login(@Body() loginDto: LoginDto) { ... }
  ```
- [ ] Documentar endpoint register

**TasksController:**

**Checklist:**
- [ ] Agregar `@ApiTags('tasks')`
- [ ] Agregar `@ApiBearerAuth('JWT-auth')` al controlador
- [ ] Documentar todos los endpoints con:
  - @ApiOperation
  - @ApiResponse para casos de éxito
  - @ApiResponse para casos de error
  - @ApiBearerAuth donde corresponda

### 5. Mejorar validaciones en DTOs

**Checklist:**
- [ ] Agregar validación de email único en CreateUserDto (a nivel de servicio)
- [ ] Agregar validación de formato de email más estricta
- [ ] Agregar límites de longitud en todos los campos de texto:
  - Nombre: 2-50 caracteres
  - Título de tarea: 3-100 caracteres
  - Descripción: 0-500 caracteres
- [ ] Agregar validación de caracteres especiales en contraseña (opcional):
  ```typescript
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/,
    { message: 'La contraseña debe contener mayúsculas, minúsculas y números' }
  )
  ```
- [ ] Agregar transformaciones en DTOs:
  ```typescript
  @Transform(({ value }) => value?.trim())
  @IsString()
  title: string;
  ```

### 6. Crear filtro de excepciones HTTP

**Archivo:** `src/common/filters/http-exception.filter.ts`

**Checklist:**
- [ ] Crear carpeta `src/common/filters`
- [ ] Crear filtro:
  ```typescript
  @Catch(HttpException)
  export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
      const status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      const errorResponse = {
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        method: request.method,
        message: exceptionResponse['message'] || exception.message,
      };

      response.status(status).json(errorResponse);
    }
  }
  ```
- [ ] Aplicar filtro globalmente en `main.ts`:
  ```typescript
  app.useGlobalFilters(new HttpExceptionFilter());
  ```

### 7. Mejorar manejo de errores en servicios

**UsersService:**

**Checklist:**
- [ ] Manejar error de email duplicado:
  ```typescript
  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email }
    });
    
    if (existingUser) {
      throw new ConflictException('El email ya está registrado');
    }
    // ... resto del código
  }
  ```
- [ ] Mejorar mensaje en NotFoundException:
  ```typescript
  if (!user) {
    throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
  }
  ```
- [ ] Manejar errores de base de datos con try-catch

**TasksService:**

**Checklist:**
- [ ] Verificar pertenencia de tarea al usuario:
  ```typescript
  const task = await this.tasksRepository.findOne({
    where: { id, userId }
  });
  
  if (!task) {
    throw new NotFoundException(
      `Tarea con ID ${id} no encontrada o no pertenece al usuario`
    );
  }
  ```
- [ ] Agregar manejo de errores en update y delete

### 8. Refinar decorador @GetUser()

**Archivo:** `src/common/decorators/get-user.decorator.ts`

**Checklist:**
- [ ] Mover a carpeta `common/decorators` si no está ahí
- [ ] Mejorar para permitir selección de propiedades:
  ```typescript
  export const GetUser = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
      const request = ctx.switchToHttp().getRequest();
      const user = request.user;
      
      return data ? user?.[data] : user;
    },
  );
  ```
- [ ] Actualizar uso en controladores:
  ```typescript
  create(@GetUser('userId') userId: string, ...)
  ```

### 9. Configurar para base de datos en la nube

**Checklist:**
- [ ] Actualizar `.env.example` con ejemplos para DB en nube:
  ```env
  # Local Database
  DB_HOST=localhost
  DB_PORT=5432
  DB_USERNAME=postgres
  DB_PASSWORD=postgres
  DB_DATABASE=task_management

  # Cloud Database (ejemplo con Railway/Render/etc)
  # DB_HOST=your-cloud-host.com
  # DB_PORT=5432
  # DB_USERNAME=your-cloud-user
  # DB_PASSWORD=your-cloud-password
  # DB_DATABASE=your-cloud-database
  # DB_SSL=true
  ```
- [ ] Actualizar configuración de TypeORM para soportar SSL:
  ```typescript
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    ssl: configService.get('DB_SSL') === 'true' ? { rejectUnauthorized: false } : false,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: configService.get('NODE_ENV') === 'development',
  })
  ```

### 10. Mejorar configuración de ValidationPipe

**Archivo:** `src/main.ts`

**Checklist:**
- [ ] Actualizar configuración:
  ```typescript
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  ```

### 11. Agregar logging básico

**Checklist:**
- [ ] Agregar logger en servicios críticos:
  ```typescript
  private readonly logger = new Logger(TasksService.name);
  
  async create(...) {
    this.logger.log(`Creando nueva tarea para usuario ${userId}`);
    // ...
  }
  ```

### 12. Crear entidades de respuesta para Swagger

**Archivo:** `src/users/entities/user-response.entity.ts`

**Checklist:**
- [ ] Crear clase de respuesta que excluye contraseña:
  ```typescript
  export class UserResponseEntity {
    @ApiProperty()
    id: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
  }
  ```
- [ ] Usar en decoradores de controlador:
  ```typescript
  @ApiResponse({ status: 200, type: UserResponseEntity })
  ```

### 13. Probar todos los endpoints

**Checklist:**
- [ ] Verificar documentación Swagger en http://localhost:3000/api
- [ ] Probar cada endpoint desde Swagger UI
- [ ] Probar autenticación desde Swagger:
  - [ ] Login para obtener token
  - [ ] Click en "Authorize" y pegar token
  - [ ] Probar endpoints protegidos
- [ ] Verificar mensajes de error claros:
  - [ ] Email duplicado
  - [ ] Usuario no encontrado
  - [ ] Credenciales inválidas
  - [ ] Token inválido
  - [ ] Validaciones de campos
- [ ] Probar conexión con base de datos local
- [ ] Si es posible, probar con base de datos en la nube

### 14. Actualizar README

**Checklist:**
- [ ] Agregar sección de configuración de variables de entorno
- [ ] Agregar link a documentación Swagger
- [ ] Agregar ejemplos de uso de la API
- [ ] Agregar instrucciones para base de datos en la nube

## 🧪 Pruebas de Verificación

### 1. Verificar Swagger
```bash
# Abrir navegador
open http://localhost:3000/api
```
Debe mostrar interfaz de Swagger con:
- Todos los endpoints documentados
- Schemas de DTOs
- Botón "Authorize" para JWT
- Ejemplos en cada endpoint

### 2. Probar validaciones mejoradas

```bash
# Email inválido
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"email": "invalid-email", "password": "123456", "name": "Test"}'

# Contraseña muy corta
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "123", "name": "Test"}'

# Título muy corto
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"title": "Hi"}'
```

Todos deben retornar errores 400 con mensajes claros.

### 3. Verificar filtro de excepciones

Respuestas de error deben tener formato consistente:
```json
{
  "statusCode": 400,
  "timestamp": "2024-01-01T00:00:00.000Z",
  "path": "/users",
  "method": "POST",
  "message": ["El email debe ser válido"]
}
```

## 📚 Recursos

- [NestJS Swagger](https://docs.nestjs.com/openapi/introduction)
- [Class Validator Decorators](https://github.com/typestack/class-validator#validation-decorators)
- [NestJS Exception Filters](https://docs.nestjs.com/exception-filters)
- [NestJS Custom Decorators](https://docs.nestjs.com/custom-decorators)

## 🐛 Problemas Comunes

1. **Swagger no muestra los endpoints:**
   - Verificar que SwaggerModule.setup está configurado
   - Verificar decoradores @ApiTags en controladores

2. **Autenticación no funciona en Swagger:**
   - Verificar addBearerAuth en configuración
   - Verificar @ApiBearerAuth en controladores

3. **Validaciones no funcionan:**
   - Verificar que ValidationPipe está configurado globalmente
   - Verificar decoradores en DTOs

## 📝 Notas

- Swagger UI permite probar la API sin Postman
- Los mensajes de error deben ser claros pero no revelar información sensible
- En producción, desactivar `synchronize` de TypeORM
- Usar migraciones en producción

## ⏱️ Tiempo Estimado
6-8 horas

## 🔗 Dependencias
- Día 1, 2 y 3 completados

## 📦 Entregables

Al finalizar este día, se debe tener:
1. ✅ Swagger documentación completa en /api
2. ✅ Validaciones robustas en todos los DTOs
3. ✅ Manejo de errores consistente
4. ✅ Filtro de excepciones global
5. ✅ Decoradores personalizados (@GetUser)
6. ✅ Configuración para DB local y nube
7. ✅ API estable y lista para testing
8. ✅ README actualizado
