import {Component, OnInit} from "@angular/core";
import {CartService} from "../cart.service";

@Component({
  selector: 'beer-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  beers = [];
  cartel = '';
  status = '';

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

  save() {
    this.cartService.postBeers(this.beers, this.total)
        .subscribe(res => {
          if(res.status == 200){
            this.cartel = "Felicitaciones, la compra se ha realizado correctamente";
            this.status = "ok";
            this.beers=[];
          } else {
            this.cartel = "Ha ocurrido un error en su compra, vuelva a intentarlo más tarde";
            this.status = "error";
          }
        });
  }
}
