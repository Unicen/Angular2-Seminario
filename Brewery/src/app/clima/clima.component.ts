import { Component, OnInit } from '@angular/core';
import { ClimaServiceService } from '../clima-service.service';
import { ClimaAct } from './climaAct';

@Component({
  selector: 'clima-brewery',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
  climaA : ClimaAct;



  constructor(private climaService : ClimaServiceService) { }

  ngOnInit() {
   this.climaService.getWeather().subscribe(clima => this.climaA=clima );
  }

}
