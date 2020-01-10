import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  @ViewChild('card') item;
  characters = [];
  loadedSide = 'all';
  subscription;
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.swService.getCharacters(params.side);
        this.loadedSide = params.side;
      }
    );
    this.subscription = this.swService.charactersChanged.subscribe(
      () => {
        this.characters = this.swService.getCharacters(this.loadedSide);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
