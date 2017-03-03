import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { WeatherThings } from './beer-weather/weather-things';
import 'rxjs/add/operator/map';

@Injectable()
export class BeerWeatherDataService {

  constructor(private http: Http) { }

  getWeatherThings(){
    return this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/1day/2929?apikey=CYSrGj5lYasQxuYbf9WsmJIhtG865BR2&language=es-es&metric=true')
                    .map(response =>
                    {
                      let weatherThings = response.json();
                      return <WeatherThings[]>Object.keys(weatherThings).map(key => Object.assign({ key }, weatherThings[key]));
                    });
  }

}
