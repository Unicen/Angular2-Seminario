import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Weather } from './weather/weather';

@Injectable()
export class BreweryWeatherService {

  constructor(private http: Http) { }

  getWeatherForecast(){
    return this.http.get('http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/2929?apikey=bGqNwJopwecI7kPMpwB3RjDqbEzQyVuL&language=es-ar&metric=true')
                    .map(response => {
                      let list = response.json();
                      let weather = {
                        icono: list[0].IconPhrase,
                        link: list[0].Link,
                        temperatura: list[0].Temperature.Value,
                        probabilidadLluvia: list[0].PrecipitationProbability
                      }
                      console.log(list);
                      return weather;
                    });
  }

}