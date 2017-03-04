/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClimaServiceService } from './clima-service.service';

describe('ClimaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClimaServiceService]
    });
  });

  it('should ...', inject([ClimaServiceService], (service: ClimaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
