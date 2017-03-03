import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Categorias } from './beer-brewerydb/categorias'

@Injectable()
export class BrewerydbService {

constructor(private http: Http) { }


 getCategorias(){

    return this.http.get('http://api.brewerydb.com/v2/categories/?key=94c946968e269483fda86d2cd642c8c9')
        .map(response => {
          
          let categories: Categorias[] = Array<any>();
          let listado = response.json();
          listado.data.forEach(c => {
            categories.push(c);
          })
          return categories;
          // debugger;
          // return <Categorias[]> Object.keys(listado.data).map(key => Object.assign({ key }, listado[ key ] )) 

      });
  };

}


 