import { Component, OnInit } from '@angular/core';
interface MenuItems{
  ruta:string;
nombre:string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles:[
    `
      li{
        cursor:pointer
      }
    `
  ]
})
export class MenuComponent implements OnInit {

  public opcionesMenu:MenuItems[]=[
    {
      ruta:'graficas/barra',
      nombre:'Barras'
    },
    {
      ruta:'graficas/barra-doble',
      nombre:'Barras Dobles'
    },
    {
      ruta:'graficas/dona',
      nombre:'Dona'
    },
    {
      ruta:'graficas/dona-http',
      nombre:'Dona Http'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
