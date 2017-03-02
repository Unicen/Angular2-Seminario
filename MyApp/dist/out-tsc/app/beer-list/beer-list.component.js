var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { BeerDataService } from '../beer-data.service';
export var BeerListComponent = (function () {
    function BeerListComponent(beerDataService) {
        this.beerDataService = beerDataService;
        this.tableHead = {
            'name': 'Nombre',
            'style': 'Estilo',
            'price': 'Precio',
            'stock': 'Stock',
            'quantity': 'Cantidad'
        };
        this.beers = [];
    }
    BeerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.beerDataService.getBeers().subscribe(function (beers) { return _this.beers = beers; });
    };
    BeerListComponent.prototype.upQuantity = function (beer) {
        if (beer.quantity < beer.stock)
            beer.quantity++;
    };
    ;
    BeerListComponent.prototype.downQuantity = function (beer) {
        if (beer.quantity > 0)
            beer.quantity--;
    };
    ;
    BeerListComponent = __decorate([
        Component({
            selector: 'beer-list',
            templateUrl: './beer-list.component.html',
            styleUrls: ['./beer-list.component.scss']
        }), 
        __metadata('design:paramtypes', [BeerDataService])
    ], BeerListComponent);
    return BeerListComponent;
}());
//# sourceMappingURL=/Users/sebastiangonzalez/Documents/Angular2-Seminario/MyApp/src/app/beer-list/beer-list.component.js.map