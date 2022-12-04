/* APUNTES
1. Es la clase abstracta en la cual nosotros vamos a colocar la información y metodos para interactuar con fuentes externas o modificar la información.
2. Lugar centralizado en donde vamos a tener nuestra información
3. ... -> Significa Spread, separa cada uno de los elementos del arreglo y create uno nuevo*/
import { Injectable } from "@angular/core";

import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    get personajes(): Personaje[]{
        return [...this._personajes];
    }

    
    constructor() {;
    }

    agregarPersonaje( argumento: Personaje ) {
        this._personajes.push( argumento );
    }
}