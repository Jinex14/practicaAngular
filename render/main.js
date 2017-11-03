"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gato_1 = require("./modelo/animal/gato");
var gato;
gato = new gato_1.Gato('Misifu', 'Siames');
console.log('gato: ', gato);
gato.desplazar();
//Cambia el tipo del dato
gato.ronronear();
//cambiar los valores con set
gato.nombre = 'Tom';
//debe cambiar el nombre
gato.ronronear();
//ver nombre get
console.log('gato.nombre: ', gato.nombre);
