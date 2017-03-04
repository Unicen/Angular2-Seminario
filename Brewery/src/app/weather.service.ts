import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Weather } from './weather/weather';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeather(){
    return this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/1day/2929?apikey=gTnpuAbTh3DGwID4mOAJTNIX597sfcYe&language=es&details=false&metric=true')
        .map(response =>
        {
          let wjs = response.json();
          let w = new Weather();
          w.text = wjs.Headline.Text;
          w.temperatureMin = wjs.DailyForecasts[0].Temperature.Minimum.Value;
          w.temperatureMax = wjs.DailyForecasts[0].Temperature.Maximum.Value;
          w.day = wjs.DailyForecasts[0].Day.Icon;
          w.night = wjs.DailyForecasts[0].Night.Icon;
          return w;
        });
  }

}



//{"Headline":{"EffectiveDate":"2017-03-08T01:00:00-03:00","EffectiveEpochDate":1488945600,"Severity":4,"Text":"Chubascos y tormenta eléctrica desde el martes a última hora de la noche hasta el miércoles por la tarde","Category":"thunderstorm","EndDate":"2017-03-08T19:00:00-03:00","EndEpochDate":1489010400,"MobileLink":"http://m.accuweather.com/es/ar/tandil/2929/extended-weather-forecast/2929?unit=c","Link":"http://www.accuweather.com/es/ar/tandil/2929/daily-weather-forecast/2929?unit=c"},
//  "DailyForecasts":[{"Date":"2017-03-03T07:00:00-03:00","EpochDate":1488535200,"Temperature":{"Minimum":{"Value":12.8,"Unit":"C","UnitType":17},"Maximum":{"Value":25.9,"Unit":"C","UnitType":17}},"Day":{"Icon":6,"IconPhrase":"Mayormente nublado"},"Night":{"Icon":36,"IconPhrase":"Nubes y claros"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/es/ar/tandil/2929/daily-weather-forecast/2929?day=1&unit=c","Link":"http://www.accuweather.com/es/ar/tandil/2929/daily-weather-forecast/2929?day=1&unit=c"}]}
