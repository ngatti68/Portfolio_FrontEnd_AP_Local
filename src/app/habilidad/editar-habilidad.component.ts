import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from '../models/habilidad';
import { HabilidadService } from '../services/habilidad.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {

  actualizado = false;
  failActualizado = false;
  msjErr = '';
  msjOK = '';

  failInit = false;
  
  hab: Habilidad = null!;

  constructor(
    private sHabilidad: HabilidadService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.sHabilidad.detail(id).subscribe(
      (data) => {
        this.hab = data;
      },
      (err) => {
        alert("No se pudo modificar la experiencia.");
        this.router.navigate(['/portfolio']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.sHabilidad.update(id, this.hab).subscribe(
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
