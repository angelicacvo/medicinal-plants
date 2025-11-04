# Sistema de Gestión de Plantas Medicinales

Backend construido con NestJS + PostgreSQL que permite gestionar un inventario de plantas y controlar el acceso por roles (`admin`, `analyst`).

## Requisitos

- Node.js 18+
- PostgreSQL 13+
- npm o pnpm

## Configuración inicial

1. Copia el archivo `.env.example` a `.env` y ajusta los valores.
   ```bash
   cp .env.example .env
   ```
2. Instala las dependencias (requiere acceso a internet):
   ```bash
   npm install
   ```
3. Ejecuta las migraciones automáticas de TypeORM (solo en entornos de desarrollo):
   ```bash
   npm run start:dev
   ```
   > El proyecto está configurado con `TYPEORM_SYNC=true` para sincronizar el esquema. Desactívalo en producción y administra la base de datos mediante migraciones.

## Scripts útiles

- `npm run start:dev`: ejecuta el servidor en modo watch (puerto `3000`).
- `npm run build`: genera la salida compilada en `dist/`.
- `npm run lint`: ejecuta ESLint.
- `npm test`: corre el conjunto de pruebas (cuando existan).

## Ejecución rápida con Docker

> **Nota:** Se empaqueta la API NestJS y un servidor PostgreSQL en un mismo contenedor para simplificar entornos locales. En producción se recomienda separar servicios.

1. Construye la imagen:
   ```bash
   docker build -t medicinal-plants .
   ```
2. Arranca el contenedor (ajusta credenciales según necesites):
   ```bash
   docker run \
     --name medicinal-plants \
     -p 3000:3000 \
     -e DB_USER=postgres \
     -e DB_PASS=postgres \
     -e DB_NAME=medicinal_plants \
     -e TYPEORM_SYNC=true \
     -v medicinal_plants_pgdata:/var/lib/postgresql/data \
     medicinal-plants
   ```

Al primer arranque se inicializa PostgreSQL, se crea la base de datos `medicinal_plants` y se sincroniza el esquema mediante TypeORM. El servicio queda disponible en `http://localhost:3000`.

## Flujo de autenticación

1. Registro (`POST /auth/register`): crea un usuario; por defecto el rol es `analyst`.
2. Inicio de sesión (`POST /auth/login`): devuelve `{ user, accessToken }`.
3. Endpoints protegidos: usa el token JWT en el encabezado `Authorization: Bearer <token>`.

## Endpoints principales

- `GET /plants`: listado de plantas (`admin` y `analyst`).
- `GET /plants/:id`: detalle (`admin` y `analyst`).
- `POST /plants`: crear (solo `admin`).
- `PATCH /plants/:id`: actualizar (solo `admin`).
- `DELETE /plants/:id`: eliminar (solo `admin`).

## Testing manual recomendado

1. Registrar un usuario `admin` (ajusta el campo `role`).
2. Crear un usuario `analyst` y verificar que no pueda acceder a rutas restringidas.
3. Validar que un token inválido produce `401` y que un `analyst` reciba `403` en operaciones restringidas.
4. Confirmar que los datos creados aparecen en PostgreSQL.
