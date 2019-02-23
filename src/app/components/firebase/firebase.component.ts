import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  canchitas: Observable<any[]>;
  canchitas1;
  constructor(private _db:AngularFirestore) {
    this.canchitas = _db.collection('canchitas').valueChanges();
    _db.collection('canchitas').snapshotChanges().toPromise().then((result)=>{
      console.log(result);
      
    });
  }

  ngOnInit() {
  }

}
