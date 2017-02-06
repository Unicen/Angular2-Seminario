import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';
import { BEERS } from './mocks';

@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
beers : Beer[];

  constructor() { }

  ngOnInit() {
    this.beers = BEERS;
  }

}
