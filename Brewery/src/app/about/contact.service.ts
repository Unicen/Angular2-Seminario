import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {BehaviorSubject, Observable} from "rxjs";
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ContactService {

  constructor(private http : Http) { }

  messageToServer(message){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("https://breweryapp.firebaseio.com/messages.json", JSON.stringify(message), options);
  }

}
