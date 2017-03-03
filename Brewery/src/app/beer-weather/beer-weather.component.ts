import { Component, OnInit } from '@angular/core';
import { BeerWeatherService } from '../beer-weather.service';

@Component({
  selector: 'beer-weather',
  templateUrl: './beer-weather.component.html',
  styleUrls: ['./beer-weather.component.css']
})
export class BeerWeatherComponent implements OnInit {
  weather = [];

  constructor(private beerWeatherService : BeerWeatherService) { }

  ngOnInit() {
    this.beerWeatherService.getWeather().subscribe(weather => this.weather=weather);
  }

  consola(weather){
    debugger;
    console.log(weather);
  }

}
