export class Habilidad {
    id?: number;
    nombre: string;
    porcentaje: number;
    urlImagen: string;
    color: string;

    constructor(nombre:string, porcentaje:number, urlImagen: string, color: string) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.urlImagen = urlImagen;
        this.color = color
    }
}