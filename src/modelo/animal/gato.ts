import { Animal } from "./Animal";
export class Gato extends Animal{
    constructor(nombre:string,private raza:string) {
        super(nombre);
    }
    desplazar():void{
        console.log(`${this._nombre} camina sigilosamente`);
    }
    ronronear():void{
    console.log(`${this._nombre} está ronroneando`);
    }   
}