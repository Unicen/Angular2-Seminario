import { Component, OnInit } from '@angular/core';
import { CurrencyExchangeService } from "../currency-exchange.service";
import { Currency } from './currency';

@Component({
  selector: 'app-currency-rate',
  templateUrl: './currency-rate.component.html',
  styleUrls: ['./currency-rate.component.css']
})
export class CurrencyRateComponent implements OnInit {

  currency: Currency;

  constructor(private currencyRate : CurrencyExchangeService) { }

  ngOnInit() {
    this.currencyRate.getCurrencyList().subscribe( cur => this.currency=cur);
  }


}
