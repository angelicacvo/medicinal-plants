# Día 5 – Testing, entrega y socialización grupal del proyecto

## 📝 Descripción
Implementar tests unitarios y e2e completos, asegurar alta cobertura de código, revisar commits y preparar la entrega final del proyecto.

## 🎯 Objetivo
Tener un proyecto completamente testeado, con commits limpios y listo para ser presentado y desplegado.

## ✅ Criterios de Aceptación

- [ ] Tests unitarios para TaskService implementados y pasando
- [ ] Tests unitarios para UserService implementados y pasando
- [ ] Tests unitarios para AuthService implementados y pasando
- [ ] Tests e2e para flujo completo implementados y pasando
- [ ] Cobertura de tests >= 80%
- [ ] Commits revisados siguiendo Conventional Commits
- [ ] Pull Request creado hacia main
- [ ] Documentación de presentación preparada

## 📋 Tareas

### 1. Configurar mocks para testing

**Checklist:**
- [ ] Crear carpeta `test/mocks` si no existe
- [ ] Crear mock de repositorio:
  ```typescript
  export const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };
  ```

### 2. Tests unitarios para UsersService

**Archivo:** `src/users/users.service.spec.ts`

**Checklist:**
- [ ] Crear archivo de tests
- [ ] Configurar TestingModule:
  ```typescript
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get(getRepositoryToken(User));
  });
  ```
- [ ] Test para `create()`:
  - [ ] Debe crear un usuario exitosamente
  - [ ] Debe hashear la contraseña
  - [ ] Debe lanzar ConflictException si email existe
  - [ ] Debe excluir contraseña de la respuesta
- [ ] Test para `findAll()`:
  - [ ] Debe retornar array de usuarios
  - [ ] Debe excluir contraseñas
- [ ] Test para `findOne()`:
  - [ ] Debe retornar usuario por ID
  - [ ] Debe lanzar NotFoundException si no existe
- [ ] Test para `findByEmail()`:
  - [ ] Debe retornar usuario con contraseña
  - [ ] Debe retornar null si no existe
- [ ] Test para `update()`:
  - [ ] Debe actualizar usuario exitosamente
  - [ ] Debe hashear nueva contraseña si se proporciona
  - [ ] Debe lanzar NotFoundException si usuario no existe
- [ ] Test para `remove()`:
  - [ ] Debe eliminar usuario exitosamente
  - [ ] Debe lanzar NotFoundException si usuario no existe

### 3. Tests unitarios para AuthService

**Archivo:** `src/auth/auth.service.spec.ts`

**Checklist:**
- [ ] Crear archivo de tests
- [ ] Configurar TestingModule con mocks de UsersService y JwtService
- [ ] Test para `validateUser()`:
  - [ ] Debe retornar usuario si credenciales son válidas
  - [ ] Debe retornar null si contraseña es incorrecta
  - [ ] Debe retornar null si usuario no existe
  - [ ] No debe incluir contraseña en respuesta
- [ ] Test para `login()`:
  - [ ] Debe retornar objeto con access_token
  - [ ] El token debe contener payload correcto

### 4. Tests unitarios para TasksService

**Archivo:** `src/tasks/tasks.service.spec.ts`

**Checklist:**
- [ ] Crear archivo de tests
- [ ] Configurar TestingModule con mock de repositorio
- [ ] Test para `create()`:
  - [ ] Debe crear tarea asociada al userId
  - [ ] Debe guardar en base de datos
  - [ ] Debe retornar tarea creada
- [ ] Test para `findAll()`:
  - [ ] Debe retornar solo tareas del usuario
  - [ ] Debe retornar array vacío si no hay tareas
- [ ] Test para `findOne()`:
  - [ ] Debe retornar tarea si existe y pertenece al usuario
  - [ ] Debe lanzar NotFoundException si no existe
  - [ ] Debe lanzar NotFoundException si pertenece a otro usuario
- [ ] Test para `update()`:
  - [ ] Debe actualizar tarea exitosamente
  - [ ] Debe lanzar NotFoundException si no existe
  - [ ] Debe verificar pertenencia al usuario
- [ ] Test para `remove()`:
  - [ ] Debe eliminar tarea exitosamente
  - [ ] Debe lanzar NotFoundException si no existe
  - [ ] Debe verificar pertenencia al usuario

### 5. Ejecutar tests unitarios

**Checklist:**
- [ ] Ejecutar: `npm run test`
- [ ] Verificar que todos los tests pasan
- [ ] Corregir cualquier test que falle

### 6. Tests e2e - Configuración

**Archivo:** `test/app.e2e-spec.ts`

**Checklist:**
- [ ] Actualizar configuración de base de datos para testing:
  ```typescript
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'task_management_test',
    entities: ['./**/*.entity.ts'],
    synchronize: true,
    dropSchema: true, // Limpia DB antes de cada test
  })
  ```
- [ ] Crear base de datos de test: `createdb task_management_test`

### 7. Tests e2e - Autenticación

**Archivo:** `test/auth.e2e-spec.ts`

