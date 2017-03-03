/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrencyExchangeService } from './currency-exchange.service';

describe('CurrencyExchangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyExchangeService]
    });
  });

  it('should ...', inject([CurrencyExchangeService], (service: CurrencyExchangeService) => {
    expect(service).toBeTruthy();
  }));
});
