import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
beer = {
  name: "Negra Fuerte",
  style: "Porter",
  price: 20,
  stock: 1584
}
  constructor() { }

  ngOnInit() {
  }

}
