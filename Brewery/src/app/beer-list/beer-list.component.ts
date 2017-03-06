import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';
import { BeerDataService } from '../beer-data.service';
import { CartService } from '../cart.service';



@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  busqueda = '';
  beers : Beer[] = new Array<Beer>();

  constructor(private beerDataService : BeerDataService, private cartService: CartService) { }

  ngOnInit() {
    this.beerDataService.getBeers().subscribe(beers => this.beers=beers);
  }

  upQuantity(beer){
    if(beer.quantity < beer.stock && beer.stock != 0) beer.quantity++;
  }

  downQuantity(beer){
    if(beer.quantity != 0) beer.quantity--;
  }

  verifyBeerQuantity(beer){
    if(beer.quantity > beer.stock) {
      beer.quantity = beer.stock;
    }
    if(beer.quantity < 0) {
      beer.quantity = 0;
    }
  }

  addCart(beer: Beer) {
    this.cartService.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0;
  }

}
