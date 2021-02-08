export class Incidencia {

    id: number;
    static cont: number = 1;
    nombre: string;
    descripcion: string;
    fecha: Date;
    estado: boolean;

    constructor(nombre: string, descripcion: string, fecha: Date) {
        this.id = Incidencia.cont;
        Incidencia.cont++;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.estado = false;
    }
}
