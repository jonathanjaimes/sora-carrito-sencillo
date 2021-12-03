import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent{

  constructor(private _http: HttpClient) { 
    this._http.get('https://pokeapi.co/api/v2/pokemon/')
    .subscribe( data=> {
      this.listadoPokeOrigin = data
      //this.listadoPokeNuevo = this.listadoPokeOrigin.slice(0, 6)
      console.log(this.listadoPokeOrigin.results)
    }
    )
  }

  listadoPokeOrigin:any = []
  listadoPokeNuevo:any = []
  listaPokeAgregados:any = []

}
