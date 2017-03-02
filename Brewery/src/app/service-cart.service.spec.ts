/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceCartService } from './service-cart.service';

describe('ServiceCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceCartService]
    });
  });

  it('should ...', inject([ServiceCartService], (service: ServiceCartService) => {
    expect(service).toBeTruthy();
  }));
});
