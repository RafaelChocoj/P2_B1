import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../services/catalogos.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preguntas-list',
  templateUrl: './preguntas-list.component.html',
  styleUrls: ['./preguntas-list.component.css']
})


export class PreguntasListComponent implements OnInit {


  displayedColumns: string[] = ['idPregunta', 'Pregunta', 'Nombre','actionsboton'];
  dataSource = new MatTableDataSource();
  constructor(private catService: CatalogosService, private router: Router) { }

  preg_list: any = [];
  ngOnInit(): void {

    this.getPreguntas();
  }




  getPreguntas() { 

    this.catService.getPreguntas()
      .subscribe(
        res => {
          this.preg_list = res;
          this.dataSource.data = this.preg_list;
          //console.log(this.dataSource.data)
        },
        err => console.error(err.error)
      );
  }

  addPreg() {
    this.router.navigate(['/pregunta/add']);
  }

  eliminarPregunta(idpre: number) {
    //alert(idcate)

    var mensaje = confirm("¿Desea Eliminar Pregunta "+idpre +" con sus Respuestas?");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
    } else {
      return;
    }

    this.catService.eliminarPregunta(idpre)
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
