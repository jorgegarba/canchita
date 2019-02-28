import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
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
    this.canchitas = this._sFirebase.getCanchas().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })));
  }
  crearCancha(){
    console.log(this.nuevaCancha);
    this._sFirebase.crearCancha(this.nuevaCancha)
                    .then((response)=>{
                      console.log("La canchita se creó");
                    });
  }

  registrar(){
    this._sFirebase.doRegister().then(rpta=>console.log(rpta),error=>console.log(error));
  }

  iniciar(){
    this._sFirebase.iniciar().then(rpta=>console.log(rpta.credential),error=>console.log(error));
  }

  iniciarCredentials(){
    // this._sFirebase.iniciarCredentials().then(rpta=>console.log(rpta),error=>console.log(error));
    this._sFirebase.iniciarCredentials();
  }
}
