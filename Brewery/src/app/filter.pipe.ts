import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(beers: any, term: any): any {
    if (term === undefined) return beers;
    return beers.filter(function(beer){
      return beer.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
