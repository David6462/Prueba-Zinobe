# PruebaZinobe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

Las instrucciones de la prueba se encuentran más abajo.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Objetivo
Construir una plataforma para solicitar préstamos, que apruebe o rechace las solicitudes del
cliente según los siguientes criterios.
## Objetivos específicos
● Crear un componente de préstamos que le permita al usuario elegir el monto a solicitar
entre un valor mínimo y un valor máximo (ej. vlr. min. 10.000 - vlr. máx. 100.000).

● Desarrollar un sistema que permita crear usuarios con los siguientes parámetros:
- Nombre
- Correo
- Cédula
- Debe usar el componente de préstamos para seleccionar el valor del crédito, el cual
  incluye:
  - Valor Solicitado
  - Fecha pagar (opcional)

● Al momento de realizar la solicitud, el sistema debe validar aleatoriamente si el crédito
    fue aprobado o no.

● Crear una key en las variables de entorno del proyecto donde se especifique el capital
    base del banco.

● Crear un componente que siempre sea visible con el monto base del banco y este debe
cambiar de acuerdo a los préstamos y pagos que se realicen. Ejemplo (monto base:
$1.000.000 y el banco realiza un préstamo por $100.000, el nuevo monto del banco
debería mostrarse como $900.000).

● El sistema debe mostrar una lista de las solicitudes aprobadas y que están pendientes
por pagar. (debe mostrar monto, nombre, y botón de pago). Del mismo modo debe
permitir pagar los créditos aprobados.

● Recuerda que los datos de la aplicaciones los puedes guardar localmente en un servicio
para el consumo de estos. Puedes usar la siguiente librería:
https://github.com/typicode/json-server o usar Firebase.
Criterios de evaluación

● Usar Angular como framework de desarrollo

● Implementar buenas prácticas de desarrollo

● Utilizar interfaces y/o modelos

● Reutilización de componentes
#Plus
● Utilizar lazyload en las rutas

● Reutilizar la mayor cantidad de componentes

● Que el sitio sea responsive

● Usar Angular Material

## Descargar:

```
https://github.com/David6462/Prueba-Zinobe.git
```

```
cd Prueba-Zinobe
```


## Correr el proyecto

```
npm install 
```
Ejecutar la siguiente línea de código para el servidor.
```
npm install -g json-server 
```
Si no tiene instalado Angular cli en su computador, ejecutar la siguiente línea.
```
npm install -g angular-cli
```
Para ejecutar el servidor JSON ejecutar la siguiente línea
```
json-server --watch db.json
```
Para ejecutar el proyecto ingresar la siguiente línea
```
ng serve
```
Luego ir al navegador e ingresar en la URL lo siguiente
```
http://localhost:4200/
```
