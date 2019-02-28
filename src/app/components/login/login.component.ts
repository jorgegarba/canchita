import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    email:'',
    password:''
  }
  constructor(private _sAuth:AuthService,
              private _router:Router) { }

  ngOnInit() {
  }

  iniciarSesion(){
    this._sAuth.login(this.usuario).then((response)=>{
      this._router.navigateByUrl('/firebase');
    }).catch((response)=>{
      console.log("Error al logearse");
    });
  }

}
