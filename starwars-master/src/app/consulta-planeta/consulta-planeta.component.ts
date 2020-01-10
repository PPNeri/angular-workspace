import { DataService } from './../services/data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap,map } from 'rxjs/operators';

@Component({
  selector: 'sw-consulta-planeta',
  templateUrl: './consulta-planeta.component.html',
  styleUrls: ['./consulta-planeta.component.scss']
})
export class ConsultaPlanetaComponent implements OnInit {

  planet: any;
  loading: boolean;
  category = 'planets';
  // list=["morren","lapis","pedro","dkjsvjksdhvkj"];
  planetas=new Array();
  cont = 0;
  planetaAchado: any;

  queryField=new FormControl();
  readonly SEARCH_URL= 'https://swapi.co/api/planets';
  results$:Observable <any>
  total:number
  formulario2: any;
  constructor(private dataService: DataService, private http:HttpClient) {
    
  }
  
  
  ngOnInit() {
    
      console.log(this.getRandomPlanet());

   
    
    
  }


  



  onChange(planet) {
    
     console.log(planet)

   
  
   }
   
  
  
  onSearch(){

    console.log(this.queryField.value);

    this.results$=this.http.get(this.SEARCH_URL+'/?search=')
    .pipe(
      tap((res:any)=>this.total=res.total),
      map((res:any)=>res.results)
    );
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
