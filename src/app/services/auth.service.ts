import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
// import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = "";
  // constructor(public afAuth: AngularFireAuth) { }
  constructor() { }

  // doRegister(){
  //   return new Promise<any>((resolve, reject) => {
  //     firebase.auth().createUserWithEmailAndPassword('jgarnica', 'XPTecsup2')
  //     .then(res => {
  //       resolve(res);
  //     }, err => reject(err));
  //   });
  // }

  login(user){
    // user.email user.password
    return new Promise((resolve,reject)=>{
      if(user.email == "jgarnica" && user.password == "jgarnica"){
        this.token = "jgarnica|jgarnica";
        localStorage.setItem("token",this.token);
        resolve("Exito");
      }else{
        reject("Error");
      }
    });
  }
   
  isLogged(){
    let token = localStorage.getItem("token");
    return token == 'jgarnica|jgarnica' ? true : false;
  }

}
