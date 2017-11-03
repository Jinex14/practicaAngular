export abstract class Animal {

    
    constructor(protected _nombre:string) {
    }

    set nombre(nombre:string){
        this._nombre=nombre;
    }
    get nombre():string{
        return this._nombre;
    }

   abstract desplazar():void;
}