import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { Beer } from '../beer-list/beer';

@Pipe({
  name: 'filterForName'
})
@Injectable()
export class FilterName implements PipeTransform {
  transform(beers: Beer[], args: string): any {
    if(args && beers){
        return beers.filter(beer => beer.name.toLowerCase().indexOf(args.toLowerCase()) !== -1);
    }
    return beers;
  }
}