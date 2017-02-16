import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beer = {
    "name":"Guinness",
    "style": "Stout",
    "price": 200,
    "stock": 50
  }
  constructor() { }

  ngOnInit() {
  }

}
