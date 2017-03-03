import { Component, OnInit } from '@angular/core';
import { WeatherThings } from './weather-things'
import { BeerWeatherDataService } from '../beer-weather-data.service';





@Component({
  selector: 'beer-weather',
  templateUrl: './beer-weather.component.html',
  styleUrls: ['./beer-weather.component.css']
})
export class BeerWeatherComponent implements OnInit {
  weatherThings : WeatherThings[];

  constructor(private beerWeatherDataService : BeerWeatherDataService) { }

  ngOnInit() {
      this.beerWeatherDataService.getWeatherThings().subscribe(weatherThings => this.weatherThings=weatherThings);
      console.log(this.weatherThings);
  }

}
