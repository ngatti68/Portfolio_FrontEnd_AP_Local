import { Component, Input, OnInit } from '@angular/core';
import { Habilidad } from '../models/habilidad';
import { HabilidadService } from '../services/habilidad.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit { 

  @Input() user!: string;

  habilidades: Habilidad[] = [];

  constructor(private habilidadService: HabilidadService) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.habilidadService.lista().subscribe(data => {
      this.habilidades = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

  onDelete(id: number): void {
    if (confirm('¿Estás seguro?')) {
      this.habilidadService.delete(id).subscribe(data => {
        this.cargarProductos();
      });
    }
  }

}
