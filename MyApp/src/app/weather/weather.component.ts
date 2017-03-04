import { Component, OnInit } from '@angular/core';
import { WeatherClass } from './weatherClass';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: WeatherClass;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
      this.weatherService.getWeather().subscribe( weatherData => this.weather = weatherData);
  }

}
