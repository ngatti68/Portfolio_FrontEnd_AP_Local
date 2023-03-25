export class Proyecto {
  id?: number;
  tituloP: string;
  descripcionP: string;
  demoP: string;
  repoP: string;
  urlimagenP: string;

  constructor(
    tituloP: string,
    descripcionP: string,
    demoP: string,
    repoP: string,
    urlimagenP: string
  ) {
    this.tituloP = tituloP;
    this.descripcionP = descripcionP;
    this.demoP = demoP;
    this.repoP = repoP;
    this.urlimagenP = urlimagenP;
  }
}