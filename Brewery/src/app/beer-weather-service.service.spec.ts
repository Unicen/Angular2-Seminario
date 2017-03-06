/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BeerWeatherServiceService } from './beer-weather-service.service';

describe('BeerWeatherServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerWeatherServiceService]
    });
  });

  it('should ...', inject([BeerWeatherServiceService], (service: BeerWeatherServiceService) => {
    expect(service).toBeTruthy();
  }));
});
