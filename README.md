# New Portfolio

Este proyecto es una aplicación web de portafolio personal que permite a los usuarios mostrar sus habilidades, proyectos y proporcionar una manera de contactarse. La aplicación está compuesta por un frontend desarrollado en React y un backend en Node.js con Express. El backend se conecta a una base de datos alojada en Turso para almacenar y gestionar los datos de contacto.

## Tecnologías Usadas

### Frontend
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Manejo de la navegación entre diferentes componentes.
- **Axios**: Para realizar solicitudes HTTP al backend.
- **HTML/CSS**: Para el diseño y la estructura de la página web.

### Backend
- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir aplicaciones web y API.
- **Axios**: Para realizar solicitudes HTTP al backend.
- **CORS**: Middleware para permitir solicitudes entre diferentes orígenes.
- **MySQL**: Base de datos relacional para almacenar datos de contacto.

## Descripción del Proyecto

### Frontend

El frontend está desarrollado con React, utilizando componentes funcionales y hooks. La aplicación es de una sola página (SPA) y permite navegar entre diferentes secciones como Home, Projects, Skills y Contact. También incluye un tema oscuro/ligero que se puede alternar mediante un botón.

### Backend

El backend está construido con Node.js y Express. Proporciona una API RESTful para gestionar los datos de contacto. Incluye las siguientes funcionalidades:

- Obtener todos los contactos.
- Obtener un contacto por ID.
- Crear un nuevo contacto.
- Actualizar un contacto existente.
- Eliminar un contacto por ID.

### Base de Datos

La base de datos utilizada es MySQL, donde se almacenan los datos de contacto. La conexión a la base de datos está configurada utilizando la biblioteca `mysql2`.

### Despliegue

El proyecto está desplegado tanto el backend como el frontend en Vercel.

