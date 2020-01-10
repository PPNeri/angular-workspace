import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRouting } from './app.routes';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataService } from './services/data.service';
import { PeopleComponent } from './people/people.component';
import { LoadingComponent } from './components/loading/loading.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SpeciesComponent } from './species/species.component';
import { PlanetsComponent } from './planets/planets.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { NameComponent } from './components/name/name.component';
import { ShellComponent } from './shell/shell.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { ConsultaPlanetaComponent } from './consulta-planeta/consulta-planeta.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CategoriesComponent,
    HeaderComponent,
    FooterComponent,
    PeopleComponent,
    LoadingComponent,
    StarshipsComponent,
    VehiclesComponent,
    SpeciesComponent,
    PlanetsComponent,
    CharacteristicsComponent,
    NameComponent,
    ShellComponent,
    LoginComponent,
    ConsultaPlanetaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    DataService,
    AuthService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
