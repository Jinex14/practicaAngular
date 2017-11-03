export abstract class Animal {

    
    constructor(protected _nombre:string) {
    }

    set nombre(nombre:string){
        if(nombre.length<=3){
            console.error("El nombre es Muy corto",nombre.length);
            return;
        }
        this._nombre=nombre;
    }
    get nombre():string{
        return this._nombre;
    }

   abstract desplazar():void;
}