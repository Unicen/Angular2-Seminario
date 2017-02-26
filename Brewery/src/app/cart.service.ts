import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Beer } from './beer-list/beer';
import 'rxjs/add/operator/map';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class CartService {

  private _items: Beer[] = [];
  private _itemsSubject: BehaviorSubject<Beer[]> = new BehaviorSubject(this._items);
  public items: Observable<Beer[]> = this._itemsSubject.asObservable();


  constructor() { }

  addToCart(beer: Beer) {

    // Clone beer object into newBeer
    let newBeer = Object.assign({}, beer);

    // Iterate items looking for current beer there
    // If beer is already in cart, then increment quantity
    let alreadyInCart = false;
    this._items.forEach( (b: Beer) => {
      if (b.name == newBeer.name) {
        alreadyInCart = true;
        b.quantity += newBeer.quantity;
      }
    });

    // If beer doesnt exist in cart, then add it
    if (!alreadyInCart)
      this._items.push(newBeer);


    // this._items.push(beer);
    this._itemsSubject.next(this._items);
  }

  getItems() {
    return this._items;
  }

}
