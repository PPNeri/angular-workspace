import {Component, OnInit, Input, Injectable } from '@angular/core';

import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

@Injectable()
export class ItemComponent implements OnInit {
  @Input() isFirst;
  @Input() char;
  activeSide;
  isFocused;
  swService: StarWarsService;
  isCustomImage;
  path = '';
  name = '';
  user;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
    this.activeSide = this.char.side;
    
    this.user = this.swService.getUserName(this.name, this.char);

    this.name = this.char.name.split('-').join(' ');

    this.path = this.char.image;
    if (this.char.image === undefined) {
      this.path = `/assets/characters/${this.char.name}.svg`;
    }
    this.isCustomImage = !this.path.startsWith('/assets/characters');

    this.isFocused = this.swService.focusEffect(this.isFocused, this.isFirst);

    setTimeout(() => {
      this.isFocused = false;
    }, 1500);
  }

  onAssign(side: string) {
    this.swService.onSideChosen({ name: this.char.name, side: side, image: this.char.image });
    this.activeSide = this.char.side;
  }
}
