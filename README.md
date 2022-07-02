<p align='left'>
    
</p>

# Harry Potter - App

<p align="right">
 
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar conceptos. 

## Horarios y Fechas

El proyecto tendrá una duración máxima de 2 semanas.


__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `food`

El contenido de `client` fue creado usando: Create React App.


__IMPORTANTE__: No se utilizaran librerías externas para aplicar estilos a la aplicación. Tendrán que utilizar CSS (CSS puro, CSS Modules o Styled Components).

#### Tecnologías necesarias:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Frontend

La aplicación de React/Redux contiene las siguientes pantallas/rutas.

__Pagina inicial__: Es una landing page con
- [ ] Una imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: Conteniene
- [ ] Input de búsqueda para encontrar personajes por nombre
- [ ] Área donde se verá el listado de personajes. Mostrando su:
  - Imagen
  - Nombre
  - Tipo de Ancestro.
- [ ] Botones/Opciones para filtrar por por Ancestro y Casa
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los personajes por orden alfabético 
- [ ] Paginado para ir buscando y mostrando los siguientes personajes.


__Ruta de detalle de personajes__


__Ruta de creación de actividades__


#### Base de datos
