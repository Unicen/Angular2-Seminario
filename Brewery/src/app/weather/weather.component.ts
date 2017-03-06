import { Component, OnInit } from '@angular/core';
import { Clima } from './clima';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'info-clima',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  clima : Clima;

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit() {
    return this.weatherDataService.getClima().subscribe(clima => this.clima=clima);
  }

}
