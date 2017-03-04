import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ClimaAct } from './clima/climaAct';
import 'rxjs/add/operator/map';

@Injectable()
export class ClimaServiceService {

  constructor(private http: Http) { }

   getWeather(){
     return this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/1day/2929?apikey=dFH1HO1BbCTW1GasW50lsYrNbDcKkswE&language=es-es&metric=true')
                     .map(response =>{
                        let climaA = response.json();
                        
                       let obj = {
                         tempMin : climaA['DailyForecasts'][0]['Temperature']['Maximum']['Value'],
                         tempMax : climaA['DailyForecasts'][0]['Temperature']['Minimum']['Value'],
                         desc : climaA['Headline']['Text']
                      }
                     console.log(obj);
                     return obj;
                     });
     }
}


