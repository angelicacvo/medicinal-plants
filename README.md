# 🌿 Medicinal Plants API

Proyecto backend para gestionar plantas medicinales con autenticación JWT. Construido con NestJS, TypeORM y PostgreSQL (Supabase).

Este documento explica de forma clara y práctica cómo entender el proyecto y ponerlo a funcionar, sin ejemplos de código.

## 1) ¿Qué es este proyecto?

- API REST para: usuarios y plantas medicinales.
- Autenticación con inicio de sesión y registro (JWT).
- Operaciones principales: crear, listar, ver detalle, actualizar y eliminar plantas y usuarios (según permisos).
- Documentación interactiva con Swagger.

## 2) Requisitos previos

- Cuenta en Supabase (PostgreSQL en la nube).
- Node.js y npm instalados en el equipo del desarrollador.
- (Opcional) Docker Desktop si se prefiere ejecutar en contenedor.

## 3) Configuración de variables de entorno

En el archivo de ejemplo de configuración se encuentran todas las variables necesarias (`.env.example`). Se debe crear un archivo `.env` en la raíz del proyecto y completarlo con:

- Conexión a base de datos (host del pooler de Supabase, puerto, nombre de base, usuario y contraseña).
- Puerto de la aplicación (por defecto 3001, puede ajustarse).
- Clave secreta para firmar tokens JWT (debe ser segura y privada).

Sugerencia: se recomienda guardar las credenciales en un lugar seguro y no compartir el archivo `.env`.

## 4) Cómo ejecutar el proyecto

Existen dos formas de ejecución; el equipo puede elegir la preferida.

### Opción A: Con Docker (recomendada por simplicidad)

1. Es necesario tener Docker Desktop instalado y en ejecución.
2. Se copia el archivo de ejemplo de entorno a un `.env` y se completan las credenciales de Supabase y la clave JWT.
3. Se actualizan, si es necesario, las variables de entorno del servicio en el archivo de orquestación de contenedores.
4. Se construyen y se levantan los contenedores. La primera ejecución puede tardar algunos minutos.
5. Una vez en ejecución, la API queda disponible en el puerto configurado (por defecto 3001) y la documentación en la ruta de Swagger.

Verificaciones finales:
- La aplicación responde en el navegador en la URL base local.
- La documentación Swagger carga correctamente en la ruta de documentación.

### Opción B: En un entorno local (sin Docker)

1. Se instalan las dependencias del proyecto con el gestor de paquetes.
2. Se copia el archivo de ejemplo de entorno a `.env` y se completan las credenciales de Supabase y la clave JWT.
3. Se inicia el servidor en modo desarrollo (con recarga en caliente) o en modo producción (compilado previamente).
4. Se confirma que la API responde en el puerto configurado y que la documentación Swagger está disponible.

## 5) Datos de ejemplo (seeding)

El proyecto incluye un script para poblar la base de datos con usuarios y plantas de ejemplo. Es útil para pruebas rápidas.

Cuándo usarlo:
- Primera vez que se levanta el proyecto.
- Cuando se requiera reiniciar los datos de desarrollo.

Qué hace:
- Limpia tablas principales respetando relaciones.
- Crea usuarios con contraseñas cifradas (bcrypt).
- Inserta un conjunto de plantas de ejemplo asociadas a esos usuarios.

## 6) Acceso y comprobaciones rápidas

- URL base local de la API: utiliza el puerto configurado en el entorno (por defecto 3001).
- Documentación interactiva (Swagger): disponible en la ruta de documentación de la API.
- Autenticación: primero se registra un usuario o se utilizan los usuarios del seeder; luego se inicia sesión para obtener un token y acceder a rutas protegidas.

## 7) Funcionalidades principales

- Autenticación y autorización con JWT (rutas públicas para registro e inicio de sesión; el resto, protegidas).
- Gestión de usuarios (crear, listar, ver, actualizar, eliminar según permisos).
- Gestión de plantas medicinales (crear, listar, ver, actualizar, eliminar; algunas acciones requieren estar autenticado).
- Validación de datos de entrada y manejo de errores comprensible.
- Documentación clara con Swagger para explorar la API.

