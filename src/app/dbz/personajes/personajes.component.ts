/* 
1. : Personaje[] --> quiere decir que es del tipo Personaje, importado del archivo de interfaces dbz.interfaces.ts */

import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input() personajes: Personaje[] = []; //@Input() --> Decimos a ng, estos personajes van a venir del componente padre.

  get personajes() {
    return this.dbzService.personajes;
  }
  
  constructor (private dbzService:DbzService) {}
}