import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FotografiaComponent } from './components/fotografia/fotografia.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { DesarrolloComponent } from './components/desarrollo/desarrollo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fotografia', component: FotografiaComponent },
  { path: 'desarrollo', component: DesarrolloComponent },
  { path: 'contenido', component: ContenidoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
