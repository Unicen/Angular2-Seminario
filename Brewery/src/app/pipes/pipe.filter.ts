import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchPipe',
})
export class SearchPipe implements PipeTransform {
    public transform(beers: Array<any>, filter: string): any {
        let filteredBeers = new Array<any>();

        if (beers != undefined) {
            
            // Si nadie escribio nada en el campo de texto, devolvemos todas las cervezas
            if(filter == undefined || filter == "") return beers;

            // Si hay algo escrito en el campo de texto, recorremos todas las cervezas
            // hasta que encontremos alguna que tenga el nombre ingresado y la agregamos a un nuevo arreglo
            // para despues devolverlo
            for (let i = 0; i < beers.length; i++) {
                let beerName = beers[i].name.toLowerCase();

                if(beerName.includes(filter)) filteredBeers.push(beers[i]);
            }
            return filteredBeers;
        }
    }
}