# Ejercicio Docker

Este ejercicio se trata de dockerizar un backend en spring con un frontend de angular
Al clonarte el proyecto, deberás realizar un npm i y un ng build dentro del proyecto de angular
antes hacer el docker-compose up.

O por el contrario, puedes modificar el Dockerfile del proyecto de Angular para directamente realizar
el docker compose sin tener que ejecutar ningun comando de npm

Para ello deberás editar el Dockerfile de la siguiente manera:

FROM node:latest as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build

FROM nginx:latest

COPY --from=build /usr/local/app/dist/sample-angular-app /usr/share/nginx/html