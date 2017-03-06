import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from './weather'

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: Weather = new Weather();

  constructor(private weatherService : WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe(weather => this.weather=weather);
  }
}
