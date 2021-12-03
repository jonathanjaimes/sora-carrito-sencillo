import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonesComponent } from './pokemones/pokemones.component';



@NgModule({
  declarations: [
    PokemonesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonesComponent
  ]
})
export class PokeModule { }
