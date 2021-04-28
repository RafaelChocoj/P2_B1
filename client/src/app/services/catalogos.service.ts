import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {

  //private URL = 'http://localhost:3000';
  private URL = 'http://104.198.41.90:3000';

  //////////private URL = 'http://192.168.0.100:3000';
  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  getPaises() {
    const url = this.URL + '/cat/getPaises';
    return this.http.get(url);
  }

  getLisInventores() {
    const url = this.URL + '/cat/getInventores';
    return this.http.get(url);
  }

  getInventos() {
    const url = this.URL + '/cat/getInventos';
    return this.http.get(url);
  }

  getPreguntas() {
    const url = this.URL + '/cat/getPreguntas';
    return this.http.get(url);
  }

  getMyPais(idpai:number) {
    const url = this.URL + '/cat/editPais/'+idpai;
    return this.http.get(url);
  }

  getMyPregunta(idpre:number) {
    const url = this.URL + '/cat/editPreg/'+idpre;
    return this.http.get(url);
  }

  getMyInvento(idinv:number) {
    const url = this.URL + '/cat/editInven/'+idinv;
    return this.http.get(url);
  }

  getInventores(idinv:number) {
    const url = this.URL + '/cat/egInventores/'+idinv;
    return this.http.get(url);
  }

  getFronteras(idpai:number) {
    const url = this.URL + '/cat/editFron/'+idpai;
    return this.http.get(url);
  }

  getRespuestas(idpre:number) {
    const url = this.URL + '/cat/editRespu/'+idpre;
    return this.http.get(url);
  }

  quitarFrontera(idPais:number, idPaisFrontera:number) {
    var url = this.URL + '/cat/FrontDelete'
    return this.http.post(
      url,
      {
        "idPais": idPais,
        "idPaisFrontera": idPaisFrontera
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }

  quitarInventor(idInvento:number, idInventor:number) {
    var url = this.URL + '/cat/InventadosDelete'
    return this.http.post(
      url,
      {
        "idInvento": idInvento,
        "idInventor": idInventor
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }

  quitarRespuesta(idPregunta:number, idRespuesta:number) {
    var url = this.URL + '/cat/RespuDelete'
    return this.http.post(
      url,
      {
        "idPregunta": idPregunta,
        "idRespuesta": idRespuesta
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }



  getRegiones() {
    const url = this.URL + '/cat/getRegiones';
    return this.http.get(url);
  }

  getEncuesta() {
    const url = this.URL + '/cat/getEncuesta';
    return this.http.get(url);
  }

  eliminarPais(idpai: number) {
    const url = this.URL + '/cat/delPais/' + idpai;
    return this.http.delete(url).pipe(map(data => data));
  }

  eliminarPregunta(idpre: number) {
    const url = this.URL + '/cat/delPregunta/' + idpre;
    return this.http.delete(url).pipe(map(data => data));
  }

  

  savePais(pais:string, Capital:string, Poblacion:number, Area:number, idRegion:number, front_list:any) {

    var url = this.URL + '/cat/addPais'
    return this.http.post(
      url,
      {
        "pais": pais,
        "Capital": Capital,
        "Poblacion": Poblacion,
        "Area": Area,
        "idRegion": idRegion,
        "front_list": front_list
        
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }

  savePregunta(Pregunta:string, idEncuesta:number, respu_list:any) {

    var url = this.URL + '/cat/addPregunta'
    return this.http.post(
      url,
      {
        "Pregunta": Pregunta,
        "idEncuesta": idEncuesta,
        "respu_list": respu_list
        
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }

  inserFrontEdit (idPais:number, idPaisFrontera:number, Norte:string, Sur:string, Este:string, Oeste:string) {
    var url = this.URL + '/cat/addFronEdit'
    return this.http.post(
      url,
      {
        "idPais": idPais,
        "idPaisFrontera": idPaisFrontera,
        "Norte": Norte,
        "Sur": Sur,
        "Este": Este,
        "Oeste": Oeste
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }

  inserInventor (idInvento:number, idInventor:number) {
    var url = this.URL + '/cat/addInventados'
    return this.http.post(
      url,
      {
        "idInvento": idInvento,
        "idInventor": idInventor
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }

  inserPretEdit (idPregunta:number, Respuesta:string, Letra:string) {
    var url = this.URL + '/cat/addPregunEdit'
    return this.http.post(
      url,
      {
        "idPregunta": idPregunta,
        "Respuesta": Respuesta,
        "Letra": Letra
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }

  RespuCorrecta (idPregunta:number, idRespuesta:number) {
    var url = this.URL + '/cat/addcorrecta'
    return this.http.post(
      url,
      {
        "idPregunta": idPregunta,
        "idRespuesta": idRespuesta
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }

  quitarCorrecta (idPregunta:number, idRespuesta:number) {
    var url = this.URL + '/cat/quitcorrecta'
    return this.http.post(
      url,
      {
        "idPregunta": idPregunta,
        "idRespuesta": idRespuesta
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }

  

  ActualizarPais(pais:string, Capital:string, Poblacion:number, Area:number, idRegion:number, idPais:number) {

    var url = this.URL + '/cat/upPais'
    return this.http.put(
      url,
      {
        "pais": pais,
        "Capital": Capital,
        "Poblacion": Poblacion,
        "Area": Area,
        "idRegion": idRegion,
        "idPais": idPais
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }

  ActualizarRespu(Pregunta:string, idEncuesta:number, idPregunta:number) {

    var url = this.URL + '/cat/upPregunta'
    return this.http.put(
      url,
      {
        "Pregunta": Pregunta,
        "idEncuesta": idEncuesta,
        "idPregunta": idPregunta
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }

  ActualizarInventor(Nombre:string, AnioInvento:number, idInvento:number) {

    var url = this.URL + '/cat/upInvento'
    return this.http.put(
      url,
      {
        "Nombre": Nombre,
        "AnioInvento": AnioInvento,
        "idInvento": idInvento
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }

}
