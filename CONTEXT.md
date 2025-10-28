🧾 Actualización de CONTEXT.md
🪴 Proyecto: Sistema de Inventario de Plantas (NestJS + PostgreSQL)

Objetivo general:
Construir un sistema backend con NestJS para gestionar un inventario de plantas, con autenticación, autorización por roles y conexión a base de datos PostgreSQL.

Etapa 0 – Planificación (✅ Completada)

Definida la user story principal.

Establecidos los roles y permisos (admin, analyst).

Definido el flujo base del sistema.

Creado archivo CONTEXT.md para documentar el progreso.

Etapa 1 – Configuración inicial del proyecto NestJS (✅ Completada)

Instaladas dependencias base (npm i).

Proyecto generado con Nest CLI.

Servidor confirmado corriendo en http://localhost:3000.

Etapa 2 – CRUD en memoria de Plantas (✅ Completada)

Creado módulo plants con controlador, servicio y DTOs.

Implementado CRUD completo con almacenamiento en memoria.

Manejo de errores con NotFoundException.

IDs autoincrementales implementados.

Probado con Postman (GET, POST, PUT, DELETE).

Estado actual:
El sistema de plantas funciona completamente, pero sin persistencia ni control de acceso.

Etapa 3 – Autenticación y Autorización con JWT (🚧 En progreso)

Objetivo:
Implementar registro e inicio de sesión con JWT y control de permisos basado en roles (admin, analyst).

Pasos planificados:

Crear módulo auth.

Crear DTOs para login y registro.

Implementar usuarios en memoria (temporalmente).

Configurar JWT (firmar y validar tokens).

Crear guard para proteger rutas y aplicar roles.

Integrar autenticación con el módulo plants.

Etapa 4 – Integración con PostgreSQL (⏳ Próxima)

Configurar conexión con TypeORM.

Persistir usuarios y plantas en la base de datos.

Reemplazar los servicios en memoria por repositorios reales.

✅ Contexto actualizado y claro para continuar con la Etapa 3 – Autenticación con JWT.