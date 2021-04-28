import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PrinComponent } from "./components/prin/prin.component";
import { ReportsComponent } from "./components/reports/reports.component";
import { PaisesComponent } from "./components/paises/paises.component";
import { PaisesListComponent } from "./components/paises-list/paises-list.component";
import { PaisesEditComponent } from "./components/paises-edit/paises-edit.component";

import { PreguntasComponent } from "./components/preguntas/preguntas.component";
import { PreguntasListComponent } from "./components/preguntas-list/preguntas-list.component";
import { PreguntasEditComponent } from "./components/preguntas-edit/preguntas-edit.component";

import { InventosListComponent } from "./components/inventos-list/inventos-list.component";
import { InventosEditComponent } from "./components/inventos-edit/inventos-edit.component";


const routes: Routes = [{
  path: '',
  redirectTo: '/principal',
  pathMatch: 'full'
},
{
  path: 'principal',
  component: PrinComponent
}, 
{
  /*protegida denuncuas Admin*/
  //path: 'rep_masvendidos',
  path: 'reportes/:rep',
  component: ReportsComponent//,
  //canActivate: [AuthGuard]
}, 
{
  path: 'pais/add',
  component: PaisesComponent//,
  //canActivate: [AuthGuard, AdminGuard]
}, 
{

  path: 'pais_edit/:idpai',
  component: PaisesEditComponent//,
  //canActivate: [AuthGuard, AdminGuard]
}, 
{
  /*protegida Categorias*/
  path: 'paislist',
  component: PaisesListComponent//,
  //canActivate: [AuthGuard, AdminGuard]
}, 
{
  path: 'pregunta/add',
  component: PreguntasComponent//,
  //canActivate: [AuthGuard, AdminGuard]
}, 
{

  path: 'pregunta_edit/:idpre',
  component: PreguntasEditComponent//,
  //canActivate: [AuthGuard, AdminGuard]
}, 
{
  /*protegida Categorias*/
  path: 'preguntalist',
  component: PreguntasListComponent//,
  //canActivate: [AuthGuard, AdminGuard]
}, 
{

  path: 'invento_edit/:idinven',
  component: InventosEditComponent//,
  //canActivate: [AuthGuard, AdminGuard]
}, 
{
  /*protegida Categorias*/
  path: 'inventolist',
  component: InventosListComponent//,
  //canActivate: [AuthGuard, AdminGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
