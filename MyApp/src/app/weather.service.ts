import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from "@angular/http";

@Injectable()
export class WeatherService {

    constructor(private http: Http) { }

    getWeather() {
        return this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/1day/2929?apikey=SRdViSkF0hUYxgFbK5XcnZ2UHextUYuD&language=es-es&metric=true').map(response =>
            {
                let weatherData = response.json();
                let data = {
                    text : weatherData['Headline']['Text'],
                    prhase : weatherData['DailyForecasts'][0]['Day']['IconPhrase'],
                    date : weatherData['DailyForecasts'][0]['Date'],
                    max : weatherData['DailyForecasts'][0]['Temperature']['Maximum']['Value'],
                    min : weatherData['DailyForecasts'][0]['Temperature']['Minimum']['Value']
                };

                return data;
            });
    }


}
