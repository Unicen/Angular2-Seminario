import {Component, OnInit} from "@angular/core";
import {CartService} from "../cart.service";

@Component({
  selector: 'beer-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  beers = [];
  mensaje = "";

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

  guardarCompra() {
    this.cartService.guardarCompra(this.beers, this.total()).subscribe(response => {
      if (response.status == 200) {
        this.mensaje = "La compra se realizó correctamente.";
        this.beers = [];
      }
    });
  }

}
