export class Experiencia {
    id?: number;
    tituloE: string;
    fechaE: string;
    nombreE: string;
    descripcionE: string;

    constructor(tituloE:string, fechaE:string, nombreE: string, descripcionE: string){
        this.tituloE = tituloE;
        this.fechaE = fechaE;
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
    }
}