import { Component, OnInit } from '@angular/core';
import { Weather } from './weather';
import { BeerWeatherServiceService } from '../beer-weather-service.service';
@Component({
  selector: 'app-beer-weather',
  templateUrl: './beer-weather.component.html',
  styleUrls: ['./beer-weather.component.css']
})
export class BeerWeatherComponent implements OnInit {

  constructor(private BeerWeatherServiceService : BeerWeatherServiceService ) { }
  weather : Weather;

  ngOnInit() {
  return  this.BeerWeatherServiceService.getWeather().subscribe(weather => this.weather=weather);
  }

}
