import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: []
})
export class FormsComponent implements OnInit {

  usuario:any ={
    nombre:'',
    apellido:'',
    email:''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.usuario);
  }

}
