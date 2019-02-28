import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HttpComponent} from './components/http/http.component';
import {MainComponent} from './components/main/main.component';
import {ErrorComponent} from './components/error/error.component';
import { FormsComponent } from './components/forms/forms.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { LoginComponent } from './components/login/login.component';
import { GuardAuthService } from './services/guard-auth.service';

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
    path:'busqueda/:termino',
    component: BusquedaComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'firebase',
    component: FirebaseComponent,
    canActivate: [GuardAuthService]
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
