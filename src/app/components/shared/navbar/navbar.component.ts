import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  termino = "";

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  buscar(){
    this._router.navigateByUrl('/busqueda/'+this.termino);
  }

}
