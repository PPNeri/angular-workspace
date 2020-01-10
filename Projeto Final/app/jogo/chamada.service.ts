import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators'




@Injectable({
  providedIn: 'root'
})
export class ChamadaService {

  results: any//object[];

  planetaAleatorio;

  dado: any;

  constructor(private http: HttpClient) { }

  getPlaneta() {
    // atribuindo um valor aleatório entre 1 e 61 a variavel para buscar um planeta
    this.planetaAleatorio = Math.floor(Math.random() * (61 - 1 + 1)) + 1;

    console.log(this.planetaAleatorio)

    return this.http.get(`https://swapi.co/api/planets/${this.planetaAleatorio}`).pipe(take(1))
  }

  getPlanetaC(i) {
    return this.http.get(`https://swapi.co/api/planets/${i}`)
  }

  getUsuario(){
    return this.http.get('http://localhost:3000/Usuario')
  }
  
}
