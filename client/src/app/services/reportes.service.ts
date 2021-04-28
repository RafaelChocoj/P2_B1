import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  //private URL = 'http://localhost:3000';
  private URL = 'http://104.198.41.90:3000';

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })


  getRep1() {
    const url = this.URL + '/rep/r1';
    return this.http.get(url);
  }

  getRep2() {
    const url = this.URL + '/rep/r2';
    return this.http.get(url);
  }

  getRep3() {
    const url = this.URL + '/rep/r3';
    return this.http.get(url);
  }
  getRep4() {
    const url = this.URL + '/rep/r4';
    return this.http.get(url);
  }
  getRep5() {
    const url = this.URL + '/rep/r5';
    return this.http.get(url);
  }

  getRep6() {
    const url = this.URL + '/rep/r6';
    return this.http.get(url);
  }

  getRep7() {
    const url = this.URL + '/rep/r7';
    return this.http.get(url);
  }

  getRep8() {
    const url = this.URL + '/rep/r8';
    return this.http.get(url);
  }
  getRep9() {
    const url = this.URL + '/rep/r9';
    return this.http.get(url);
  }
  getRep10() {
    const url = this.URL + '/rep/r10';
    return this.http.get(url);
  }

  getRep11() {
    const url = this.URL + '/rep/r11';
    return this.http.get(url);
  }

  getRep12() {
    const url = this.URL + '/rep/r12';
    return this.http.get(url);
  }
  getRep13() {
    const url = this.URL + '/rep/r13';
    return this.http.get(url);
  }
  getRep14() {
    const url = this.URL + '/rep/r14';
    return this.http.get(url);
  }

  getRep15() {
    const url = this.URL + '/rep/r15';
    return this.http.get(url);
  }
  getRep16() {
    const url = this.URL + '/rep/r16';
    return this.http.get(url);
  }
  getRep17() {
    const url = this.URL + '/rep/r17';
    return this.http.get(url);
  }
  getRep18() {
    const url = this.URL + '/rep/r18';
    return this.http.get(url);
  }
  getRep19() {
    const url = this.URL + '/rep/r19';
    return this.http.get(url);
  }
  getRep20() {
    const url = this.URL + '/rep/r20';
    return this.http.get(url);
  }

}
