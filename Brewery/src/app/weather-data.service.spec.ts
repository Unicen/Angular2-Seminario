/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeatherDataService } from './weather-data.service';

describe('WeatherDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherDataService]
    });
  });

  it('should ...', inject([WeatherDataService], (service: WeatherDataService) => {
    expect(service).toBeTruthy();
  }));
});
