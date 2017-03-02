import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beer-cart',
  templateUrl: './beer-cart.component.html',
  styleUrls: ['./beer-cart.component.scss']
})
export class BeerCartComponent implements OnInit {
  title = 'beer-cart';

  constructor() { }

  ngOnInit() {
  }

}
