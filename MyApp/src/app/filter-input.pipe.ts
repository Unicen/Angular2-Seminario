import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from "./beer-list/beer";

@Pipe({
  name: 'filterInput'
})
export class FilterInputPipe implements PipeTransform {

    transform(beers: Beer[], args?: any): any {
        if (beers && args && (args[0]!== "")) {
            return beers.filter(beer => beer.name.toLowerCase().indexOf(args.toLowerCase()) >= 0 || beer.style.toLowerCase().indexOf(args.toLowerCase()) >= 0);
        } else {
              return beers;
        }
    }
}
