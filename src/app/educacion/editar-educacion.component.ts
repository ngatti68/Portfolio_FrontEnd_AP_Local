import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from '../models/educacion';
import { EducacionService } from '../services/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  actualizado = false;
  failActualizado = false;
  msjErr = '';
  msjOK = '';

  failInit = false;
  
  edu: Educacion = null!;

  constructor(
    private sEducacion : EducacionService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(
      (data) => {
        this.edu = data;
      },
      (err) => {
        alert("No se pudo modificar la educación.");
        this.router.navigate(['/portfolio']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.sEducacion.update(id, this.edu).subscribe(
      (data) => {
      this.actualizado = true;
      this.failActualizado = false;
      this.msjOK = data.mensaje;
    },
    (err: any) => {
      this.actualizado = false;
      this.failActualizado = true;
      this.msjErr = err.error.mensaje;
    }
    );
  }

  volver(): void {
    window.history.back();
  }

}
