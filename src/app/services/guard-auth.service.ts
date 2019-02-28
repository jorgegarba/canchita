import { Injectable } from '@angular/core';
// Router => para navegar a otras paginas mediante codigo
// CanActivate => interface que retorna true o false
//                permitiendo el acceso al usuario
import {Router, CanActivate} from '@angular/router';
import {AuthService} from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class GuardAuthService implements CanActivate{

  constructor(private _sAuth:AuthService,
              private _router:Router) { }
  
  canActivate(){
    if(this._sAuth.isLogged()){
      return true;
    }else{
      this._router.navigateByUrl('/');
      return false;
    }
  }
}
