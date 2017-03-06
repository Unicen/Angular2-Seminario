/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BeerWeatherDataService } from './beer-weather-data.service';

describe('BeerWeatherDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerWeatherDataService]
    });
  });

  it('should ...', inject([BeerWeatherDataService], (service: BeerWeatherDataService) => {
    expect(service).toBeTruthy();
  }));
});
