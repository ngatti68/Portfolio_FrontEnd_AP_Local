import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../services/proyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {
  form: any = {};
  proyecto!: Proyecto;
  creado = false;
  failProyecto = false;
  mensajeFail = '';
  mensajeOK = '';
  imagenService: any;

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit() {
  }

  onCreate(): void {
    this.proyectoService.save(this.form).subscribe(data => {
      this.mensajeOK = data.mensaje;
      this.creado = true;
      this.failProyecto = false;
    },
      (err: any) => {
        this.mensajeFail = err.error.mensaje;
        this.creado = false;
        this.failProyecto = true;
      }
    );
  }

  volver(): void {
    window.history.back();
  }

}
