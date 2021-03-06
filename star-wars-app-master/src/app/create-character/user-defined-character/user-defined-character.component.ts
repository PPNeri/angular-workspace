import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CompleterService, CompleterData } from 'ng2-completer';

import { StarWarsService } from '../../star-wars.service';
import { Results, CharacterName } from './results.model';
import 'rxjs/operators/map';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user-defined-character',
  templateUrl: './user-defined-character.component.html',
  styleUrls: ['./user-defined-character.component.css']
})

@Injectable()
export class UserDefinedCharacterComponent implements OnInit {
  swService: StarWarsService;
  httpClient: HttpClient;
  router: Router;
  completerData: CompleterData;
  isImageRequired = true;
  display;
  selectedSide;
  sides;
  chars = [];

  constructor(
    swService: StarWarsService,
    httpClient: HttpClient,
    completerService: CompleterService,
    router: Router
  ) {
    this.swService = swService;
    this.httpClient = httpClient;
    this.router = router;
    this.completerData = completerService.local(this.chars, 'name', 'name');
  }

  ngOnInit() {
    this.sides = this.swService.getSides();
    this.display = window.matchMedia('(max-width: 25rem)').matches ? 'Side' : 'Choose Side';
    this.fetchCharacters();
  }

  fetchCharacters() {
    let page = 1;
    while (page < 10) {
      this.httpClient.get(`https://swapi.co/api/people/?page=${page}`).subscribe((data: Results) => {
        data.results.map((char: CharacterName) => {
          this.chars.push({ name: char.name, side: '' });
        });
      });
      page++;
    }
  }

  onInputChange(entered) {
    const formattedName = entered.toLowerCase().split(' ').join('-');
    this.httpClient.get('/assets/characters/' + formattedName + '.svg')
      .subscribe(
        () => {},
      (err) => {
        this.isImageRequired = err.status !== 200;
    });
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) { return; }
    const value = submittedForm.value;
    this.swService.addCharacter(value.name, value.side, value.image);
    this.router.navigateByUrl('/characters')
      .then(() => {},
      (e) => {
        console.log(e);
      });
    this.swService.userSubmitted = true;
  }
}
