import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimCompComponent } from './prim-comp/prim-comp.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TablaComponent } from './tabla/tabla.component';
import { FormsModule } from '@angular/forms';
import { BarraNavComponent } from './barra-nav/barra-nav.component';



@NgModule({
  declarations: [
    PrimCompComponent,
    TarjetaComponent,
    TablaComponent,
    BarraNavComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PrimCompComponent,
    BarraNavComponent
  ]
})
export class PrimeraModule { }
