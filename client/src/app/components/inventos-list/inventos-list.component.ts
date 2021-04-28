import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../services/catalogos.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventos-list',
  templateUrl: './inventos-list.component.html',
  styleUrls: ['./inventos-list.component.css']
})
export class InventosListComponent implements OnInit {

  inventos_list: any = [];

  displayedColumns: string[] = ['idInvento', 'Nombre', 'AnioInvento', 'pais', 'actionsboton'];
  dataSource = new MatTableDataSource();
  constructor(private catService: CatalogosService, private router: Router) { }

  ngOnInit(): void {
    this.getInventos();
  }

  getInventos() { 
    this.catService.getInventos()
      .subscribe(
        res => {
          this.inventos_list = res;
          this.dataSource.data = this.inventos_list;
          //console.log(this.dataSource.data)
        },
        err => console.error(err.error)
      );
  }

}
