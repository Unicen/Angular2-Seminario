import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from './beer-list/beer';

@Pipe({
  name: 'filterBeers'
})
export class FilterBeersPipe implements PipeTransform {

  transform(beers: any, beerName?: any): any {
    if (beers){
    return beers.filter(beers => beers.name.indexOf(beerName) !== -1);
    }
  }

}
