import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FotografiaComponent } from './components/fotografia/fotografia.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ruta1', component: FotografiaComponent },
  { path: 'ruta2', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
