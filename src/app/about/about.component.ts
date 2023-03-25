import { Component, Input, OnInit } from '@angular/core';
import { persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() user!: string;

  persona: persona = new persona('', '', '', '', '');

  constructor(
    public personaService: PersonaService,
    private tokenServ: TokenService
  ) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();

    if (this.tokenServ.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona() {
    this.personaService.detail(1).subscribe((data) => {
      this.persona = data;
    });      
  }
  
}
