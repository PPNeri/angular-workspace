import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaComponent } from './consulta/consulta.component';
import { JogoComponent } from './jogo/jogo.component';
import { IndexComponent } from './index/index.component';
import { StatusComponent } from './status/status.component';


const routes: Routes = [
  { path: 'jogo', component: JogoComponent },
  { path: 'consulta', component: ConsultaComponent },
  { path: 'status', component: StatusComponent },
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
