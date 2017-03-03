import {Component, OnInit} from "@angular/core";
import {CartService} from "../cart.service";

@Component({
  selector: 'beer-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  beers = [];
  mensaje = '';

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

  cartToServer(cart){
    if(this.beers.length > 0){
      this.cartService.cartToServer(cart).subscribe(()=>{
        this.beers = [];
        this.mensaje = "Carrito guardado con exito";
      });
    };
    if(this.beers.length<=0){
      this.mensaje = "El carrito esta vacio";
    }
  }

}