## 8) Guía breve de comandos (explicación, sin mostrarlos)

Se trata de una referencia rápida del propósito de cada acción típica del proyecto (sin mostrar comandos):

- Instalar dependencias: prepara todas las librerías necesarias del proyecto.
- Iniciar en desarrollo: arranca el servidor con recarga automática cuando cambias archivos.
- Compilar la aplicación: genera los archivos de salida optimizados para producción.
- Iniciar en producción: ejecuta la aplicación ya compilada.
- Poblar la base de datos (seeding): elimina datos antiguos de desarrollo y crea usuarios (con contraseñas cifradas) y plantas de ejemplo.
- Levantar con contenedores: construye y arranca la app dentro de Docker, ideal para entornos homogéneos.
- Ver registros en contenedores: muestra en tiempo real lo que va ocurriendo dentro del servicio.
- Apagar contenedores: detiene y elimina los servicios levantados con el orquestador.

## 9) Problemas comunes y cómo resolverlos

- No conecta a la base de datos: se revisa el host del pooler de Supabase, puerto, usuario, contraseña y que el proyecto de Supabase esté activo.
- Puerto en uso: se cambia el puerto en el archivo de entorno o se cierra el proceso que lo está ocupando.
- Errores de token: se verifica que exista una clave JWT segura y que el token se envíe con el formato correcto en el encabezado de autorización.
- El contenedor no inicia: se verifican variables de entorno, se revisan los logs del servicio y se reconstruyen los contenedores si es necesario.

## 10) Notas finales

- Mantener el archivo de entorno fuera del control de versiones.
- Usar claves seguras y diferentes para desarrollo y producción.
- La documentación Swagger permite explorar y probar la API de forma guiada.

## 11) Resumen del trabajo realizado

Esta sección describe, en tercera persona y de forma ejecutiva, las tareas y mejoras ya implementadas en el proyecto.

- Traducción y estandarización: se tradujo completamente el código y las descripciones del español al inglés, homogeneizando nombres de módulos, entidades, DTOs y comentarios.
- Autenticación y seguridad: se implementó autenticación basada en JWT, protección de rutas con guardas, y cifrado de contraseñas con bcrypt. Se añadieron utilidades y decoradores de uso común.
- Base de datos y seeding: se configuró TypeORM con PostgreSQL (Supabase). Se creó un seeder que limpia datos previos respetando relaciones y repuebla con usuarios (contraseñas cifradas) y plantas de ejemplo.
- Documentación de la API: se integró Swagger para contar con documentación interactiva y sencilla de navegar.
- Contenedores: se agregó soporte con contenedores y orquestación para facilitar la ejecución en entornos homogéneos.
- Pruebas: se dejó preparada la infraestructura de pruebas (unitarias y e2e) para validar flujos principales.
- Registro y mensajes: se mejoró el registro de acciones del seeder y del arranque de la aplicación para facilitar el diagnóstico.
- Resolución de conflictos de puertos: se ajustó la configuración para mitigar errores cuando un puerto ya está en uso.

### Estado actual

- La aplicación arranca correctamente con la configuración indicada en el archivo de entorno.
- La base de datos puede poblarse con datos de ejemplo de forma segura y repetible.
- La autenticación funciona con verificación de contraseñas cifradas y emisión de tokens JWT.
- La documentación está disponible de forma interactiva para explorar los endpoints.

### Próximos pasos sugeridos

- Ajustar dominios y CORS para producción cuando corresponda.
- Rotar y resguardar la clave JWT en un gestor de secretos en entornos reales.
- Añadir monitoreo y alertas básicos en el entorno de despliegue escogido.

## **Soporte:**
- Para dudas o problemas:
  Revisar documentación de NestJS
  Consultar con el equipo en el canal de Slack/Discord
  Crear un issue en el repositorio

## **Equipo:**
Repositorio: https://github.com/angelicacvo/medicinal-plants
Sprint Duration: 1 week

---
