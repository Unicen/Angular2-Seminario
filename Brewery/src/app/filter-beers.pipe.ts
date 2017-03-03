import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBeers'
})
export class FilterBeersPipe implements PipeTransform {

  transform(beers: any, beerName?: any): any {
    return beers.filter(beers => beers.name.indexOf(beerName) !== -1);
  }

}
