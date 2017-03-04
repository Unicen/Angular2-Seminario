import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from './beer-list/beer';

@Pipe({
    name: 'filtrarNombre',
    pure: false
})
export class FiltrarNombrePipe implements PipeTransform {
    transform(beers: Beer[], filtro: string) {
        return beers.filter(beer => (filtro == ''  || beer.name.includes(filtro)));
    }
}
