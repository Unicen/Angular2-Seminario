import { Component, OnInit } from '@angular/core';
import {BreweryWeatherService} from "../brewery-weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData = {};
  constructor(private weatherService:BreweryWeatherService) { }

  ngOnInit() {
    this.weatherService.weatherData().subscribe(weatherData => this.weatherData=weatherData);
  }

}
