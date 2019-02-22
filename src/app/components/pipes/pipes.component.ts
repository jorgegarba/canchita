import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre = 'Jorge Luis Garnica Blanco';
  arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  pi = Math.PI;
  igv = 0.18;
  sueldo = 8000;
  variableAsincrona = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Valor de mi variable');
    }, 1500);
  });
  hoy = new Date();
  objetojson = {
    nombre: 'Jhon',
    apellido: 'Doe',
    colores: [
      {color:'azul'},
      {color:'rojo'},
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
