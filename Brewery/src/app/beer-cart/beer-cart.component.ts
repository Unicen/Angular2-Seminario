import { Component, OnInit } from '@angular/core';
import { ServiceCartService } from '../service-cart.service';
import { Beer } from '../beer-list/beer';

@Component({
  selector: 'beer-cart',
  templateUrl: './beer-cart.component.html',
  styleUrls: ['./beer-cart.component.css']
})
export class BeerCartComponent implements OnInit {
  beers:Array<Beer>
  constructor(private cartService: ServiceCartService) { }

  ngOnInit() {
    this.cartService.beers.subscribe(data => this.beers=data);
  }

  getTotal(){
    let total = 0;
    this.beers.forEach(b =>{
      total += b.price * b.quantity;
    });
    return total;
  }

}
