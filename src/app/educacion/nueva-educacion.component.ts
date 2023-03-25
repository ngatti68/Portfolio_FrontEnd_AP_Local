import { Component, OnInit } from '@angular/core';
import { Educacion } from '../models/educacion';
import { EducacionService } from '../services/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {

  form: any = {};
  educacion!: Educacion;
  creado = false;
  failEducacion = false;
  mensajeFail = '';
  mensajeOK = '';

  constructor(private educacionService: EducacionService) { }

  ngOnInit() {
  }

  onCreate(): void {
    this.educacionService.save(this.form).subscribe(data => {
      this.mensajeOK = data.mensaje;
      this.creado = true;
      this.failEducacion = false;
    },
      (err: any) => {
        this.mensajeFail = err.error.mensaje;
        this.creado = false;
        this.failEducacion = true;
      }
    );
  }

  volver(): void {
    window.history.back();
  }

}
