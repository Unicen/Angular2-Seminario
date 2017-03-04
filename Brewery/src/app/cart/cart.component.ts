import {Component, OnInit} from "@angular/core";
import {CartService} from "../cart.service";
import {BeerDataService} from "../beer-data.service";

@Component({
  selector: 'beer-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  beers = [];
  
  constructor(private cartService: CartService, private beerDataService: BeerDataService) {
  }

  ngOnInit() {

    // Subscribe to cartService changes
    this.cartService.items.subscribe(data => {
      this.beers = data;
    });
  }

  totalPrice(beer) {
    return beer.price * beer.quantity;
  }

  total() {
    let total = 0;
    this.beers.forEach(beer => total += this.totalPrice(beer));
    return total
  }
  
  save(beerCart) {
    if(this.beers.length > 0){
      this.cartService.postBeers(beerCart).subscribe(()=>{
          this.beers = [];
      });
    }
  }

}
