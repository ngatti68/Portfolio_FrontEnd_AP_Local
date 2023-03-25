import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../services/proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  actualizado = false;
  failActualizado = false;
  msjErr = '';
  msjOK = '';

  failInit = false;
  
  proy: Proyecto = null!;

  constructor(
    private sProyecto: ProyectoService,
    private activeRoute: ActivatedRoute,
    private router: Router    
  ) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      (data) => {
        this.proy = data;
      },
      (err) => {
        alert("No se pudo modificar la experiencia.");
        this.router.navigate(['/portfolio']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.sProyecto.update(id, this.proy).subscribe(
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
