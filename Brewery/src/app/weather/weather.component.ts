import { Component, OnInit } from '@angular/core';
import {  WeatherService } from '../weather.service';

@Component({
  selector: 'beer-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService : WeatherService) { }

  public weatherData : any[];

  ngOnInit() {
    this.weatherService.getWeather().subscribe(data => this.weatherData=data);

  }


}
