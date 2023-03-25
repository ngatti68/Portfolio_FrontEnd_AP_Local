export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    titulo: String;
    descripcion: String;
  
    constructor(nombre: String, apellido: String, img: String, titulo: String, descripcion: String) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.img = img;
      this.titulo = titulo;
      this.descripcion = descripcion;
    }
  }