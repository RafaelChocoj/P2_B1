import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../services/catalogos.service';
import { Router, ActivatedRoute } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-inventos-edit',
  templateUrl: './inventos-edit.component.html',
  styleUrls: ['./inventos-edit.component.css']
})
export class InventosEditComponent implements OnInit {

  idinv_ac = 0

  inven_ob: any = {
    idInvento: 0,
    Nombre: "",
    AnioInvento: 0,
    idPais: 0
  };

  pais_lis: any = [];
  invtores_list: any[] = [];
  
  inventores: any = [];

  inventor_insert =0

  displayedColumns: string[] = ['idInventor', 'actionsboton'];
  dataSource = new MatTableDataSource();
  constructor(private catalogService: CatalogosService, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    params.idinven

    this.idinv_ac = params.idinven
    this.getPaises();
    this.getLisInventores();
    this.getMyInvento(this.idinv_ac)
    this.getInventores(this.idinv_ac)
    
    
  }

  ActualizarInventor() { 

    this.catalogService.ActualizarInventor(this.inven_ob.Nombre, this.inven_ob.AnioInvento, this.idinv_ac)
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

  inserInventor(){ 
    if (this.inventor_insert != 0) { 
      

      this.catalogService.inserInventor(this.idinv_ac, this.inventor_insert)
      .subscribe(
        res => {
          //console.log(res);
          alert(res)
          
          this.inventor_insert = 0

          this.getInventores(this.idinv_ac)
          //console.log(this.front_list)

        },
        err =>  { console.error(err)
          alert(err.error)
        }
      )


    } else { 
      alert("debe de ingresar Inventor")
    }
  }

  getLisInventores() { 
    this.catalogService.getLisInventores()
      .subscribe(
        res => {
          this.inventores = res;
        },
        err => console.error(err)
      );
  }

  quitarInventor(font:any){ 

    var mensaje = confirm("¿Desea Eliminar Inventor "+ font.idInventor +"?");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
    } else {
      return;
    }

    this.catalogService.quitarInventor(this.idinv_ac,  font.idInventor)
      .subscribe(
        res => {
          //console.log(res);
          alert(res)
          //location.reload()
          this.getInventores(this.idinv_ac)
  
        },
        err => {console.error(err)
          alert(err.error)
        }
      )

  }

  getInventores(idinv_ac:number){
    this.catalogService.getInventores(idinv_ac)
      .subscribe(
        (res:any)=> {
        this.invtores_list = res;
        this.dataSource.data = this.invtores_list;
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
          this.pais_lis = res;
        },
        err => console.error(err)
      );
  }

  getMyInvento(idinv_ac:number){
    this.catalogService.getMyInvento(idinv_ac)
      .subscribe(
        (res:any)=> {
        this.inven_ob = res[0];
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

}
