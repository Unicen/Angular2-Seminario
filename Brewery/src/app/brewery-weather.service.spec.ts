/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BreweryWeatherService } from './brewery-weather.service';

describe('BreweryWeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreweryWeatherService]
    });
  });

  it('should ...', inject([BreweryWeatherService], (service: BreweryWeatherService) => {
    expect(service).toBeTruthy();
  }));
});
