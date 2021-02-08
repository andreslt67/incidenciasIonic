import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IncidenciasPage } from './incidencias.page';
import { ReactiveFormsModule } from '@angular/forms';
import { EstadoResolucionModule } from '../recursos/estado-resolucion.module';

import { Tab2PageRoutingModule } from './incidencias-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    ReactiveFormsModule,
    EstadoResolucionModule
  ],
  declarations: [IncidenciasPage]
})
export class Tab2PageModule {}
