import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { Ingreso } from '../ingreso/ingreso.model';
import { EgresoService } from '../services/egreso.service';
import { IngresoService } from '../services/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  tipo: string = 'operacionIngreso';
  descripcionInput: string;
  valorInput: number;

  constructor(
    private ingresoServicio: IngresoService,
    private egresoServicio: EgresoService
  ) {}

  ngOnInit(): void {}

  tipoOperacion(evento): void {
    this.tipo = evento.target.value;
  }

  agregarDatos() {
    if (this.tipo === 'operacionIngreso') {
      this.ingresoServicio.ingresos.push(
        new Ingreso(this.descripcionInput, this.valorInput)
      );
    } else {
      this.egresoServicio.egresos.push(
        new Egreso(this.descripcionInput, this.valorInput)
      );
    }
  }
}
