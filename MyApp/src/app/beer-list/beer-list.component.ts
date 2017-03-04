import { Component, OnInit } from '@angular/core';
import { BeerDataService } from '../beer-data.service';
import { CartService } from '../cart.service';
import { Beer } from "./beer";

@Component({
    selector: 'beer-list',
    templateUrl: './beer-list.component.html',
    styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
    tableHead = {
        'name': 'Nombre',
        'style': 'Estilo',
        'price': 'Precio',
        'stock': 'Stock',
        'quantity': 'Cantidad'
    };

    textInput = '';

    beers = [];

    constructor(private beerDataService: BeerDataService, private cartService: CartService) {
    }

    ngOnInit() {
        document.body.className = '';
        this.beerDataService.getBeers().subscribe(beers => this.beers = beers);
    }

    upQuantity(beer) {
        if (beer.quantity < beer.stock)
            beer.quantity++;
    };

    downQuantity(beer) {
        if (beer.quantity > 0)
            beer.quantity--;
    };

    addToCart(beer: Beer) {
        this.cartService.addToCart(beer);
        beer.stock -= beer.quantity;
        beer.quantity = 0;
    }
}
