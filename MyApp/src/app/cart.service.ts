import { Injectable } from '@angular/core';
import { Beer } from "./beer-list/beer";
import { BehaviorSubject, Observable } from "rxjs";
import {RequestOptions, Headers, Http} from "@angular/http";

@Injectable()
export class CartService {

    private _items :Beer[] = [];
    private _itemsSubject: BehaviorSubject<Beer[]> = new BehaviorSubject(this._items);
    public items: Observable<Beer[]> = this._itemsSubject.asObservable();

    constructor(private http: Http) { }

    addToCart(beer: Beer) {
        let $newBeer = Object.assign({}, beer);
        let _isInCart = false;

        this._items.forEach( (b:Beer) => {
            if (b.name == beer.name) {
              b.quantity += $newBeer.quantity;
              _isInCart =  true;
            }
        });

        if (!_isInCart) {
            this._items.push($newBeer);
        }

        this._itemsSubject.next(this._items);
    }

    addToServer(buy){
        let header = new Headers({ 'Content-Type': 'application/json' });
        let request = new RequestOptions({ headers: header });

        //this._items = [];
        return this.http.post("https://beerapp-586bd.firebaseio.com/carts.json", JSON.stringify(buy), request);
    }
}
