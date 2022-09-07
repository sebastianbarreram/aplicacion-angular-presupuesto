import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../services/ingreso.service';
import { Ingreso } from './ingreso.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  ingresos: Ingreso[] = [];
  constructor(private ingresoServicio: IngresoService) {}

  ngOnInit(): void {
    this.ingresos = this.ingresoServicio.ingresos;
  }

  eliminarIngreso(ingreso: Ingreso) {
    this.ingresoServicio.eliminar(ingreso);
  }
}
