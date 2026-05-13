# Mini equipo de desarrollo: API versionada con Git y GitHub

## Descripción

Este proyecto consiste en una API desarrollada con Node.js y Express.js para la gestión de tareas.

La aplicación permite:

- Listar tareas.
- Buscar una tarea por ID.
- Crear nuevas tareas.

El proyecto fue desarrollado utilizando Git y GitHub, trabajando mediante ramas para implementar distintas funcionalidades de forma separada y organizada.

---

# Tecnologías utilizadas

- Node.js
- Express.js
- Git
- GitHub
- Thunder Client

---

# Integrantes

- Williams Brandon
- Sevilla Florencia

---

# Estructura del proyecto

```
api-tareas/
│
├── controllers/
│   └── tareasController.js
│
├── routes/
│   └── tareas.js
│
├── node_modules/
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# Instalación del proyecto

## 1. Clonar el repositorio

```git clone <URL_DEL_REPOSITORIO>```

---

## 2. Ingresar a la carpeta del proyecto

```cd api-tareas```

---

## 3. Instalar dependencias

```npm install```

Esto instalará automáticamente todas las dependencias necesarias definidas en el archivo `package.json`.

---

# Ejecución del proyecto

Para iniciar el servidor ejecutar:

```node app.js```
abrir la URL de la consola en el navegador

---


# Pruebas con Thunder Client

Para probar los endpoints se utilizó Thunder Client dentro de Visual Studio Code.

## Pasos para probar la API

### 1. Instalar Thunder Client

En Visual Studio Code abrir:

```
Extensions → Buscar "Thunder Client"
```

Instalar la extensión.

---

### 2. Abrir Thunder Client

Seleccionar el ícono de Thunder Client en la barra lateral izquierda.

---

### 3. Crear una request

Seleccionar el método HTTP correspondiente:

```
GET
```

o

```
POST
```

---

### 4. Ingresar la URL

```
http://localhost:3000/tareas
```

---

### 5. Para POST seleccionar Body → JSON

Ingresar por ejemplo:

```json
{
  "titulo": "Comprar pan"
}
```

---

### 6. Presionar Send

Thunder Client mostrará la respuesta enviada por el servidor.

---

# Gestión de ramas

Durante el desarrollo se trabajó utilizando ramas para separar funcionalidades.

## Ramas utilizadas

- feature-listado-tareas
- feature-detalle-tarea
- feature-crear-tarea
- compatibilidad-features

Cada rama implementó un endpoint distinto aseguro la compatibilidad entre estos para mantener un desarrollo organizado y controlado mediante Git.
