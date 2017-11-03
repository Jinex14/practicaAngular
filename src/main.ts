import { Animal } from "./modelo/animal/animal";
import { Gato } from "./modelo/animal/gato";
let gato:Animal;
gato=new Gato('Misifu','Siames');
console.log('gato: ',gato);
gato.desplazar();
//Cambia el tipo del dato
(gato as Gato).ronronear();