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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HttpComponent,
    MainComponent,
    ErrorComponent,
    CardUsuarioComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
