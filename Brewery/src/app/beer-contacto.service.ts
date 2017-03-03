import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
@Injectable()
export class BeerContactoService {

  constructor(private http: Http) { }

  postFormData(json) {
    /*
'Origin' => ['*'],
                'Access-Control-Request-Method' => ['POST', 'GET'],
                // Allow only POST and PUT methods
                'Access-Control-Request-Headers' => [' X-Requested-With'],
                // Allow only headers 'X-Wsse'
                'Access-Control-Allow-Credentials' => true,
                // Allow OPTIONS caching
                'Access-Control-Max-Age' => 3600,
                // Allow the X-Pagination-Current-Page header to be exposed to the browser.
                'Access-Control-Expose-Headers' => ['X-Pagination-Current-Page'],
    */
   
    return this.http.post('https://contacto-brewery.firebaseio.com/contacto.json', json);

  }

}


