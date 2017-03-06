import { Component, OnInit } from '@angular/core';
import { BreweryClimaService } from '../brewery-clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
  clima: string = "";

  constructor(private climaService: BreweryClimaService) { }

  ngOnInit() {
    this.climaService.getClima().subscribe(response => this.clima=response);
  }

}
