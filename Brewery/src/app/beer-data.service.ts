import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Beer } from './beer-list/beer';
import 'rxjs/add/operator/map';

@Injectable()
export class BeerDataService {

  constructor(private http: Http) { }

  getBeers(){
    return this.http.get('https://seminario-angular2.firebaseio.com/beers.json')
                    .map(response => 
                    {
                      let beers = response.json();
                      return <Beer[]>Object.keys(beers).map(key => Object.assign({ key }, beers[key]));
                    });
  }

}
