import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInsertarComponent } from '../modal-insertar/modal-insertar.component';
import { Incidencia } from '../recursos/incidencia';
import { ServicioIncidenciasService } from '../recursos/servicio-incidencias.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: 'incidencias.page.html',
  styleUrls: ['incidencias.page.scss']
})
export class IncidenciasPage {

  incidencias: Array<Incidencia>;

  constructor(private servicioIncidencias: ServicioIncidenciasService, private modalCtrl: ModalController) {}

  ionViewDidEnter() {
    this.actualizarIncidencia();
  }

  actualizarIncidencia() {
    this.incidencias = new Array<Incidencia>();
    this.servicioIncidencias.incidencias.forEach(element => {
      if (element.estado == false) {
        this.incidencias.push(element)
      }
    });
  }

  insertarIncidencia() {
    this.modalCtrl
      .create({
        component: ModalInsertarComponent
      })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        if (resultData.role === 'confirm') {
          this.servicioIncidencias.insertarIncidencia(resultData.data);
          this.actualizarIncidencia();
        }
      });
  }

}
