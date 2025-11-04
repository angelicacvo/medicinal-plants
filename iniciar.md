# Guía para iniciar el proyecto

Este proyecto puede ejecutarse de dos formas: usando Node.js directamente (`npm run start`) o dentro de un contenedor Docker que ya incluye PostgreSQL. A continuación se describen ambos enfoques y los pasos para probar la API con Postman.

## 1. Ejecución local con npm

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Crea un archivo `.env` con la configuración de tu base de datos (puedes usar `.env.example` como referencia). Ejemplo:
   ```ini
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASS=postgres
   DB_NAME=medicinal_plants
   TYPEORM_SYNC=true
   PORT=3000
   ```
3. Asegúrate de que tu servidor PostgreSQL esté activo y que las credenciales sean correctas.
4. Levanta la API:
   ```bash
   npm run start
   ```

La aplicación quedará disponible en `http://localhost:3000`.

## 2. Ejecución con Docker

> Esta opción utiliza el `Dockerfile` incluido para levantar tanto PostgreSQL como la API NestJS en un solo contenedor. Ideal para pruebas rápidas.

1. Construye la imagen (requiere permisos sobre el daemon de Docker):
   ```bash
   docker build -t medicinal-plants .
   ```
2. Ejecuta el contenedor (puedes ajustar usuario/contraseña/base según necesites):
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

El contenedor inicializa PostgreSQL, crea la base de datos `medicinal_plants` y lanza la API. Para revisar los logs:
```bash
docker logs -f medicinal-plants
```
Para detener el servicio:
```bash
docker stop medicinal-plants
```

## 3. Conexión a la base de datos

- **Conexión local:** usa las credenciales definidas en el `.env`. Herramientas como DBeaver, TablePlus o `psql` funcionan con `localhost` y el puerto configurado.
- **Con Docker:** si ejecutaste el contenedor con el volumen `medicinal_plants_pgdata`, la base de datos vive dentro del contenedor. Puedes conectarte desde tu máquina anfitriona apuntando a `localhost`, puerto `5432` (expuesto internamente). Asegúrate de que el contenedor esté corriendo y usa los mismos valores de `DB_USER`, `DB_PASS` y `DB_NAME` especificados en `docker run`.

## 4. Pruebas rápidas con Postman

1. **Registro de usuario admin**
   - Método: `POST`
   - URL: `http://localhost:3000/auth/register`
   - Body (JSON):
     ```json
     {
       "email": "admin@example.com",
       "password": "Secreto123",
       "role": "admin"
     }
     ```
2. **Inicio de sesión**
   - Método: `POST`
   - URL: `http://localhost:3000/auth/login`
   - Body (JSON):
     ```json
     {
       "email": "admin@example.com",
       "password": "Secreto123"
     }
     ```
   - Copia el `accessToken` de la respuesta para usarlo en los siguientes endpoints.
3. **Crear una planta**
   - Método: `POST`
   - URL: `http://localhost:3000/plants`
   - Headers: `Authorization: Bearer <accessToken>`
   - Body (JSON):
     ```json
     {
       "name": "Manzanilla",
       "description": "Calma digestiva",
       "quantity": 10,
       "location": "Invernadero A"
     }
     ```
4. **Listar plantas**
   - Método: `GET`
   - URL: `http://localhost:3000/plants`
   - Headers: `Authorization: Bearer <accessToken>`

Puedes continuar con `GET /plants/:id`, `PATCH /plants/:id` y `DELETE /plants/:id` manteniendo el header `Authorization`.

---

Con estos pasos deberías poder levantar la API y probar sus endpoints principal es de manera rápida y controlada.
