import { Component, OnInit } from '@angular/core';
import {  WeatherService } from '../weather.service';

@Component({
  selector: 'beer-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService : WeatherService) { }

  public wheaterData;

  ngOnInit() {
    // this.weatherService.getBeers().subscribe(data => this.wheaterData=data);
    // console.log(this.wheaterData);
    
  }


}
