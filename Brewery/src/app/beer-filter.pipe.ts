import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from './beer-list/beer';

@Pipe({
  name: 'beerFilter'
})
export class BeerFilterPipe implements PipeTransform {

  transform(beers: Beer[], args: any[]): any {
    return beers.filter(beers => beers.name.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
  }


}
