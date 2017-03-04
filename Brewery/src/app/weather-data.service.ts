import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Clima } from './weather/clima';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherDataService {

  constructor(private http : Http) { }

  getClima(){
    return this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/1day/2929?apikey=A4ifp1QvUZxyUr3qp04CLlHPWClBNLNW%20&language=es&metric=true')
            .map(response =>
            {
              let clima = response.json();
              console.log(clima);
              let data={
                prhase: clima['DailyForecasts'][0]['Day']['IconPhrase'],
                prhaseNight: clima['DailyForecasts'][0]['Night']['IconPhrase'],
                date: clima['DailyForecasts'][0]['Date'],
                max: clima['DailyForecasts'][0]['Temperature']['Maximum']['Value'],
                min: clima['DailyForecasts'][0]['Temperature']['Minimum']['Value'],
                source: clima['DailyForecasts'][0]['Sources'],
                }
              return data;
            }

    )
  }

}
