import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../services/catalogos.service';
import { Router, ActivatedRoute } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-paises-edit',
  templateUrl: './paises-edit.component.html',
  styleUrls: ['./paises-edit.component.css']
})
export class PaisesEditComponent implements OnInit {

  pais_ob: any = {
    idPais: 0,
    pais: "",
    Capital: "",
    Poblacion: 0,
    area: 0,
    idRegion: 0
  };

  frontera: any = {
    Norte: false,
    Sur: false,
    Este: false,
    Oeste: false,
    idPaisFrontera: 0,
    idnameFrontera: ""
  };
  front_list: any[] = [];
  pais_fron: any = [];

  Norte_insert =false
  Sur_insert =false
  Este_insert =false
  Oeste_insert =false
  fron_insert =0

  /*pais:string = "";
  Capital:string = "";
  Poblacion:number = 0;
  Area:number= 0;
  idRegion:number = 0;*/

  regiones: any = [];
  idpai_ac = 0

  displayedColumns: string[] = ['idPaisFrontera', 'Norte', 'Sur', 'Este', 'Oeste', 'actionsboton'];
  dataSource = new MatTableDataSource();
  constructor(private catalogService: CatalogosService, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    params.idpai

    this.idpai_ac = params.idpai
    this.getRegiones();
    this.getPaises();
    this.getMyPais(this.idpai_ac)
    this.getFronteras(this.idpai_ac)

  }

  getMyPais(idpai_ac:number){
    this.catalogService.getMyPais(idpai_ac)
      .subscribe(
        (res:any)=> {
        this.pais_ob = res[0];
        //this.modificar = true
        //console.log(this.product)
        },
        err => {
          console.error(err)
          //this.modificar = false
          alert(err.error);
        }
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

  getFronteras(idpai_ac:number){
    this.catalogService.getFronteras(idpai_ac)
      .subscribe(
        (res:any)=> {
        this.front_list = res;
        this.dataSource.data = this.front_list;
        //this.modificar = true
        //console.log(this.product)
        },
        err => {
          console.error(err)
          //this.modificar = false
          alert(err.error);
        }
      );
  }

  inserFront(){ 
    //alert(this.Norte_insert);
    //alert(this.Sur_insert);
    var nort = '';
    var sur = '';
    var este = '';
    var oeste = '';
    if (this.Norte_insert){
      nort = 'X'
    }
    if (this.Sur_insert){
      sur = 'X'
    }
    if (this.Este_insert){
      este = 'X'
    }
    if (this.Oeste_insert){
      oeste = 'X'
    }

    if (this.fron_insert != 0) { 
      

      this.catalogService.inserFrontEdit(this.idpai_ac, this.fron_insert, nort, sur, este, oeste)
      .subscribe(
        res => {
          //console.log(res);
          alert(res)
          
          this.fron_insert = 0
          this.Norte_insert =false
          this.Sur_insert =false
          this.Este_insert =false
          this.Oeste_insert =false

          this.getFronteras(this.idpai_ac)
          this.dataSource.data = this.front_list;
          //console.log(this.front_list)

        },
        err =>  { console.error(err)
          alert(err.error)
        }
      )


    } else { 
      alert("debe de ingresar pais Frontera")
    }
  }

  quitarFrontera(font:any){ 

    var mensaje = confirm("¿Desea Eliminar Frontera "+ font.idPaisFrontera +"?");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
    } else {
      return;
    }

    this.catalogService.quitarFrontera(this.idpai_ac,  font.idPaisFrontera)
      .subscribe(
        res => {
          //console.log(res);
          alert(res)
          //location.reload()
          this.getFronteras(this.idpai_ac)
          this.dataSource.data = this.front_list;
        },
        err => {console.error(err)
          alert(err.error)
        }
      )

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

  ActualizarPais() { 

    this.catalogService.ActualizarPais(this.pais_ob.pais, this.pais_ob.Capital, this.pais_ob.Poblacion,
      this.pais_ob.area, this.pais_ob.idRegion,
      this.pais_ob.idPais)
  .subscribe(
    res => {
      console.log(res);
      alert(res);
      location.reload();
    },
    err => { console.error(err)
      alert(err.Error)
    }
  )
  }

}
