import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherDataService {

  constructor(private http: Http) { }

  getWeatherData(){
    return this.http.get("http://dataservice.accuweather.com/forecasts/v1/daily/1day/7000?apikey=8lKpPTUpy3EjtxGJEXdUsRibDPibetvy&language=es-ES&metric=true").map(Response => {let weatherdata= Response.json();
                                                                                                                                                     let data={
                                                                                                                                                        text: weatherdata['Headline']['Text'],
                                                                                                                                                        prhase: weatherdata['DailyForecasts'][0]['Day']['IconPhrase'],
                                                                                                                                                        date: weatherdata['DailyForecasts'][0]['Date'],
                                                                                                                                                        max: weatherdata['DailyForecasts'][0]['Temperature']['Maximum']['Value'],
                                                                                                                                                        min: weatherdata['DailyForecasts'][0]['Temperature']['Minimum']['Value']
                                                                                                                                                          }
                                                                                                                                                    return data;
                                                                                                                                                      });
              }

}
