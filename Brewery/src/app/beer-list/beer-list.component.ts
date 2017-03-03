import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';
import { BeerDataService } from '../beer-data.service';
import { CartService } from '../cart.service';
import { SearchService } from '../search.service';


@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
beers : Beer[];
filter : string;

  constructor(private beerDataService : BeerDataService, private cartService: CartService, private searchService: SearchService) { }

  ngOnInit() {
    this.beerDataService.getBeers().subscribe(beers => this.beers=beers);
    this.searchService.word.subscribe(word => this.filter=word);
  }

  upQuantity(beer){
    if(beer.quantity < beer.stock && beer.stock != 0) beer.quantity++;
  }

  downQuantity(beer){
    if(beer.quantity != 0) beer.quantity--;
  }

  verifyBeerQuantity(beer){
    if(beer.quantity > beer.stock) {
      alert("No hay suficientes cervezas en stock");
    }
    if(beer.quantity < 0) {
      alert("No se pueden encargar cervezas negativas ");
    }
    beer.quantity = 0;
  }

  addCart(beer: Beer) {
    this.cartService.addToCart(beer);
    beer.stock -= beer.quantity;
  }

}
