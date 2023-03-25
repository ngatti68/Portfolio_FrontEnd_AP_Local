import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../models/persona';

const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
    url='http://localhost:8080/personas/';

    constructor(private http: HttpClient) { }

    public lista(): Observable<persona[]>{
      return this.http.get<persona[]>(this.url + 'lista', cabecera);
    }
  
    public detail(id: number): Observable<persona>{
      return this.http.get<persona>(this.url + `detail/${id}`, cabecera);
    }
  
    public update(id: number, Persona: persona): Observable<any>{
      return this.http.put<any>(this.url + `update/${id}`, Persona, cabecera);
    }
  }