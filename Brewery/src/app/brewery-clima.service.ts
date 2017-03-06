import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BreweryClimaService {

  constructor(private http: Http) { }

  getClima () {
    return this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/1day/2929?apikey=JwVGvnK34jY5wABwdXkS40SzmUfVVQjv&language=es&details=false&metric=true')
          .map(response => {
            let wjs = response.json();
            return wjs.Headline.Text;
          });
  }

}
