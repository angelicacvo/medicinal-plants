🎯 Objetivo general

Construir un sistema backend con NestJS para gestionar un inventario de plantas, con autenticación, autorización por roles y conexión a base de datos PostgreSQL.

Etapa 0 – Planificación (✅ Completada)

Definida la user story principal.

Establecidos los roles y permisos (admin, analyst).

Definido el flujo base del sistema.

Creado archivo CONTEXT.md para documentar el progreso.

Etapa 1 – Configuración inicial del proyecto NestJS (✅ Completada)

Proyecto generado con Nest CLI.

Servidor confirmado corriendo en http://localhost:3000.

Dependencias base instaladas.

Configuración modular establecida.

Etapa 2 – CRUD en memoria de Plantas (✅ Completada)

Creado módulo plants con controlador, servicio y DTOs.

Implementado CRUD completo con almacenamiento en memoria.

IDs autoincrementales.

Manejo de errores con NotFoundException.

Probado con Postman (GET, POST, PUT, DELETE).

📌 Estado:
El sistema de plantas funciona completamente en memoria, sin persistencia ni autenticación.

Etapa 3 – Autenticación y Autorización con JWT (✅ Completada)
🔑 Objetivo

Implementar registro, inicio de sesión con JWT y control de permisos basado en roles.

🔧 Implementación realizada

Creado módulo auth con controlador, servicio y DTOs (LoginDto, RegisterDto).

Añadido JwtModule con configuración de firma y validación.

Implementado guardas personalizados:

JwtAuthGuard → protege rutas con token válido.

RolesGuard → valida roles (admin, analyst).

Añadido decorador @Roles() para asignar permisos.

Endpoint /auth/profile protegido con JWT.

Usuarios en memoria implementados:

admin@example.com
 / admin123 → rol: admin

analyst@example.com
 / analyst123 → rol: analyst

Validación de credenciales y generación de tokens JWT confirmada.

Acceso diferenciado por roles probado con Postman.

📌 Estado:
Autenticación funcional, JWT activo, roles verificados, rutas protegidas correctamente.

Etapa 4 – Integración con PostgreSQL (🚧 Próxima etapa)
🎯 Objetivo

Persistir datos reales de usuarios y plantas en una base de datos PostgreSQL, reemplazando el almacenamiento en memoria.

🔜 Pasos planificados

Configurar TypeORM

Instalar dependencias:

npm install @nestjs/typeorm typeorm pg


Crear archivo .env con variables de conexión.

Integrar TypeOrmModule en AppModule.

Crear entidades

User (en /auth/entities/user.entity.ts)

Plant (en /plants/entities/plant.entity.ts)

Conectar servicios

Reemplazar almacenamiento en memoria por repositorios TypeORM en auth.service.ts y plants.service.ts.

Probar persistencia

Ejecutar operaciones CRUD reales con Postman.

Confirmar que el sistema sigue validando JWT y roles.

Actualizar CONTEXT.md

Documentar la migración completa a PostgreSQL.

📌 Estado actual del proyecto:

Sistema funcional con autenticación JWT, roles, rutas protegidas y módulos estructurados.
Listo para conectar con PostgreSQL y reemplazar la capa en memoria por persistencia real.