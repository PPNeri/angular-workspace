import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoComponent } from './jogo/jogo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { ChamadaService } from './jogo/chamada.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './index/auth.service';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoComponent,
    ConsultaComponent,
    IndexComponent,
    LoginComponent,
    StatusComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ChamadaService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
