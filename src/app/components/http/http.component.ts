import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  observer:any;
  constructor(private _sHttpService:HttpService) {

  }

  ngOnInit() {
    this.observer = this._sHttpService.getUsers().subscribe((respuesta)=>{
      console.log(respuesta);
    },(error)=>{
      console.log(error);
    });
  }

}
