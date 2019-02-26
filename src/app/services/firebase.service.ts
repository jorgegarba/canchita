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
    return this.db.valueChanges();
  }
  crearCancha(cancha:any):Promise<any>{
    // en caso se desee guardar el id previamente
    // const id = this._db.createId();
    // this.db.doc(id).set(cancha);
    return this.db.add(cancha);
  }
}
