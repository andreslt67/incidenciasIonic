import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Incidencia } from '../recursos/incidencia';
import { ServicioIncidenciasService } from '../recursos/servicio-incidencias.service';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.page.html',
  styleUrls: ['./incidencia.page.scss'],
})
export class IncidenciaPage implements OnInit {
  incidencia: Incidencia;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private servicoIncidencias: ServicioIncidenciasService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('incidenciaId')) {
        this.navCtrl.navigateBack('/tabs/incidencias');
        return;
      }
      this.incidencia = this.servicoIncidencias.getIncidencia(+paramMap.get('incidenciaId')); //+ para castear a number
    });
  }

  solucionar() {
    this.servicoIncidencias.solucionarIncidencia(this.incidencia.id);
    this.incidencia.estado = true;
  }

}
