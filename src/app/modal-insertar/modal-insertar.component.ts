import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Incidencia } from '../recursos/incidencia';
import { ServicioIncidenciasService } from '../recursos/servicio-incidencias.service';

@Component({
  selector: 'app-modal-insertar',
  templateUrl: './modal-insertar.component.html',
  styleUrls: ['./modal-insertar.component.scss'],
})
export class ModalInsertarComponent implements OnInit {
  form: FormGroup;

  constructor(private modalCtrl: ModalController, private alertController: AlertController, private servicioIncidencias: ServicioIncidenciasService) {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onConfirm() {
    if (this.form.controls.nombre.invalid || this.form.controls.descripcion.invalid || this.form.controls.fecha.invalid) {
      this.mostrarAlerta(this.form.controls.nombre.value, 'Por favor rellene todos los campos')
    }
    else {
      this.modalCtrl.dismiss(new Incidencia(this.form.controls.nombre.value, this.form.controls.descripcion.value, this.form.controls.fecha.value), 'confirm');
    }
  }

  async mostrarAlerta(header: string, message: string) {
    const alerta = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Aceptar']
    });

    await alerta.present();
  }  

}
