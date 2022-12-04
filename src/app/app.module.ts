import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { contadorComponent } from './contador/contador/contador.component';

// Tarea: Crear un modulo ContadorModulo
// No es necesario importar nada, no ngIf o ngFor
// Hacer Declaraciones y exportaciones

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    //contadorComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    //importar aqui
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
