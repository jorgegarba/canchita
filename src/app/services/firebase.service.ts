import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  db:AngularFirestoreCollection;
  constructor(private _db:AngularFirestore) {
    this.db = _db.collection('canchitas');
  }
  getCanchas():Observable<any[]>{
    // valueChanges, trae la data interna del documento unicamente
    // return this.db.valueChanges();
    return this.db.snapshotChanges();
  }
  crearCancha(cancha:any):Promise<any>{
    // en caso se desee guardar el id previamente
    // const id = this._db.createId();
    // this.db.doc(id).set(cancha);
    return this.db.add(cancha);
  }
  updateCancha(cancha:any):Promise<any>{
    //set reemplaza los valores antiguos por los nuevos enviados
    //update actualiza solo los valores enviados
    let canchaFinal = {
      nombre:cancha.nombre,
      direccion:cancha.direccion
    }
    return this.db.doc(cancha.id).update(canchaFinal);
  }
  deleteCancha(cancha:any):Promise<any>{
    return this.db.doc(cancha.id).delete();
  }
}
