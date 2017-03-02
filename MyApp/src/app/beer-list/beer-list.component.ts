import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'beer-list',
    templateUrl: './beer-list.component.html',
    styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
    tableHead = {
        'name' : 'Nombre',
        'style' : 'Estilo',
        'price' : 'Precio',
        'stock' : 'Stock'
    }

    beers = [
        {
            'name': 'Guinness',
            'style': 'Porter',
            'price': 32,
            'specialPrice' : null,
            'stock': 20
        },
        {
            'name': 'Guinness',
            'style': 'Porter',
            'price': 546,
            'specialPrice' : 200,
            'stock': 11
        },      
        {
            'name': 'Guinness',
            'style': 'Porter',
            'price': 565,
            'specialPrice' : null,
            'stock': 220
        },
        {
            'name': 'Guinness',
            'style': 'Porter',
            'price': 89,
            'specialPrice' : null,
            'stock': 246
        }
    ];
    
    
    constructor() { }

    ngOnInit() {
        
    }

}
