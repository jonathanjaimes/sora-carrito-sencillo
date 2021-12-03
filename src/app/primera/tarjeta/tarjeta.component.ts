import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PrimCompComponent } from '../prim-comp/prim-comp.component';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent extends PrimCompComponent {

  @Input() lista:any

  variable:string = "datos enviados";

  value: number = 0

  

  @Output() datosDelHijo: EventEmitter<any> = new EventEmitter();

  @Output() cantidadDelHijo: EventEmitter<any> = new EventEmitter();

  
 
/*   enviarDatos() {
    
  }

  enviarCantidadHijo() {
    
  } */

  

  enviarForm (){

    //Recibe la cantidad del formulario y la envía a prim-comp
    this.cantidadDelHijo.emit(this.value)

    //Envía el objeto correspondiente al componente actual
    this.datosDelHijo.emit(this.lista)
    
    this.value = 0
    //console.log(dato)
  }
 
}
