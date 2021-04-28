import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../services/catalogos.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.css']
})
export class PaisesListComponent implements OnInit {

  displayedColumns: string[] = ['idPais', 'pais', 'Capital', 'Poblacion', 'area', 'nombre', 'actionsboton'];
  dataSource = new MatTableDataSource();
  constructor(private catService: CatalogosService, private router: Router) { }

  paises: pais[] = [];
  paises_list: any = [];

  ngOnInit(): void {
    this.getPaises();
  }

  getPaises() { 
    //importando categorias
    this.catService.getPaises()
      .subscribe(
        res => {
          this.paises_list = res;
          this.dataSource.data = this.paises_list;
          //console.log(this.dataSource.data)
        },
        err => console.error(err.error)
      );
  }

  addPais() {
    this.router.navigate(['/pais/add']);
  }

  eliminarPais(idpai: number, pai:string) {
    //alert(idcate)

    var mensaje = confirm("¿Desea Eliminar Pais "+pai +" con sus Fronteras?");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
    } else {
      return;
    }

    this.catService.eliminarPais(idpai)
      .subscribe(
        res => {
          //console.log(res);
          alert(res)
          location.reload()
        },
        err => {console.error(err)
          alert(err.error)
        }
      )
  }



}


export interface pais { 
  idCategoria: number;
  Nombre: string;
}