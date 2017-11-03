import { Animal } from "./modelo/animal/animal";
import { Gato } from "./modelo/animal/gato";
let gato:Animal;
gato=new Gato('Misifu','Siames');
console.log('gato: ',gato);
gato.desplazar();
//Cambia el tipo del dato
(gato as Gato).ronronear();
//cambiar los valores con set
gato.nombre='Tom';
//debe cambiar el nombre
(<Gato>gato).ronronear();
//ver nombre get
console.log('gato.nombre: ',gato.nombre);