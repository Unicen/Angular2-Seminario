import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
beers = [{
  name: "Negra Fuerte",
  style: "Porter",
  price: 20,
  stock: 1584
},
{
  name: "Red Red Wine",
  style: "Barley Wine",
  price: 40,
  stock: 500
},
{
  name: "La Rubia",
  style: "Golden Ale",
  price: 23.5,
  stock: 121
}]

  constructor() { }

  ngOnInit() {
  }

}
