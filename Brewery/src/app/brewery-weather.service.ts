import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BreweryWeatherService {

  constructor(private http:Http) { }

  weatherData(){
    return this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/1day/2929?apikey=OIaLs7W3frFbiPYk8GGBR2w6f5zbr3UG&language=es-AR&details=false&metric=true')
    .map(response =>
    {
      let apiData = response.json();

      let weatherData = {
        text: apiData['Headline']['Text'],
        phrase: apiData['DailyForecasts'][0]['Day']['IconPhrase'],
        date: apiData['DailyForecasts'][0]['Date'],
        max: apiData['DailyForecasts'][0]['Temperature']['Maximum']['Value'],
        min: apiData['DailyForecasts'][0]['Temperature']['Minimum']['Value']
      }
      return weatherData;
    });
  }

}
