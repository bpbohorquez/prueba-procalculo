# Prueba Procalculo

Se diseñó una aplicación web responsiva incluyendo un login de usuario, una interfaz para conectar la API PLANET, y el despliegue de un mapa con la capa suministrada.

## Tecnologías
- Para el desarrollo del front-end de la aplicación se utilizó **React**, **Redux** y **React-Bootstrap** para crear la interfaz de usuario. También se usó **leaflet** y **esri-leaflet** para desplegar el mapa e incluir la capa.
- Para el desarrollo del back-end se usó **ExpressJS** y **MongoDB**, con el fin de conectar la interfaz de usuario con la base de datos y almacenar la información de los usuarios de la aplicación.
- Se utilizó AWS (EC2 y Nginx) para desplegar la aplicación en la nube.

## Estructura:
- El front-end de la app se encuentra en la carpeta procalculo-client.
- El back-end se encuentra en la carpeta procalculo-server.

## Instrucciones de instalación:
- Para abrir la aplicación en el navegador, ingresar a la siguientet url: http://3.128.170.172/
- Si se quiere ejecutar la aplicación localmente, seguir los siguientes pasos:
  1. Clonar o descargar el repositorio.
  2. Instalar y ejecutar el servidor (back-end):
     - Ingresar a la carpeta procalculo-server `cd procalculo-server`
     - Instalar dependencias `npm install`
     - Iniciar el servidor: `npm start`
     - El servidor estará corriendo en el puerto `5000`
  3.  Instalar y ejecutar el front-end:
      - Abrir una nueva consola e ingresar a la carpeta procalculo-client `cd procalculo-client`
      - Instalar dependencias `npm install`
      - Iniciar el cliente (front-end): `npm start`
  4. La aplicación se ejecutará en el puerto `3000`. Para visualizarla dirigirse a http://localhost:3000/ 


    
