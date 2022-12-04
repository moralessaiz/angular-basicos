/* APUNTES 
1. @Output-> es cuando el componente hijo necesita emitir un valor al padre */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzService: DbzService) {}

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  
  agregar(  ) {
    if (this.nuevo.nombre.trim().length === 0) { return; } //.trim() -> Borra espacios en blanco °°° .lenght() -> para ver los caracteres que tiene
    
    //this.onNuevoPersonaje.emit( this.nuevo )

    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
