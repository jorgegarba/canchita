import { Component, OnInit, OnDestroy} from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit, OnDestroy{
  usuarios:Array<any> = [];
  observer:any;
  constructor(private _sHttpService:HttpService) {

  }

  ngOnInit() {
    this.observer = this._sHttpService.getUsers().subscribe((respuesta)=>{
      console.log(respuesta);
      this.usuarios = respuesta.data;
    },(error)=>{
      console.log(error);
    });
  }

  crearUsuario(){
    this._sHttpService.createUser().subscribe((respuesta)=>{
      console.log(respuesta);
    },(error)=>{
      console.log(error);
    });
  }

  ngOnDestroy(){
    this.observer.unsubscribe();
  }


}
