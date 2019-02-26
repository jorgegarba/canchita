import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FirebaseService} from '../../services/firebase.service';
@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  canchitas: Observable<any[]>;
  nuevaCancha = {
    nombre:'',
    direccion:''
  }
  constructor(private _sFirebase:FirebaseService) {
  }
  ngOnInit() {
    this.canchitas = this._sFirebase.getCanchas();
  }
  crearCancha(){
    console.log(this.nuevaCancha);
    this._sFirebase.crearCancha(this.nuevaCancha)
                    .then((response)=>{
                      console.log("La canchita se creó");
                    });
  }
}
