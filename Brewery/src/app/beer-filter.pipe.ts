import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'BeerFilterPipe',
})
export class BeerFilterPipe implements PipeTransform {
    transform(beers: any, name: any): any {
    if (name === undefined) return beers;
    return beers.filter(function(beer){
      return beer.name.toLowerCase().includes(name.toLowerCase());
    })
  }
}