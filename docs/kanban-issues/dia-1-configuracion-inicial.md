# Día 1 – Preparación del entorno y configuración inicial

## 📝 Descripción
Configurar el proyecto base de NestJS con todas las herramientas y dependencias necesarias para el desarrollo. Este incluye la configuración de la base de datos PostgreSQL y las variables de entorno.

## 🎯 Objetivo
Tener un entorno de desarrollo completamente funcional con NestJS, PostgreSQL y configuración de variables de entorno.

## ✅ Criterios de Aceptación

- [x] NestJS está instalado y funcionando correctamente
- [ ] Proyecto base tiene una estructura limpia y organizada
- [ ] Conexión a PostgreSQL está establecida (local o nube)
- [ ] Variables de entorno están configuradas correctamente (.env)
- [ ] Servidor arranca y corre sin errores

## 📋 Tareas

### 1. Instalar dependencias necesarias
```bash
npm install @nestjs/typeorm typeorm pg @nestjs/config
npm install -D @types/node
```

**Checklist:**
- [ ] Ejecutar comando de instalación
- [ ] Verificar que las dependencias están en package.json
- [ ] Verificar que node_modules contiene los paquetes

### 2. Configurar variables de entorno

**Checklist:**
- [ ] Crear archivo `.env` en la raíz del proyecto
- [ ] Agregar variables de configuración de base de datos:
  ```env
  DB_HOST=localhost
  DB_PORT=5432
  DB_USERNAME=postgres
  DB_PASSWORD=postgres
  DB_DATABASE=task_management
  JWT_SECRET=your-secret-key-change-in-production
  JWT_EXPIRES_IN=1d
  PORT=3000
  NODE_ENV=development
  ```
- [ ] Crear archivo `.env.example` con la misma estructura pero sin valores sensibles
- [ ] Verificar que `.env` está en `.gitignore`

### 3. Configurar ConfigModule

**Checklist:**
- [ ] Importar `ConfigModule` en `app.module.ts`
- [ ] Configurar `ConfigModule.forRoot({ isGlobal: true })`
- [ ] Verificar que las variables de entorno se pueden leer

### 4. Configurar TypeORM

**Checklist:**
- [ ] Importar `TypeOrmModule` en `app.module.ts`
- [ ] Configurar conexión a PostgreSQL usando variables de entorno:
  ```typescript
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // Solo en desarrollo
  })
  ```
- [ ] Verificar que la configuración está correcta

### 5. Verificar conexión a base de datos

**Checklist:**
- [ ] Asegurarse de que PostgreSQL está instalado y corriendo
- [ ] Crear la base de datos `task_management`
- [ ] Intentar iniciar el servidor: `npm run start:dev`
- [ ] Verificar en los logs que la conexión a la base de datos es exitosa
- [ ] Verificar que no hay errores en la consola

### 6. Documentar el proceso de setup

**Checklist:**
- [ ] Actualizar README.md con instrucciones de instalación
- [ ] Incluir prerequisitos (Node.js, PostgreSQL)
- [ ] Incluir pasos de configuración de base de datos
- [ ] Incluir comandos de instalación y ejecución
- [ ] Documentar variables de entorno necesarias

## 🧪 Pruebas de Verificación

1. **Verificar instalación:**
   ```bash
   npm run build
   ```
   Debe completarse sin errores.

2. **Verificar servidor:**
   ```bash
   npm run start:dev
   ```
   Debe mostrar:
   - Servidor corriendo en puerto 3000
   - Conexión a base de datos exitosa
   - Sin errores en consola

3. **Verificar endpoint de prueba:**
   ```bash
   curl http://localhost:3000
   ```
   Debe retornar "Hello World!" o la respuesta por defecto.

## 📚 Recursos

- [NestJS Configuration](https://docs.nestjs.com/techniques/configuration)
- [TypeORM with NestJS](https://docs.nestjs.com/techniques/database)
- [PostgreSQL Installation](https://www.postgresql.org/download/)

## 🐛 Problemas Comunes

1. **Error de conexión a PostgreSQL:**
   - Verificar que PostgreSQL está corriendo
   - Verificar credenciales en .env
   - Verificar que el puerto 5432 está disponible

2. **Error de módulos no encontrados:**
   - Ejecutar `npm install` de nuevo
   - Verificar que todas las dependencias están en package.json

3. **Puerto 3000 en uso:**
   - Cambiar el puerto en .env
   - O liberar el puerto 3000

## 📝 Notas

- Asegurarse de NO commitear el archivo `.env` al repositorio
- Mantener `.env.example` actualizado
- Usar `synchronize: true` solo en desarrollo
- En producción, usar migraciones de TypeORM

## ⏱️ Tiempo Estimado
4-6 horas

## 🔗 Dependencias
Ninguna (es el primer día)

## 📦 Entregables

Al finalizar este día, se debe tener:
1. ✅ Servidor NestJS corriendo sin errores
2. ✅ Conexión a PostgreSQL establecida
3. ✅ Variables de entorno configuradas
4. ✅ Documentación básica actualizada
5. ✅ Proyecto listo para desarrollo de features
