import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './components/reports/reports.component';
import { PrinComponent } from './components/prin/prin.component';

///angular
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

/*Angular Materia*/
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//servivios
import { ReportesService} from './services/reportes.service';
import { PaisesComponent } from './components/paises/paises.component';
import { PaisesListComponent } from './components/paises-list/paises-list.component';
import { PaisesEditComponent } from './components/paises-edit/paises-edit.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { PreguntasListComponent } from './components/preguntas-list/preguntas-list.component';
import { PreguntasEditComponent } from './components/preguntas-edit/preguntas-edit.component';
import { InventosListComponent } from './components/inventos-list/inventos-list.component';
import { InventosEditComponent } from './components/inventos-edit/inventos-edit.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    PrinComponent,
    PaisesComponent,
    PaisesListComponent,
    PaisesEditComponent,
    PreguntasComponent,
    PreguntasListComponent,
    PreguntasEditComponent,
    InventosListComponent,
    InventosEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatSortModule
  ],
  providers: [
    ReportesService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
