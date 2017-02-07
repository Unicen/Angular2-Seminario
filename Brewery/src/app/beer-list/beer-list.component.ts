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
  
  upQuantity(beer){
    if(beer.quantity <= beer.stock && beer.stock != 0) beer.quantity++;
  }
  
  downQuantity(beer){
    if(beer.quantity != 0) beer.quantity--;
  }
}
