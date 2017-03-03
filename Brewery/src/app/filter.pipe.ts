import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class filterPipe implements PipeTransform {

  transform(beers: Beer[], args: string): any {
    if (beers && args && (args[0]!= "")) {
        return beers.filter(beer => beer.name.toLowerCase().indexOf(args.toLowerCase()) !== -1);
    }else{
        return beers;
    }
  }

}
