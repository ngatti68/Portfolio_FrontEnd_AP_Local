import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../models/experiencia';
import { ExperienciaService } from '../services/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  form: any = {};
  experiencia!: Experiencia;
  creado = false;
  failExperiencia = false;
  mensajeFail = '';
  mensajeOK = '';

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit() {
  }

  onCreate(): void {
    this.experienciaService.save(this.form).subscribe(data => {
      this.mensajeOK = data.mensaje;
      this.creado = true;
      this.failExperiencia = false;
    },
      (err: any) => {
        this.mensajeFail = err.error.mensaje;
        this.creado = false;
        this.failExperiencia = true;
      }
    );
  }

  volver(): void {
    window.history.back();
  }

}