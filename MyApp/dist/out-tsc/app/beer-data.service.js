var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
export var BeerDataService = (function () {
    function BeerDataService(http) {
        this.http = http;
    }
    BeerDataService.prototype.getBeers = function () {
        return this.http.get('https://beerapp-586bd.firebaseio.com/beers.json').map(function (response) {
            return Object.keys(response.json()).map(function (key) {
                return response.json()[key];
            });
        });
    };
    BeerDataService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], BeerDataService);
    return BeerDataService;
}());
//# sourceMappingURL=/Users/sebastiangonzalez/Documents/Angular2-Seminario/MyApp/src/app/beer-data.service.js.map