**Checklist:**
- [ ] Crear archivo de tests e2e de auth
- [ ] Test: Registro de usuario:
  - [ ] POST /auth/register con datos válidos
  - [ ] Debe retornar 201 y token
  - [ ] No debe retornar contraseña
- [ ] Test: Login exitoso:
  - [ ] POST /auth/login con credenciales válidas
  - [ ] Debe retornar 200 y token
- [ ] Test: Login fallido:
  - [ ] POST /auth/login con credenciales inválidas
  - [ ] Debe retornar 401
- [ ] Test: Registro con email duplicado:
  - [ ] Debe retornar 409

### 8. Tests e2e - Usuarios

**Archivo:** `test/users.e2e-spec.ts`

**Checklist:**
- [ ] Test: Crear usuario:
  - [ ] POST /users con datos válidos
  - [ ] Debe retornar 201
- [ ] Test: Listar usuarios:
  - [ ] GET /users
  - [ ] Debe retornar 200 y array de usuarios
- [ ] Test: Obtener usuario por ID:
  - [ ] GET /users/:id
  - [ ] Debe retornar 200 y usuario
- [ ] Test: Actualizar usuario:
  - [ ] PATCH /users/:id
  - [ ] Debe retornar 200 y usuario actualizado
- [ ] Test: Eliminar usuario:
  - [ ] DELETE /users/:id
  - [ ] Debe retornar 200 o 204

### 9. Tests e2e - Tareas

**Archivo:** `test/tasks.e2e-spec.ts`

**Checklist:**
- [ ] Test: Acceso sin autenticación:
  - [ ] GET /tasks sin token
  - [ ] Debe retornar 401
- [ ] Test: Crear tarea:
  - [ ] POST /tasks con token válido
  - [ ] Debe retornar 201 y tarea
- [ ] Test: Listar tareas del usuario:
  - [ ] GET /tasks con token
  - [ ] Debe retornar solo tareas del usuario
- [ ] Test: Obtener tarea por ID:
  - [ ] GET /tasks/:id con token
  - [ ] Debe retornar tarea si pertenece al usuario
- [ ] Test: Actualizar tarea:
  - [ ] PATCH /tasks/:id con token
  - [ ] Debe actualizar y retornar tarea
- [ ] Test: Eliminar tarea:
  - [ ] DELETE /tasks/:id con token
  - [ ] Debe eliminar exitosamente
- [ ] Test: Usuario no puede ver tareas de otro usuario:
  - [ ] Crear 2 usuarios
  - [ ] Usuario A crea tarea
  - [ ] Usuario B intenta acceder a tarea de A
  - [ ] Debe retornar 404

### 10. Test e2e - Flujo completo

**Archivo:** `test/complete-flow.e2e-spec.ts`

