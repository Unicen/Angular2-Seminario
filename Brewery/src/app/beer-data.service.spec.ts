/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BeerDataService } from './beer-data.service';

describe('BeerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerDataService]
    });
  });

  it('should ...', inject([BeerDataService], (service: BeerDataService) => {
    expect(service).toBeTruthy();
  }));
});
