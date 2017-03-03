import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from './beer-list/beer';

@Pipe({
  name : 'searchPipe',
})

export class SearchPipe implements PipeTransform {
  public transform(beer: Beer[], palabra: string) : any {
    if (beer && palabra && (palabra!= "")) {
      return beer.filter(beer => beer.name.toLowerCase().indexOf(palabra.toLowerCase()) !== -1);
    } else{
      return beer;
    }
  }
}
