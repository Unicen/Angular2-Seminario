import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class BeerDataService {

  constructor(private http : Http) { }

  getBeers() {
    return this.http.get('https://beerapp-586bd.firebaseio.com/beers.json').map(response => {
      return Object.keys(response.json()).map(function(key){
        return response.json()[key];
      });
    });
  }
}
