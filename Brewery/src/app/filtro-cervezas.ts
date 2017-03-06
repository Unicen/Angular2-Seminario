import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from './beer-list/beer';

@Pipe({
    name: 'filtroCervezas',
    pure: false
})
export class FiltroCervezasPipe implements PipeTransform {
    transform(beers: Beer[], filtro: string) {
        return beers.filter(beer => (filtro == ''  || beer.name.toLowerCase().includes(filtro.toLowerCase()) || beer.style.toLowerCase().includes(filtro.toLowerCase())));
    }
}
