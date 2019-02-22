import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HttpComponent} from './components/http/http.component';
import {MainComponent} from './components/main/main.component';
import {ErrorComponent} from './components/error/error.component';
import { FormsComponent } from './components/forms/forms.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { FirebaseComponent } from './components/firebase/firebase.component';

const routes: Routes = [
  {
    path: 'http',
    component: HttpComponent
  },
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'firebase',
    component: FirebaseComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
