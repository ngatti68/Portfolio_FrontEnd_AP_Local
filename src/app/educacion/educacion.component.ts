import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from '../models/educacion';
import { EducacionService } from '../services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  @Input() user!: string;

  educaciones: Educacion[] = [];

  constructor(private educacionService: EducacionService) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.educacionService.lista().subscribe(data => {
      this.educaciones = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

  onDelete(id: number): void {
    if (confirm('¿Estás seguro?')) {
      this.educacionService.delete(id).subscribe(data => {
        this.cargarProductos();
      });
    }
  }

}
