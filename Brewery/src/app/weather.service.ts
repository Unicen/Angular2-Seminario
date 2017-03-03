import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Weather } from './models/weather'

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }


   getWeather() {
     return this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/1day/2929?apikey=TghrnJCx7QlQzY8dtAs0HhwAc5vzmEG0&language=es-AR&metric=true').map(response =>  {
     	let json_data = response.json();

     	console.log(json_data)

     	let datos = new Weather();

     	datos.descripcion = json_data.Headline.Text;
     	datos.fecha = json_data["DailyForecasts"][0]["Date"];
     	datos.maxTemp = json_data["DailyForecasts"][0]["Temperature"]["Maximum"]["Value"];
     	datos.minTemp = json_data["DailyForecasts"][0]["Temperature"]["Minimum"]["Value"];
     	datos.dia = json_data["DailyForecasts"][0]["Day"]["IconPhrase"];
     	datos.noche = json_data["DailyForecasts"][0]["Night"]["IconPhrase"];
     	datos.metrica = json_data["DailyForecasts"][0]["Temperature"]["Minimum"]["Unit"]

                     	return datos;

                     });
   	}
 }	
