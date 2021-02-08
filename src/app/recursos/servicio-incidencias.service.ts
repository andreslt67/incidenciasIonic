import { Injectable } from '@angular/core';
import { Incidencia } from './incidencia';

@Injectable({
  providedIn: 'root'
})
export class ServicioIncidenciasService {

  private _incidencias = Array<Incidencia>();

  constructor() {
    this._incidencias.unshift(new Incidencia("Incidencia 1", "Esta es la descripción de la primera incidencia", new Date(2010,11,25)));
    this._incidencias.unshift(new Incidencia("Incidencia 2", "Esta es la descripción de la segunda incidencia", new Date(2014,7,3)));
    this._incidencias.unshift(new Incidencia("Incidencia 3", "Esta es la descripción de la tercera incidencia", new Date(2003,4,13)));
    this._incidencias.unshift(new Incidencia("Incidencia 4", "Esta es la descripción de la cuarta incidencia", new Date(2019,5,30)));
   }

   get incidencias() {
     return [...this._incidencias];
   }

   getIncidencia(id: Number) {
     return {...this._incidencias.find(elemento => elemento.id === id)};
   }

   solucionarIncidencia(id: number) {
    this._incidencias.find(elemento => elemento.id === id).estado = true
   }

   insertarIncidencia(incidencia: Incidencia) {
     this._incidencias.unshift(incidencia)
   }
}
