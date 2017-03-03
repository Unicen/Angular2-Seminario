import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: 'beer-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  beers = [];

  constructor(private cartService: CartService) {
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
  comprar(beers,totalCarro) {
    //console.log(totalCarro);
    //console.log(beers);
    beers.total = totalCarro;
    let data = {
      total:totalCarro,
      detalle:JSON.stringify(beers)
    };
    this.cartService.postCompra(data).subscribe(res => alert(res));

  }
}
