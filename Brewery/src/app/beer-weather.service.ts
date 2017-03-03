import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BeerWeatherService {

  constructor(private http: Http) { }

  getWeather(){
    return this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/1day/2929?apikey=SplRPEuPvDRC0vnC6TF520hUJJYub3pC&language=es-ar&metric=true')
                    .map(response => 
                    {
                      let weather = response.json();
                      weather = Object.keys(weather).map(key => Object.assign({ key }, weather[key]));
                      weather[1] = weather[1][0];
                      return Object.assign({"Date":weather[0].EffectiveDate,"Text":weather[0].Text,
                                          "Categoria":weather[0].Category,
                                          "Day":weather[1].Day.IconPhrase,"Night":weather[1].Night.IconPhrase,
                                          "TempMax":weather[1].Temperature.Maximum.Value,
                                          "TempMin":weather[1].Temperature.Minimum.Value});
                    })
  }

}