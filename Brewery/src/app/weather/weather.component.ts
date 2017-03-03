import { Component, OnInit } from '@angular/core';
import { BreweryWeatherService } from '../brewery-weather.service';
import { Weather } from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: Weather;

  constructor(private weatherService : BreweryWeatherService) { }

  ngOnInit() {
    this.weatherService.getWeatherForecast().subscribe( w => this.weather=w);
  }

}
