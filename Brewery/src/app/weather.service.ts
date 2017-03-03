import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  // getBeers(){
  //   return this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/1day/2929?apikey=TghrnJCx7QlQzY8dtAs0HhwAc5vzmEG0&language=es-AR&metric=true')
  //                   .map(response =>  response.json());
  // }
    }