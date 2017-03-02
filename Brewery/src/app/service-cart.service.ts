import { Injectable } from '@angular/core';
import { Beer } from './beer-list/beer';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable()
export class ServiceCartService {

  private _beers : Beer[] = new Array<Beer>();
  private beersSubject: BehaviorSubject<Beer[]> = new BehaviorSubject(this._beers);
  public beers : Observable<Beer[]> = this.beersSubject.asObservable();

  constructor() { }

  addToCart(beer){
    let update = false;
    this._beers.forEach(b =>{
      if(b.name==beer.name){
        b.quantity+=beer.quantity;
        update=true;
      }
    });
    if(!update){
      this._beers.push(beer);
    }
    
    this.beersSubject.next(this._beers);
    console.log(this._beers);
  }

}
