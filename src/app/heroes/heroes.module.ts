import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [  //Declaraciones: Que componentes, pipes tiene este modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ // KinderSorpresa:  que cosas quiero que sean visible o publicas fuera es te modulo;
        ListadoComponent
    ],
    imports: [ // Van solo modulos.
        CommonModule //Ofrece directivas como *ngFor o *ngIf
    ]
})
export class HeroesModule{

}