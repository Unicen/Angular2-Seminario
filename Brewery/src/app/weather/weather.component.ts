import { Component, OnInit } from '@angular/core';
import { weatherData } from './weatherData';
import {  WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'info-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})


export class WeatherComponent implements OnInit {

  constructor(private weatherService : WeatherDataService) { }
  weatherData : weatherData;

  

  ngOnInit() {
    return this.weatherService.getWeatherData().subscribe(weatherData => this.weatherData=weatherData);
    
  }

}
