import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoResolucion'
})
export class EstadoResolucionPipe implements PipeTransform {

  transform(value: boolean): string {
    if (value) {
      return "Solucionada";
    }
    else {
      return "Pendiente"
    }
  }

}
