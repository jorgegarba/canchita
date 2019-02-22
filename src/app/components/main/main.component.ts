import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {
  items:Observable<any[]>;
  constructor(private db:AngularFirestore) {
    this.items = db.collection('canchitas').valueChanges();
  }

  ngOnInit() {
    
  }

}
