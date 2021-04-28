import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../services/catalogos.service';
import { Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  /*product: any = {
    idProducto: 0,
    nombre: "",
    descripcion: "",
    precio: 0.00,
    status: "",
    idCategoria: 0,
    idUserPropietario: "",
    foto: ""
  };*/

  frontera: any = {
    Norte: false,
    Sur: false,
    Este: false,
    Oeste: false,
    idPaisFrontera: 0,
    idnameFrontera: ""
  };
  front_list: any[] = [];

  Norte_insert =false
  Sur_insert =false
  Este_insert =false
  Oeste_insert =false
  fron_insert =0
  idnameFrontera_insert =""

  pais:string = "";
  Capital:string = "";
  Poblacion:number = 0;
  Area:number= 0;
  idRegion:number = 0;

  regiones: any = [];
  pais_fron: any = [];

  tipo = 0

  displayedColumns: string[] = ['idPaisFrontera', 'Norte', 'Sur', 'Este', 'Oeste', 'actionsboton'];
  dataSource = new MatTableDataSource();
  constructor(private catalogService: CatalogosService, private router: Router) { }

  ngOnInit(): void {
    this.getRegiones();
    this.getPaises();
  }

  getRegiones() {
    this.catalogService.getRegiones()
      .subscribe(
        res => {
          this.regiones = res;
          //console.log(res)
        },
        err => console.error(err)
      );
  }

  getPaises() { 
    //importando categorias
    this.catalogService.getPaises()
      .subscribe(
        res => {
          this.pais_fron = res;
        },
        err => console.error(err)
      );
  }

  inserFront(){ 

    if (this.fron_insert != 0) { 
      
      this.frontera = {
        Norte: false,
        Sur: false,
        Este: false,
        Oeste: false,
        idPaisFrontera: 0,
        idnameFrontera: ""
      }

      this.frontera.Norte  = this.Norte_insert
      this.frontera.Sur  = this.Sur_insert
      this.frontera.Este  = this.Este_insert
      this.frontera.Oeste  = this.Oeste_insert
      this.frontera.idPaisFrontera  = this.fron_insert
      this.frontera.idnameFrontera  = this.idnameFrontera_insert
      

      this.front_list.push(this.frontera);

      this.fron_insert = 0
      this.Norte_insert =false
      this.Sur_insert =false
      this.Este_insert =false
      this.Oeste_insert =false

      this.dataSource.data = this.front_list;
      console.log(this.front_list)
    } else { 
      alert("debe de ingresar pais Frontera")
    }
  }

  quitarFron(font:any){ 
    var index = this.front_list.indexOf(font);
    //alert(index)
    if (index > -1) {
      this.front_list.splice(index, 1);
   }
   this.dataSource.data = this.front_list;
    console.log(this.front_list)
  }

  savePais() {
    //console.log(this.product)

        //this.router.navigate(['/misproducts']);
        /*************ini***********/
        this.catalogService.savePais(this.pais, this.Capital, this.Poblacion, this.Area, this.idRegion, this.front_list)
        .subscribe(
          res => {
            console.log(res);
            alert(res);
            this.router.navigate(['/paislist']);
          },
          err => { console.error(err)
            alert(err.Error)
          }
        )
        /*************fin***********/
      

    
  }

}
