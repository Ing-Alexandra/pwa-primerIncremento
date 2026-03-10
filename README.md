# Academic Review PWA

## Descripción

Academic Review es una Aplicación Web Progresiva (PWA) que permite gestionar y visualizar artículos académicos para su proceso de revisión.
La aplicación permite registrar artículos, asignar revisores y consultar el estado de cada artículo desde un tablero.

## Funcionalidades

* Registro de artículos académicos
* Asignación de un profesor revisor
* Subida de archivo PDF
* Visualización de artículos en un tablero
* Cambio de estado del artículo (En revisión, Aprobado, Rechazado)
* Eliminación de artículos
* Persistencia de datos usando IndexedDB
* Funcionamiento offline mediante Service Worker
* Interfaz con navegación entre Artículos y Revisores

## Arquitectura

La aplicación está organizada en tres capas principales:

UI (Interfaz)
  ArticleBoard
  Se encarga de mostrar los artículos en el tablero.

Lógica de negocio
  ArticleManager
  Maneja la lógica de los artículos y su estado.

Persistencia de datos
  ArticleStorage
  Gestiona el almacenamiento en IndexedDB.

## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (ES6)
* IndexedDB
* Service Worker
* Web App Manifest

## Cómo ejecutar la aplicación

1. Clonar o descargar el repositorio.
2. Abrir el proyecto en Visual Studio Code.
3. Ejecutar el archivo index.html usando Live Server.
4. Acceder desde el navegador en:

http://localhost:5500

## Funcionamiento

1. El usuario puede registrar un artículo ingresando:

   * Título
   * Autor
   * Profesor revisor
   * Archivo PDF

2. El artículo se guarda en IndexedDB.

3. Los artículos aparecen en el tablero, donde se puede:

   * visualizar la información
   * cambiar su estado
   * eliminar el artículo

4. La aplicación puede seguir funcionando sin conexión a internet gracias al Service Worker.

## Limitaciones actuales

* Los revisores son estáticos (no se pueden agregar nuevos desde la interfaz).
* No existe autenticación de usuarios.
* Los artículos solo se gestionan localmente (no hay servidor backend).
