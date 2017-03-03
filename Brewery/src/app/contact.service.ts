import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Beer } from './beer-list/beer';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: Http) { } 
 
  sendContact(nombre:String,email:String,mensaje:String){
    
    console.log(JSON.stringify({"provider": "anonymous", "uid": "cad24b87-2f1c-43da-b99b-24f5a8748d3e", "Nombre":nombre, "Email": email, "Mensaje":mensaje}));
    
    console.log( this.http.post('https://beercontact-4573d.firebaseio.com/', JSON.stringify({"provider": "anonymous", "uid": "cad24b87-2f1c-43da-b99b-24f5a8748d3e", "Nombre":nombre, "Email": email, "Mensaje":mensaje})));
  } 

}
