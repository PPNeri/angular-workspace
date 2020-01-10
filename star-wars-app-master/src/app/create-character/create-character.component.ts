import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html'
})
export class CreateCharacterComponent implements OnInit {
  swService: StarWarsService;
  userWillAddOwnChar = false;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
    this.swService.userSubmitted = false;
  }
}
