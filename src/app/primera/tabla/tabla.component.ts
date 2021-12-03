import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrimCompComponent } from '../prim-comp/prim-comp.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent{

  
//@Input() listaAgregados:any  

//valor:number = this.listaAgregados.length

@Input() listaAgregados2:any;
@Input() totalCantidadHijo:any;
@Input() sumaCantidad2:any;
@Input() sumaPrecio2:any;

@Output() idEliminarHijo: EventEmitter<any> = new EventEmitter();

//toma el id del objeto del componente, lo pasa por parámetro desde el html y lueg lo envía a ṕrim-comp
enviarIdEliminar (id:number) {
  this.idEliminarHijo.emit(id)
}



}
