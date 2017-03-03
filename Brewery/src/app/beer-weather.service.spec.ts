/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BeerWeatherService } from './beer-weather.service';

describe('BeerWeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerWeatherService]
    });
  });

  it('should ...', inject([BeerWeatherService], (service: BeerWeatherService) => {
    expect(service).toBeTruthy();
  }));
});
