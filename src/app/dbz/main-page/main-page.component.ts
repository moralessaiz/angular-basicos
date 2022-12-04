/* APUNTES
Two Way Data Bining: Tanto emite como recibe eventos
2. constructor (private dbzService: DbzService) {} --> inyección de dependencias*/

import { Component, OnInit } from '@angular/core';


import { Personaje } from '../interfaces/dbz.interfaces';

import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor () {  }
}

