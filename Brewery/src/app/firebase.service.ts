import { Injectable } from '@angular/core';
import { last } from 'rxjs/operator/last';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

  constructor(private http : Http) { }

  contactar(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);
    return this.http.post('https://angular-c18ea.firebaseio.com/beers.json', body, headers);
  }
    
}
