import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../services/catalogos.service';
import { Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  respuesta: any = {
    Respuesta: "",
    Letra: ""//,
    //idPregunta: 0
  };
  respu_list: any[] = [];

  Respuesta_insert= "";
  Letra_insert = "";

  encuentas: any = [];

  Pregunta:string = "";
  idEncuesta:number = 0;

  displayedColumns: string[] = ['Respuesta', 'Letra', 'actionsboton'];
  dataSource = new MatTableDataSource();
  constructor(private catalogService: CatalogosService, private router: Router) { }

  ngOnInit(): void {
    this.getEncuesta();
  }

  quitarRes(font:any){ 
    var index = this.respu_list.indexOf(font);
    //alert(index)
    if (index > -1) {
      this.respu_list.splice(index, 1);
   }
   this.dataSource.data = this.respu_list;
    console.log(this.respu_list)
  }

  getEncuesta() {
    this.catalogService.getEncuesta()
      .subscribe(
        res => {
          this.encuentas = res;
          //console.log(res)
        },
        err => console.error(err)
      );
  }


  inserRespu(){ 

    if (this.Respuesta_insert != "") { 
      
      this.respuesta = {
        Respuesta: "",
        Letra: ""//,
        //idPregunta: 0
      }

      this.respuesta.Respuesta  = this.Respuesta_insert
      this.respuesta.Letra  = this.Letra_insert
      //this.respuesta.idPregunta  = this.fron_insert
      

      this.respu_list.push(this.respuesta);

      this.Respuesta_insert = ""
      this.Letra_insert =""

      this.dataSource.data = this.respu_list;
      //console.log(this.respu_list)
    } else { 
      alert("debe de ingresar Respuesta")
    }
  }
  savePregunta() {

        //this.router.navigate(['/misproducts']);
        /*************ini***********/
        this.catalogService.savePregunta(this.Pregunta, this.idEncuesta, this.respu_list)
        .subscribe(
          res => {
            console.log(res);
            alert(res);
            this.router.navigate(['/preguntalist']);
          },
          err => { console.error(err)
            alert(err.error)
          }
        )
        /*************fin***********/
      

    
  }

}
