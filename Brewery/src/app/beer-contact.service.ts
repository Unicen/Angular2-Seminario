import { Injectable } from '@angular/core';
import { Contact } from './about/contacto';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { last } from 'rxjs/operator/last';
import {Observable}     from 'rxjs/Observable';


@Injectable()
export class BeerContactService {

  constructor( private http: Http) { }
  contactar(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);
    return this.http.post('https://beersangular.firebaseio.com/contacts.json', body, headers);
  }
};

 

