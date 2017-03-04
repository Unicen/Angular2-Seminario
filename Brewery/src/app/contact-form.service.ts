import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ContactFormService {

  constructor(private http : Http) { }

  sendInfo(json){
    return this.http.post('https://brewery-e16d8.firebaseio.com/contact.json', json);
  }

}
