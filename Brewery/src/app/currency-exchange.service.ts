import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Currency } from './currency-rate/currency';

@Injectable()
export class CurrencyExchangeService {

  constructor(private http: Http) { }

  getCurrencyList(){
    return this.http.get('https://openexchangerates.org/api/latest.json?app_id=7727be4ffaf54985bce506a436d05c9e')
                    .map(response => {
                      let list = response.json();
                      let currency : Currency = {
                        base: list.base,
                        moneda: "ARS",
                        cambio: list.rates.ARS
                      }
                      return currency;
                    });
  }

}