**Checklist:**
- [ ] Test de flujo completo:
  ```typescript
  it('Complete user journey', async () => {
    // 1. Registrar usuario
    const registerResponse = await request(app.getHttpServer())
      .post('/auth/register')
      .send({ email: 'user@test.com', password: 'pass123', name: 'Test' })
      .expect(201);
    
    const token = registerResponse.body.access_token;

    // 2. Crear tarea
    const createTaskResponse = await request(app.getHttpServer())
      .post('/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Test Task', description: 'Test Description' })
      .expect(201);
    
    const taskId = createTaskResponse.body.id;

    // 3. Listar tareas
    await request(app.getHttpServer())
      .get('/tasks')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    // 4. Actualizar tarea
    await request(app.getHttpServer())
      .patch(`/tasks/${taskId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ completed: true })
      .expect(200);

    // 5. Eliminar tarea
    await request(app.getHttpServer())
      .delete(`/tasks/${taskId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });
  ```

### 11. Tests de validaciones

**Checklist:**
- [ ] Test: Email inválido debe fallar
- [ ] Test: Contraseña corta debe fallar
- [ ] Test: Título de tarea corto debe fallar
- [ ] Test: Campos requeridos faltantes deben fallar

### 12. Ejecutar tests e2e

**Checklist:**
- [ ] Ejecutar: `npm run test:e2e`
- [ ] Verificar que todos los tests pasan
- [ ] Corregir cualquier test que falle

### 13. Verificar cobertura de tests

**Checklist:**
- [ ] Ejecutar: `npm run test:cov`
- [ ] Revisar reporte de cobertura en `coverage/`
- [ ] Verificar que cobertura es >= 80%:
  - [ ] Statements: >= 80%
  - [ ] Branches: >= 80%
  - [ ] Functions: >= 80%
  - [ ] Lines: >= 80%
- [ ] Si cobertura es menor, agregar tests faltantes

### 14. Revisar y limpiar commits

**Checklist:**
- [ ] Ejecutar: `git log --oneline`
- [ ] Verificar que commits siguen Conventional Commits:
  - `feat:` para nuevas features
  - `fix:` para correcciones
  - `test:` para tests
  - `docs:` para documentación
  - `refactor:` para refactorizaciones
- [ ] Si es necesario, usar `git rebase -i` para reorganizar (solo si no se ha pusheado)
- [ ] Ejemplos de buenos commits:
  ```
  feat(users): add user CRUD endpoints
  feat(auth): implement JWT authentication
  feat(tasks): add task module with CRUD
  test(tasks): add unit tests for TaskService
  test(e2e): add complete flow test
  docs(readme): update with API documentation
  docs(swagger): add API documentation
  ```

### 15. Crear Pull Request

**Checklist:**
- [ ] Asegurarse de que todos los tests pasan
- [ ] Asegurarse de que el código está formateado: `npm run format`
- [ ] Asegurarse de que el linter pasa: `npm run lint`
- [ ] Push a la rama de desarrollo
- [ ] Crear PR hacia `main` con:
  - Título descriptivo
  - Descripción completa del trabajo realizado
  - Lista de features implementadas
  - Screenshots de Swagger (opcional)
  - Resultados de tests

### 16. Preparar presentación del proyecto

**Checklist:**
- [ ] Preparar demostración en vivo:
  - [ ] Swagger UI funcionando
  - [ ] Ejemplos de requests con Postman
  - [ ] Tests pasando
- [ ] Preparar explicación de:
  - [ ] Arquitectura del proyecto
  - [ ] Módulos implementados
  - [ ] Autenticación JWT
  - [ ] Validaciones
  - [ ] Tests
- [ ] Preparar lista de endpoints:
  ```
  Auth:
  - POST /auth/register
  - POST /auth/login

  Users:
  - POST /users
  - GET /users
  - GET /users/:id
  - PATCH /users/:id
  - DELETE /users/:id

  Tasks:
  - POST /tasks (protegido)
  - GET /tasks (protegido)
  - GET /tasks/:id (protegido)
  - PATCH /tasks/:id (protegido)
  - DELETE /tasks/:id (protegido)
  ```

### 17. Documentación final

**Checklist:**
- [ ] Actualizar README.md con:
  - [ ] Descripción del proyecto
  - [ ] Features implementadas
  - [ ] Tecnologías utilizadas
  - [ ] Instrucciones de instalación
  - [ ] Instrucciones de testing
  - [ ] Link a documentación Swagger
  - [ ] Variables de entorno necesarias
- [ ] Crear o actualizar CONTRIBUTING.md si aplica
- [ ] Crear o actualizar CHANGELOG.md con los cambios

## 🧪 Comandos de Verificación Final

```bash
# 1. Instalar dependencias limpias
rm -rf node_modules package-lock.json
npm install

# 2. Ejecutar linter
npm run lint

# 3. Ejecutar formateador
npm run format

# 4. Ejecutar build
npm run build

# 5. Ejecutar tests unitarios
npm run test

# 6. Ejecutar tests e2e
npm run test:e2e

# 7. Verificar cobertura
npm run test:cov

# 8. Iniciar servidor
npm run start:dev

# 9. Verificar Swagger
open http://localhost:3000/api
```

Todos deben completarse sin errores.

## 📊 Métricas de Calidad

Al finalizar, el proyecto debe cumplir:

- ✅ Cobertura de tests >= 80%
- ✅ 0 errores de linter
- ✅ 0 vulnerabilidades críticas (npm audit)
- ✅ Todos los tests pasan
- ✅ Build exitoso
- ✅ Documentación completa

## 📚 Recursos

- [NestJS Testing](https://docs.nestjs.com/fundamentals/testing)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 🐛 Problemas Comunes

1. **Tests e2e fallan por base de datos:**
   - Crear base de datos de test separada
   - Usar `dropSchema: true` en configuración

2. **Mock no funciona correctamente:**
   - Verificar que el mock tiene todos los métodos necesarios
   - Usar `jest.fn()` para cada método

3. **Cobertura baja:**
   - Revisar qué archivos no están cubiertos
   - Agregar tests específicos para esas áreas

## 📝 Checklist de Presentación

- [ ] Demo de Swagger UI
- [ ] Demo de autenticación (login → token)
- [ ] Demo de crear tarea
- [ ] Demo de listar tareas
- [ ] Demo de actualizar tarea
- [ ] Demo de eliminar tarea
- [ ] Mostrar que usuario A no ve tareas de usuario B
- [ ] Mostrar validaciones (título corto, email inválido)
- [ ] Mostrar resultados de tests
- [ ] Mostrar cobertura de tests
- [ ] Explicar arquitectura (módulos, servicios, controladores)
- [ ] Explicar seguridad (JWT, bcrypt, guards)

## ⏱️ Tiempo Estimado
8-10 horas

## 🔗 Dependencias
- Días 1, 2, 3 y 4 completados

## 📦 Entregables

Al finalizar este día, se debe tener:
1. ✅ Tests unitarios completos y pasando
2. ✅ Tests e2e completos y pasando
3. ✅ Cobertura >= 80%
4. ✅ Commits limpios siguiendo Conventional Commits
5. ✅ Pull Request creado
6. ✅ Documentación completa
7. ✅ Presentación preparada
8. ✅ Proyecto listo para producción

## 🎉 ¡Proyecto Completo!

Una vez completado este día, el proyecto está listo para:
- ✅ Ser desplegado a producción
- ✅ Ser presentado al equipo
- ✅ Servir como base para features adicionales
- ✅ Ser incluido en portafolio
