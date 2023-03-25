import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from '../models/experiencia';
import { ExperienciaService } from '../services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit { 

  @Input() user!: string;

  experiencias: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.experienciaService.lista().subscribe(data => {
      this.experiencias = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

  onDelete(id: number): void {
    if (confirm('¿Estás seguro?')) {
      this.experienciaService.delete(id).subscribe(data => {
        this.cargarProductos();
      });
    }
  }

}