let numeroEstudiantes:number =40;
numeroEstudiantes = 30;
console.log('numeroEstudiantes',numeroEstudiantes);

let cursoIniciado:boolean = true;
cursoIniciado = false;

let nombreCurso:string = "angular desde 0";
let contenidoCurso:string = `Esta es una 
                            cadena multi linea 
                            donde todo sale con saltos de
                            linea`;

console.log("nombreCurso:",nombreCurso);
console.log("contenidoCurso:",contenidoCurso);

let bienvenida:string= `Bienvenidos al curso ${nombreCurso}`;

console.log(bienvenida);

let arregloA:number[] = [1,2,3,4,5,6,7,8,9];
console.log("arregloA:",arregloA);

let arregloB:Array<string>;
arregloB=["a","b","c"];
console.log("arregloB:",arregloB);

//TypeScript enums
enum diaCurso{Martes,Viernes};
enum DiasSemana{Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo};

let primerDiaClase:diaCurso;
primerDiaClase=diaCurso.Martes;

console.log("primerDia",primerDiaClase);
console.log("primerDia(String)",diaCurso[diaCurso.Martes]);

//Variable Any
let Mivariable:any;
Mivariable=5;
Mivariable='Hola';
Mivariable=true;

//constante
const pi=3.14;
//pi=3.15; ----> esto no se puede hacer
console.log(pi);

//definir json
let persona:any={
nombre:'Jean',
curso:'Angular'
};
console.log(persona);
const personaConst:any={
    nombre:'Juan',
    curso:'AngularJS'
    };
    console.log(personaConst);
    personaConst.nombre='Eduardo';
    personaConst.curso='Angular2'
    console.log(personaConst);

//funciones
function holaMundo():string{
    return 'HolaMundo';
}

//no Retorna nada
function saludar(mensaje:string):void{
    console.log(mensaje);
}

saludar("Me gusta TypeScript");