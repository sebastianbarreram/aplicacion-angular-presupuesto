import { Injectable } from '@angular/core';
import { Ingreso } from '../ingreso/ingreso.model';

@Injectable({
  providedIn: 'root',
})
export class IngresoService {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 2000000),
    new Ingreso('Venta moto', 4000000),
  ];
  eliminar(ingreso: Ingreso) {
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice, 1);
  }
}
