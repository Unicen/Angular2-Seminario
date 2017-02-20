import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beer-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  beers = [{
    "name":"Negra Fuerte",
    "amount": 8,
    "price": 20
  },{
    "name":"Red Red Wine",
    "amount": 3,
    "price": 40
  }]
  constructor() { }

  ngOnInit() {
  }
  
  totalPrice(beer){
    return beer.price*beer.amount;
  }

  total(){
    let total=0
    this.beers.forEach(beer => total += this.totalPrice(beer)) 
    return total 
  }
}
