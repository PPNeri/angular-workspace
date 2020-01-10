import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sw-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planet: any;
  loading: boolean;
  category = 'planets';
  clima: any;
  pontuacao=0;
  mensagem= 'Parabens!! Voce acertou: ';
  terreno: any;
  populacao: any;
  aparicoes: any;
  

  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    this.getRandomPlanet();
    
  }


  onSubmit(){

    if(this.planet.climate === this.clima) {
      this.pontuacao++
      
    }
    if(this.planet.terrain === this.terreno) {
      this.pontuacao++
      
    }
    if(this.planet.population === this.populacao) {
      this.pontuacao++
      
      
    }
    if(this.planet.films.length === this.aparicoes) {
      this.pontuacao++
      
      
    }
    
    
    window.alert("Pontuação "+this.pontuacao+"/4 ");
    
    this.terreno="";
    this.populacao="";
    this.aparicoes="";
    this.clima="";
    
  }
  
  
  getRandomPlanet() {
  
    this.loading = true;
    this.dataService.getPageData(this.category, 1).subscribe(data => {
      let planetsPerPage = data['results'].length;
      let randomPlanetPosition = Math.floor(Math.random() * data['count'] + 1);
      let randomIndex = randomPlanetPosition - 1;
      let positionAtPage =
        randomIndex -
        (Math.ceil(randomPlanetPosition / planetsPerPage) - 1) * planetsPerPage;
      let randomPlanetPage = Math.ceil(randomPlanetPosition / planetsPerPage);

      this.dataService
        .getPageData(this.category, randomPlanetPage)
        .subscribe(data => {
          this.planet = data['results'][positionAtPage];
          this.loading = false;
        });
    });
  }

  
}
