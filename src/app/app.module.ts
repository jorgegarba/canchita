import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpComponent } from './components/http/http.component';
import { MainComponent } from './components/main/main.component';
import { ErrorComponent } from './components/error/error.component';

// HTTP
import { HttpClientModule } from '@angular/common/http';
import { CardUsuarioComponent } from './components/card-usuario/card-usuario.component';
import { FormsComponent } from './components/forms/forms.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { FirestoreSettingsToken } from '@angular/fire/firestore';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HttpComponent,
    MainComponent,
    ErrorComponent,
    CardUsuarioComponent,
    FormsComponent,
    PipesComponent,
    CapitalizarPipe,
    FirebaseComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
