import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BeerWeatherServiceService {

  constructor(private http: Http) { }
getWeather(){
  return this.http.get("http://dataservice.accuweather.com/forecasts/v1/daily/1day/2929?apikey=8lKpPTUpy3EjtxGJEXdUsRibDPibetvy&language=es-ES&metric=true").map(Response => {let weather= Response.json();
                                                                                                                                                     let data={
                                                                                                                                                        text: weather['Headline']['Text'],
                                                                                                                                                        prhase: weather['DailyForecasts'][0]['Day']['IconPhrase'],
                                                                                                                                                        date: weather['DailyForecasts'][0]['Date'],
                                                                                                                                                        max: weather['DailyForecasts'][0]['Temperature']['Maximum']['Value'],
                                                                                                                                                        min: weather['DailyForecasts'][0]['Temperature']['Minimum']['Value']
                                                                                                                                                          }
                                                                                                                                                    return data;
                                                                                                                                                      });
              }
            }
