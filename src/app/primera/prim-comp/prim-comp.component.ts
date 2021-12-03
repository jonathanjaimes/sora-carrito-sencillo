import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-prim-comp',
  templateUrl: './prim-comp.component.html',
  styleUrls: ['./prim-comp.component.css']
})


export class PrimCompComponent {

  listado:any = []
  listadoNuevo:any = []
  listaAgregados:any = []

  sumaCantidad:number = 0;

  sumaPrecio:number = 0;

  objeto:any = {
    id: "s",
    titulo: "",
    cantidad: "",
    precioCantidad: ""
  }

  cantidadRecibida:number = 0

  constructor( private _http: HttpClient) 
  {
    this._http.get('https://jsonplaceholder.typicode.com/albums')
    .subscribe( data=> {
      this.listado = data
      this.listadoNuevo = this.listado.slice(0, 6)
 
    }
    )

  }

  vari:string = "";

  //recibe la cantidad enviada desde tarjeta
  recibirCantidadHijo(event:number) {
    //console.log(event)
    this.cantidadRecibida = event;
    //console.log(this.cantidadRecibida);
  }

 //Recibe al objeto del componente actual desde tarjeta
  recibirDatos(event:any) {

    //Guardará los datos traidos desde el objeto de tarjeta en un nuevo objeto, luego lo agregará a la lista y sumará la cantidad de ese objeto a sumaCantidad, todo ello si se cumple la condición de this.cantidadRecibida != 0
    if (this.cantidadRecibida != 0){
      this.objeto = {
        id: event.id,
        titulo: event.title,
        cantidad: this.cantidadRecibida,
        precio: event.userId,
        precioCantidad: event.userId * this.cantidadRecibida
  
      }
  
      this.listaAgregados.push(this.objeto)
  
      this.sumaCantidad += this.objeto.cantidad;
      
      this.sumaPrecio += this.objeto.precioCantidad
      
      //console.log(this.listaAgregados);
      //this.vari = event;
      //console.log(this.objeto.cantidad);
      //console.log(this.sumaCantidad)
      //console.log(this.sumaPrecio)
      console.log(this.objeto.precioCantidad)
    }
  }
    

  //Recibe el id desde tabla, busca el índice del objeto con ese id en listaAgregados y luego lo elimina de la lista
  recibirIdEliminar (event:any) {
    //console.log(event)
    
    let index = this.listaAgregados.findIndex((el:any) => el.id == event)
    this.sumaCantidad -= this.listaAgregados[index].cantidad;

    this.sumaPrecio -= this.listaAgregados[index].precioCantidad;

    console.log(this.sumaCantidad)
    
    //Elimina de la lista al elemento
    index !== -1 && this.listaAgregados.splice( index, 1 );
    
    //console.log(index)
  }



/*   contarCantidad () {
    this.listaAgregados.forEach((element:any) => {
      this.cantidadTotal = this.cantidadTotal + element.cantidad;
      
    });
    console.log(this.cantidadTotal)
  } */
  
}