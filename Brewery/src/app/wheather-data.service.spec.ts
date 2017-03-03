/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WheatherDataService } from './wheather-data.service';

describe('WheatherDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WheatherDataService]
    });
  });

  it('should ...', inject([WheatherDataService], (service: WheatherDataService) => {
    expect(service).toBeTruthy();
  }));
});
