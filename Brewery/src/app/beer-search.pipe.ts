import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from './beer-list/beer';

@Pipe({
  name: 'beerSearch'
})
export class BeerSearchPipe implements PipeTransform {

  transform(items: any, args: string): any {
    let filter = args.toLocaleLowerCase();
    return filter ? items.filter(item => item.name.toLocaleLowerCase().indexOf(filter) !== -1) : items;
  }

}
