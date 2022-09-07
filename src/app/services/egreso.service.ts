import { Injectable } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {
  egresos: Egreso[] = [
    new Egreso('Servicios públicos', 170000),
    new Egreso('Internet', 120000),
  ];
  constructor() { }

  eliminar(egreso: Egreso) {
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }
}
