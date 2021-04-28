import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../services/catalogos.service';
import { Router, ActivatedRoute } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-preguntas-edit',
  templateUrl: './preguntas-edit.component.html',
  styleUrls: ['./preguntas-edit.component.css']
})
export class PreguntasEditComponent implements OnInit {

  idpre_ac = 0
  pre_ob: any = {
    idPregunta: 0,
    Pregunta: "",
    idEncuesta: 0
  };

  Respuesta_insert= "";
  Letra_insert = "";
  encuentas: any = [];
  respu_list: any[] = [];

  displayedColumns: string[] = ['Respuesta', 'Letra', 'idcorrecta', 'actionsboton'];
  dataSource = new MatTableDataSource();
  constructor(private catalogService: CatalogosService, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;
    params.idpre

    this.idpre_ac = params.idpre
    this.getEncuesta();
    this.getRespuestas(this.idpre_ac)
    this.getMyPregunta(this.idpre_ac)
  }

  inserRespu(){ 

    if (this.Respuesta_insert != "") { 
      
      this.catalogService.inserPretEdit(this.idpre_ac, this.Respuesta_insert, this.Letra_insert)
      .subscribe(
        res => {
          //console.log(res);
          alert(res)
          
          this.Respuesta_insert = ""
          this.Letra_insert =""

          this.getRespuestas(this.idpre_ac)
          //console.log(this.front_list)

        },
        err =>  { console.error(err)
          alert(err.error)
        }
      )


    } else { 
      alert("debe de ingresar Respuesta")
    }
  }

  RespuCorrecta(font:any){

    var mensaje = confirm("¿Desea Marcar como Correcta "+ font.idRespuesta +"?");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
    } else {
      return;
    }

    this.catalogService.RespuCorrecta(font.idPregunta,  font.idRespuesta)
      .subscribe(
        res => {
          //console.log(res);
          alert(res)
          //location.reload()
          this.getRespuestas(this.idpre_ac)
        },
        err => {console.error(err)
          alert(err.error)
        }
      )


  }

  quitarCorrecta(font:any){

    var mensaje = confirm("¿Desea Quitar como Correcta "+ font.idRespuesta +"?");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
    } else {
      return;
    }

    this.catalogService.quitarCorrecta(font.idPregunta,  font.idRespuesta)
      .subscribe(
        res => {
          //console.log(res);
          alert(res)
          //location.reload()
          this.getRespuestas(this.idpre_ac)
        },
        err => {console.error(err)
          alert(err.error)
        }
      )

  }

  ActualizarRespu() { 

    this.catalogService.ActualizarRespu(this.pre_ob.Pregunta, this.pre_ob.idEncuesta, this.idpre_ac)
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

  getRespuestas(idpai_ac:number){
    this.catalogService.getRespuestas(idpai_ac)
      .subscribe(
        (res:any)=> {
        this.respu_list = res;
        this.dataSource.data = this.respu_list;
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

  
  quitarRes(font:any){

    var mensaje = confirm("¿Desea Eliminar Respuesta "+ font.idRespuesta +"?");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
    } else {
      return;
    }

    this.catalogService.quitarRespuesta(this.idpre_ac,  font.idRespuesta)
      .subscribe(
        res => {
          //console.log(res);
          alert(res)
          //location.reload()
          this.getRespuestas(this.idpre_ac)
        },
        err => {console.error(err)
          alert(err.error)
        }
      )
  }

  getMyPregunta(idpre_ac:number){
    this.catalogService.getMyPregunta(idpre_ac)
      .subscribe(
        (res:any)=> {
        this.pre_ob = res[0];
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
