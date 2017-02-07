import { Injectable } from '@angular/core';
import { BEERS } from './beer-list/mocks';

@Injectable()
export class BeerDataService {

  constructor() { }

  getBeers(){
    return BEERS;
  }

}
