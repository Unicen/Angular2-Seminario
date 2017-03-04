import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Beer } from "../beer-list/beer";


@Component({
    selector: 'beer-cart',
    templateUrl: './beer-cart.component.html',
    styleUrls: ['./beer-cart.component.scss']
})
export class BeerCartComponent implements OnInit {
    tableTitles = {
        name : 'nombre',
        quantity : 'cantidad',
        price : 'precio',
    };
    beers = [];
    alert = {
        'first' : 'Carrito vacío.',
        'second' : '¡No te quedes con sed!'
    };

    constructor(private cartService: CartService) { }

    ngOnInit() {
        this.cartService.items.subscribe(data => {
            this.beers = data;
        });
    }

    addToList(beer: Beer) {
        this.cartService.addToCart(beer);
    }

    subtotal() {
        let total = 0;

        this.beers.forEach( b => {
            total += b.quantity * b.price;
        });

        return total;
    }

    addCartToServer(buy){
        if(this.beers.length > 0){
            this.cartService.addToServer(buy).subscribe( () => {
                this.beers = [];
                this.alert = {
                    'first' : '',
                    'second' : '¡Gracias por tu compra!'
                };

            });
        }
    }
}
