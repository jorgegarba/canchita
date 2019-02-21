import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _sHttpClient:HttpClient) { }

  // Para consumir una API externa
  // se hace uso del servicio HHTP CLIENT

  getUsers():Observable<any>{
    let url = "https://reqres.in/api/users?page=2";
    return this._sHttpClient.get(url);
  }

  createUser():Observable<any>{
    let url = "https://reqres.in/api/users";
    let usuario = {
      name:"Jorge",
      job:"Profe"
    }
    let usuarioJSON = JSON.stringify(usuario);
    // creando los headers
    let misHeaders = new HttpHeaders().set('Content-Type','application/json');

    return this._sHttpClient.post(url,usuarioJSON,{headers:misHeaders});
  }

}
