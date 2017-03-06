import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Beer } from '../beer-list/beer';


@Pipe({
    name: 'nameFilter'
    //pure: false,
    
})
@Injectable()
export class BeerNameFilter implements PipeTransform {
    transform(beers: Beer[], args: string): any {
        if (beers && args && (args[0]!= "")) {
            return beers.filter(beer => beer.name.toLowerCase().indexOf(args.toLowerCase()) !== -1);
        }else{
            return beers;
        }
    }

}

