import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarWarsService } from '../../star-wars.service';

@Component({
  selector: 'app-pre-defined-character',
  templateUrl: './pre-defined-character.component.html',
  styleUrls: ['./pre-defined-character.component.css']
})
export class PreDefinedCharacterComponent implements OnInit {
  router: Router;
  swService: StarWarsService;
  selectedSide = '';
  sides;
  display;
  allCharacters = [];

  constructor(swService: StarWarsService, router: Router) {
    this.swService = swService;
    this.router = router;
  }

  ngOnInit() {
    this.sides = this.swService.getSides();
    this.display = window.matchMedia('(max-width: 25rem)').matches ? 'Side' : 'Choose Side';
    const allChars = this.swService.getAllPossibleCharacters();
    allChars.map((char) => {
      this.allCharacters.push({ name: char.name, image: char.name });
    });
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) { return; }
    const value = submittedForm.value;
    this.swService.addCharacter(value.name, value.side, `/assets/characters/${value.name}.svg`);
    this.router.navigateByUrl('/characters')
      .then(() => {},
      (e) => {
        console.log(e);
      });
    this.swService.userSubmitted = true;
  }
}
