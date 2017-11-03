"use strict";
var numeroEstudiantes = 40;
numeroEstudiantes = 30;
console.log('numeroEstudiantes', numeroEstudiantes);
var cursoIniciado = true;
cursoIniciado = false;
var nombreCurso = "angular desde 0";
var contenidoCurso = "Esta es una \n                            cadena multi linea \n                            donde todo sale con saltos de\n                            linea";
console.log("nombreCurso:", nombreCurso);
console.log("contenidoCurso:", contenidoCurso);
var bienvenida = "Bienvenidos al curso " + nombreCurso;
console.log(bienvenida);
var arregloA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("arregloA:", arregloA);
var arregloB;
arregloB = ["a", "b", "c"];
console.log("arregloB:", arregloB);
//TypeScript enums
var diaCurso;
(function (diaCurso) {
    diaCurso[diaCurso["Martes"] = 0] = "Martes";
    diaCurso[diaCurso["Viernes"] = 1] = "Viernes";
})(diaCurso || (diaCurso = {}));
;
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Lunes"] = 0] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 1] = "Martes";
    DiasSemana[DiasSemana["Miercoles"] = 2] = "Miercoles";
    DiasSemana[DiasSemana["Jueves"] = 3] = "Jueves";
    DiasSemana[DiasSemana["Viernes"] = 4] = "Viernes";
    DiasSemana[DiasSemana["Sabado"] = 5] = "Sabado";
    DiasSemana[DiasSemana["Domingo"] = 6] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
;
var primerDiaClase;
primerDiaClase = diaCurso.Martes;
console.log("primerDia", primerDiaClase);
console.log("primerDia(String)", diaCurso[diaCurso.Martes]);
//Variable Any
var Mivariable;
Mivariable = 5;
Mivariable = 'Hola';
Mivariable = true;
//constante
var pi = 3.14;
//pi=3.15; ----> esto no se puede hacer
console.log(pi);
//definir json
var persona = {
    nombre: 'Jean',
    curso: 'Angular'
};
console.log(persona);
var personaConst = {
    nombre: 'Juan',
    curso: 'AngularJS'
};
console.log(personaConst);
personaConst.nombre = 'Eduardo';
personaConst.curso = 'Angular2';
console.log(personaConst);
//funciones
function holaMundo() {
    return 'HolaMundo';
}
//no Retorna nada
function saludar(mensaje) {
    console.log(mensaje);
}
saludar("Me gusta TypeScript");
