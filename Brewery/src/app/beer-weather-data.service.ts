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
                      // console.log(weatherThings['DailyForecasts'][0]['Date']);
                      // console.log(weatherThings['DailyForecasts'][0]['Day']['IconPhrase']);
                      // console.log(weatherThings['DailyForecasts'][0]['Temperature']['Maximum']['Value']);
                      let data = {
                        text : weatherThings['Headline']['Text'],
                        prhase: weatherThings['DailyForecasts'][0]['Day']['IconPhrase'],
                        date: weatherThings['DailyForecasts'][0]['Date'],
                        max: weatherThings['DailyForecasts'][0]['Temperature']['Maximum']['Value'],
                        min: weatherThings['DailyForecasts'][0]['Temperature']['Minimum']['Value']
                      }
                      return data;
                      //return <WeatherThings[]>Object.keys(weatherThings).map(key => Object.assign({ key }, weatherThings[key]));
                    });
  }

}
