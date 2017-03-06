import { Component, OnInit } from '@angular/core';
import { BrewerydbService } from '../brewerydb.service';
import { Categorias } from './categorias'

@Component({
  selector: 'beer-brewerydb',
  templateUrl: './beer-brewerydb.component.html',
  styleUrls: ['./beer-brewerydb.component.css']
})
export class BeerBrewerydbComponent implements OnInit {

categorias: Categorias[];

constructor(private brewerydbService: BrewerydbService) { }

ngOnInit() {

       this.brewerydbService.getCategorias().subscribe(categorias => {

        this.categorias=categorias 

        debugger

       }); 
       
}

}