import { Component, OnInit } from '@angular/core';
import { BeerDataService } from '../beer-data.service';

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

    beers = [];

    constructor(private beerDataService: BeerDataService) {
    }

    ngOnInit() {
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
}
