import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../services/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit { 

  @Input() user!: string;

  proyectos: Proyecto[] = [];

  constructor(private proyectoServive: ProyectoService) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.proyectoServive.lista().subscribe(data => {
      this.proyectos = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

  onDelete(id: number): void {
    if (confirm('¿Estás seguro?')) {
      this.proyectoServive.delete(id).subscribe(data => {
        this.cargarProductos();
      });
    }
  }

}
