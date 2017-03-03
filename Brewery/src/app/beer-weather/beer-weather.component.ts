import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { BeerWeather } from './weather';

@Component({
  selector: 'beer-weather',
  templateUrl: './beer-weather.component.html',
  styleUrls: ['./beer-weather.component.css']
})
export class BeerWeatherComponent implements OnInit {

   clima : BeerWeather[];
   

  constructor(private weatherDataService : WeatherDataService) { }

  ngOnInit() {
    this.weatherDataService.getClima().subscribe(clima => this.clima=clima);
    
  }


}
