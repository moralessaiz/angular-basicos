import { Component /*OnInit*/ } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  constructor() { 
    console.log('constructor');
  }

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor', 'Capitan America'];
  heroeBorrado: string = '';
  /* ngOnInit(): void {  //Se utiliza para inicializar cosas
    console.log('ngOnInit');
  } */
  borrarHeroe() {
    console.log('borrando...')
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
