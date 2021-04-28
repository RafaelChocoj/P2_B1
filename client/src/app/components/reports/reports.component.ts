import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';


import {MatSort} from '@angular/material/sort';
import {ViewChild} from '@angular/core';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  rep_ac = "";
  categorias: any[] = [];
  reportes1: any = [];
  reportes2: repo2[] =[];
  report2: any = [];

  reportes3: any = [];
  reportes4: any = [];
  reportes5: any = [];
  reportes6: any = [];
  reportes7: any = [];
  reportes8: any = [];
  reportes9: any = [];
  reportes10: any = [];

  reportes11: any = [];
  reportes12: any = [];
  reportes13: any = [];
  reportes14: any = [];
  reportes15: any = [];
  reportes16: any = [];
  reportes17: any = [];
  reportes18: any = [];
  reportes19: any = [];
  reportes20: any = [];

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource();
  constructor(private repService: ReportesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;
    this.rep_ac = params.rep

    if(this.rep_ac == "rep1"){
      this.displayedColumns = ['idProfesional', 'Nombre', 'cant_inven'];
      this.getRep1();

    } else if(this.rep_ac == "rep2"){
      this.displayedColumns = ['idRegion', 'nombre', 'idPais', 'pais', 'Cant_res'];
      this.getRep2();

    } else if(this.rep_ac == "rep3"){
      this.displayedColumns = ['idPais', 'pais', 'Area'];
      this.getRep3();

    } else if(this.rep_ac == "rep4"){
      this.displayedColumns = ['ProfJefe', 'ProfSubJefe', 'ProfSubAlterno'];
      this.getRep4();

    } else if(this.rep_ac == "rep5"){
      this.displayedColumns = ['Nombre', 'idArea', 'areanombre', 'Salario', 'prom_ar'];
      this.getRep5();

    } else if(this.rep_ac == "rep6"){
      this.displayedColumns = ['idPais', 'pais', 'res_correctas'];
      this.getRep6();

    } else if(this.rep_ac == "rep7"){
      this.displayedColumns = ['idInvento', 'Nombre'];
      this.getRep7();

    } else if(this.rep_ac == "rep8"){
      this.displayedColumns = ['inicial_P', 'Suma_Areas'];
      this.getRep8();

    } else if(this.rep_ac == "rep9"){
      this.displayedColumns = ['inventor_n', 'invento_n'];
      this.getRep9();

    } else if(this.rep_ac == "rep10"){
      this.displayedColumns = ['inventor_n', 'AnioInvento'];
      this.getRep10();

    } else if(this.rep_ac == "rep11"){
      this.displayedColumns = ['idPais', 'pais', 'Area', 'fronterasn'];
      this.getRep11();

    } else if(this.rep_ac == "rep12"){
      this.displayedColumns = ['Nombre', 'tamnom'];
      this.getRep12();

    } else if(this.rep_ac == "rep13"){
      this.displayedColumns = ['idProfesional', 'Nombre', 'Salario', 'Comision', 'Total_salario', 'sal25'];
      this.getRep13();

    } else if(this.rep_ac == "rep14"){
      this.displayedColumns = ['idEncuesta', 'Nombre', 'No_Paises'];
      this.getRep14();

    } else if(this.rep_ac == "rep15"){
      this.displayedColumns = ['idPais', 'pais', 'Poblacion', 'Poblacion_Centroamer'];
      this.getRep15();

    } else if(this.rep_ac == "rep16"){
      this.displayedColumns = ['JefeGen', 'SubJefe', 'Profesional', 'depart_area'];
      this.getRep16();

    } else if(this.rep_ac == "rep17"){
      this.displayedColumns = ['idInvento', 'Nombre', 'AnioInvento'];
      this.getRep17();

    } else if(this.rep_ac == "rep18"){
      this.displayedColumns = ['idPais', 'pais', 'Poblacion', 'Area', 'JaponArea'];
      this.getRep18();

    } else if(this.rep_ac == "rep19"){
      this.displayedColumns = ['idPais', 'pais', 'idPaisFrontera', 'PaisFrontera'];
      this.getRep19();

    } else if(this.rep_ac == "rep20"){
      this.displayedColumns = ['idProfesional', 'Nombre', 'Salario', 'Comision', 'doble_comi'];
      this.getRep20();

    }


    this.dataSource.sort = this.sort;

  }

  getRep2() { 
    //importando categorias
    this.repService.getRep2()
      .subscribe(
        res => {
          this.report2 = res;
          this.dataSource.data = this.report2;
          console.log(res)
          //this.dataSource.data = this.categorias;
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }

  getRep1() { 
    this.repService.getRep1()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes1 = res;
          this.dataSource.data = this.reportes1;
          console.log(this.reportes1)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }


  getRep3() { 
    this.repService.getRep3()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes3 = res;
          this.dataSource.data = this.reportes3;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }

  getRep4() { 
    this.repService.getRep4()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes4 = res;
          this.dataSource.data = this.reportes4;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }

  getRep5() { 
    this.repService.getRep5()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes5 = res;
          this.dataSource.data = this.reportes5;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }

  getRep6() { 
    this.repService.getRep6()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes6 = res;
          this.dataSource.data = this.reportes6;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }

  getRep7() { 
    this.repService.getRep7()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes7 = res;
          this.dataSource.data = this.reportes7;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }
  getRep8() { 
    this.repService.getRep8()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes8 = res;
          this.dataSource.data = this.reportes8;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }
  getRep9() { 
    this.repService.getRep9()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes9 = res;
          this.dataSource.data = this.reportes9;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }
  getRep10() { 
    this.repService.getRep10()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes10 = res;
          this.dataSource.data = this.reportes10;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }

  getRep11() { 
    this.repService.getRep11()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes11 = res;
          this.dataSource.data = this.reportes11;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }
  getRep12() { 
    this.repService.getRep12()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes12 = res;
          this.dataSource.data = this.reportes12;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }
  getRep13() { 
    this.repService.getRep13()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes13 = res;
          this.dataSource.data = this.reportes13;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }
  getRep14() { 
    this.repService.getRep14()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes14 = res;
          this.dataSource.data = this.reportes14;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }
  getRep15() { 
    this.repService.getRep15()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes15 = res;
          this.dataSource.data = this.reportes15;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }
  getRep16() { 
    this.repService.getRep16()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes16 = res;
          this.dataSource.data = this.reportes16;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }
  getRep17() { 
    this.repService.getRep17()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes17 = res;
          this.dataSource.data = this.reportes17;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }
  getRep18() { 
    this.repService.getRep18()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes18 = res;
          this.dataSource.data = this.reportes18;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }
  getRep19() { 
    this.repService.getRep19()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes19 = res;
          this.dataSource.data = this.reportes19;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }
  getRep20() { 
    this.repService.getRep20()
      .subscribe(
        //(res: repo1[])  => {
        res  => {
          this.reportes20 = res;
          this.dataSource.data = this.reportes20;
          //console.log(this.reportes3)
          ////console.log(this.dataSource.data)
        },
        err => console.error(err)
      );
  }



}

export interface repo1 { 
  idProfesional: number;
  Nombre: string,
  cant_inven: number;
}

export interface cate { 
  idCategoria: number;
  Nombre: string;
}


export interface repo2 { 
  idRegion: number;
  nombre: string,
  idPais: number;
  pais: string;
  Cant_res: number;
}