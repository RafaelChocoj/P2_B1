import { Component } from '@angular/core';
//import { ReportesService } from './services/reportes.service';
import { CatalogosService } from './services/catalogos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'P2 Bases1';

  constructor(public authService: CatalogosService) {
  }
  
}
